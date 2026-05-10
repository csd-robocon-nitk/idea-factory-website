import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, booking } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

const htmlContent = `
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

      <!-- Header -->
      <div style="
        background: linear-gradient(135deg, #2563eb, #1e40af);
        color: white;
        padding: 30px;
        text-align: center;
      ">
        <h1 style="
          margin: 0;
          font-size: 32px;
        ">
          Booking Confirmed
        </h1>

        <p style="
          margin-top: 10px;
          font-size: 16px;
          opacity: 0.9;
        ">
          Your booking request has been received
        </p>
      </div>

      <!-- Body -->
      <div style="padding: 35px; color: #333;">

        <p style="
          font-size: 16px;
          line-height: 1.6;
        ">
          Hello <b>${booking.name}</b>,
        </p>

        <p style="
          font-size: 15px;
          line-height: 1.6;
          color: #555;
        ">
          Thank you for booking with us.
          Your request is currently
          <span style="
            color: #d97706;
            font-weight: bold;
          ">
            pending approval
          </span>.
        </p>

        <!-- Booking Card -->
        <div style="
          margin-top: 30px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
        ">

          <div style="
            background: #f9fafb;
            padding: 16px 20px;
            border-bottom: 1px solid #e5e7eb;
          ">
            <h2 style="
              margin: 0;
              font-size: 20px;
              color: #111827;
            ">
              Booking Details
            </h2>
          </div>

          <div style="padding: 20px;">

            <table style="
              width: 100%;
              border-collapse: collapse;
              font-size: 15px;
            ">

              <tr>
                <td style="
                  padding: 12px 0;
                  color: #6b7280;
                ">
                  Name
                </td>

                <td style="
                  padding: 12px 0;
                  font-weight: bold;
                  text-align: right;
                ">
                  ${booking.name}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 12px 0;
                  color: #6b7280;
                ">
                  Room
                </td>

                <td style="
                  padding: 12px 0;
                  font-weight: bold;
                  text-align: right;
                ">
                  ${booking.room}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 12px 0;
                  color: #6b7280;
                ">
                  Check In
                </td>

                <td style="
                  padding: 12px 0;
                  font-weight: bold;
                  text-align: right;
                ">
                  ${booking.checkIn}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 12px 0;
                  color: #6b7280;
                ">
                  Check Out
                </td>

                <td style="
                  padding: 12px 0;
                  font-weight: bold;
                  text-align: right;
                ">
                  ${booking.checkOut}
                </td>
              </tr>

              <tr>
                <td style="
                  padding: 12px 0;
                  color: #6b7280;
                ">
                  Amount
                </td>

                <td style="
                  padding: 12px 0;
                  font-weight: bold;
                  text-align: right;
                  color: #2563eb;
                  font-size: 18px;
                ">
                  ₹${booking.amount}
                </td>
              </tr>

            </table>

          </div>
        </div>

        <!-- Footer Note -->
        <div style="
          margin-top: 30px;
          padding: 18px;
          background: #eff6ff;
          border-left: 4px solid #2563eb;
          border-radius: 8px;
          color: #1e3a8a;
          font-size: 14px;
          line-height: 1.6;
        ">
          You will receive another email once your booking
          has been approved by the administration.
        </div>

      </div>

      <!-- Footer -->
      <div style="
        background: #111827;
        color: #9ca3af;
        text-align: center;
        padding: 20px;
        font-size: 13px;
      ">
        Idea Factory Booking System
      </div>

    </div>
  </div>
`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Booking Completed - Pending Approval",
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}