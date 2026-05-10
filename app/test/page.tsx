"use client";

export default function TestPage() {
  const sendEmail = async () => {
    const res = await fetch("/api/send-booking-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: "YOUR_EMAIL@gmail.com",

        booking: {
          name: "Balu",
          room: "Idea Factory Hall",
          checkIn: "10 May 2026",
          checkOut: "11 May 2026",
          amount: "NIL",
        },
      }),
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <button onClick={sendEmail}>
        Send Email
      </button>
    </div>
  );
}