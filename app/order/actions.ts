"use server"

import { getEquipment } from "@/lib/equipment"
import { sendOrderPlacedEmail } from "@/lib/order-email"
import { redirect } from "next/navigation"

export async function placeOrder(formData: FormData) {
  const equipmentId = String(formData.get("equipment") || "")
  const item = getEquipment(equipmentId)

  if (!item) {
    redirect("/equipment")
  }

  const email = String(formData.get("email") || "")
  const purpose = String(formData.get("purpose") || "")
  const estimatedPrintTime = String(formData.get("estimatedPrintTime") || "")
  const facultyInCharge = String(formData.get("facultyInCharge") || "")
  const driveLink = String(formData.get("driveLink") || "")
  const orderId = Math.random().toString(36).slice(2, 8).toUpperCase()

  await sendOrderPlacedEmail({
    orderId,
    email,
    equipmentName: item.name,
    equipmentId: item.id,
    purpose,
    estimatedPrintTime,
    facultyInCharge,
    driveLink,
  })

  redirect(`/order/success?order=${orderId}`)
}
