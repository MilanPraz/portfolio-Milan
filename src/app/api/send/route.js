import { NextResponse } from "next/server";

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, subject, message } = reqBody;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "delivered@resend.dev",
      subject: subject,
      html: `<p>${message}</p>`,
    });
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 500 });
  }
}
