import * as nodemailer from "nodemailer"

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

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
} as nodemailer.TransportOptions)

  const html = `
    <div style="
      background-color: #f4f7fb;
      padding: 40px 20px;
      font-family: Arial, sans-serif;
    ">

      <div style="
        max-width: 650px;
        margin: auto;
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      ">

        <div style="
          background: linear-gradient(135deg, #2563eb, #1e40af);
          color: white;
          padding: 30px;
          text-align: center;
        ">
          <h1 style="margin:0;">
            Order Placed Successfully
          </h1>

          <p style="
            margin-top:10px;
            opacity:0.9;
          ">
            Your request is pending approval
          </p>
        </div>

        <div style="padding:35px;">

          <p style="
            color:#4b5563;
            line-height:1.7;
          ">
            Your booking request has been received successfully.
          </p>

          <div style="
            margin-top:25px;
            border:1px solid #e5e7eb;
            border-radius:12px;
            overflow:hidden;
          ">

            <div style="
              background:#f9fafb;
              padding:18px 22px;
              border-bottom:1px solid #e5e7eb;
            ">
              <h2 style="margin:0;">
                Order Details
              </h2>
            </div>

            <div style="padding:22px;">

              <table style="
                width:100%;
                border-collapse:collapse;
              ">

                <tr>
                  <td style="padding:12px 0;color:#6b7280;">
                    Order ID
                  </td>

                  <td style="
                    padding:12px 0;
                    text-align:right;
                    font-weight:bold;
                  ">
                    ${order.orderId}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;color:#6b7280;">
                    Equipment
                  </td>

                  <td style="
                    padding:12px 0;
                    text-align:right;
                    font-weight:bold;
                  ">
                    ${order.equipmentName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;color:#6b7280;">
                    Equipment ID
                  </td>

                  <td style="
                    padding:12px 0;
                    text-align:right;
                    font-weight:bold;
                  ">
                    ${order.equipmentId}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;color:#6b7280;">
                    Estimated Print Time
                  </td>

                  <td style="
                    padding:12px 0;
                    text-align:right;
                    font-weight:bold;
                  ">
                    ${order.estimatedPrintTime}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;color:#6b7280;">
                    Faculty In Charge
                  </td>

                  <td style="
                    padding:12px 0;
                    text-align:right;
                    font-weight:bold;
                  ">
                    ${order.facultyInCharge}
                  </td>
                </tr>

              </table>

            </div>
          </div>

          <div style="
            margin-top:24px;
            padding:18px;
            background:#eff6ff;
            border-left:4px solid #2563eb;
            border-radius:8px;
            color:#1e3a8a;
            font-size:14px;
            line-height:1.6;
          ">
            <b>Purpose:</b>
            <br /><br />
            ${order.purpose}
          </div>

          <div style="
            margin-top:20px;
            font-size:14px;
            color:#4b5563;
            line-height:1.7;
          ">
            <b>Drive Link:</b>
            <br />
            <a href="${order.driveLink}">
              ${order.driveLink}
            </a>
          </div>

        </div>

        <div style="
          background:#111827;
          color:#9ca3af;
          text-align:center;
          padding:20px;
          font-size:13px;
        ">
          Idea Factory Booking System
        </div>

      </div>
    </div>
  `

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: order.email,
    subject: `Order #${order.orderId} placed successfully`,
    html,
  })
}