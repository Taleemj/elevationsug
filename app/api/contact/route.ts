import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, enquiry, message } = body;

    // Validate required fields
    if (!name || !email || !enquiry) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || "info@elevationevents.co.ug",
      subject: `New Enquiry: ${enquiry}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Enquiry Type: ${enquiry}
        Message: ${message || "N/A"}
      `,
      html: `
        <h3>New Enquiry from Elevation Events Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Enquiry Type:</strong> ${enquiry}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\n/g, "<br>") : "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
