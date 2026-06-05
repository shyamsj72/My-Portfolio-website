import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields required." }, { status: 400 });
    }

    // Use Gmail SMTP — configure via environment variables 
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,       // Set in .env.local
        pass: process.env.GMAIL_APP_PASS,   // Gmail App Password (not login password)
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "shyamjith2302@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#121212;color:#fff;padding:40px;border-radius:16px;">
          <h2 style="color:#fff;margin-bottom:8px;">${subject}</h2>
          <p style="color:#aaa;font-size:13px;margin-bottom:32px;">From <strong style="color:#fff">${name}</strong> &bull; <a href="mailto:${email}" style="color:#60a5fa">${email}</a></p>
          <p style="color:#ccc;line-height:1.8;font-size:16px;">${message.replace(/\n/g, "<br/>")}</p>
          <hr style="border-color:#333;margin:32px 0;" />
          <p style="color:#666;font-size:12px;">Sent via shyamjith.dev portfolio contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
