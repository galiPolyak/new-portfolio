import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullname, email, message } = await req.json();

    const errors: string[] = [];
    if (!fullname || fullname.trim().length < 2) errors.push("Name is required.");
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push("Invalid email address.");
    if (!message || message.trim().length < 1) errors.push("Message is required.");

    if (errors.length) {
      return NextResponse.json({ success: false, msg: errors }, { status: 400 });
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,   // e.g. contact@galipolyak.ca
      to: process.env.CONTACT_TO_EMAIL!,       // your inbox
      replyTo: email,
      subject: `New message from ${fullname}`,
      text: `Name: ${fullname}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true, msg: ["Message sent!"] });
  } catch {
    return NextResponse.json(
      { success: false, msg: ["Something went wrong. Please try again."] },
      { status: 500 }
    );
  }
}
