import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user && !pass) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: user,
        pass: pass,
      },
    });

    const requestBody = await req.json();

    await transporter.sendMail({
      from: user,
      to: user,
      subject: `New Message from ${requestBody.name}`,
      html: `<p>Name: ${requestBody.name}</p> <p>Email: ${requestBody.email}</pr> <p>Phone: ${requestBody.phone}</p> <p>Message: ${requestBody.message}</p>`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.log("e", e);

    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
