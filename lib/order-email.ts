type OrderEmail = {
  orderId: string
  email: string
  equipmentName: string
  equipmentId: string
  purpose: string
  estimatedPrintTime: string
  facultyInCharge: string
  driveLink: string
}

export async function sendOrderPlacedEmail(order: OrderEmail) {
  const subject = `Order #${order.orderId} placed successfully`
  const text = [
    `Your order #${order.orderId} has been placed successfully and is pending approval.`,
    "",
    `Equipment: ${order.equipmentName} (${order.equipmentId})`,
    `Purpose: ${order.purpose}`,
    `Estimated print time: ${order.estimatedPrintTime}`,
    `Faculty in charge: ${order.facultyInCharge}`,
    `Drive link: ${order.driveLink}`,
  ].join("\n")

  if (process.env.RESEND_API_KEY && process.env.ORDER_EMAIL_FROM) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.ORDER_EMAIL_FROM,
        to: order.email,
        subject,
        text,
      }),
    })

    if (!response.ok) {
      throw new Error("Could not send order confirmation email")
    }

    return
  }

  console.info("Order email queued", {
    to: order.email,
    subject,
    text,
  })
}
