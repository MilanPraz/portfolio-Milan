import { NextResponse } from "next/server";

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);
// resend.domains.create({ name: "milanprajapati.com.np" });
// console.log(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
  try {
    console.log("hello");
    const reqBody = await request.json();
    console.log(reqBody);
    const { email, subject, message } = reqBody;
    // console.log(typeof subject);

    const data = await resend.emails.send({
      from: "alien@milanprajapati.com.np",
      to: "mln.praz12@gmail.com",
      subject: subject,
      html: `<p>${message}</p>`,
    });

    await resend.emails.send({
      from: "alien@milanprajapati.com.np",
      to: "mln.praz12@gmail.com",
      subject: "Reply to your message",
      html: `<h1>Hello friend,</h1>
      <p>I have got your message and will be connected to you soon</p>
      <h2>Have a good day!!!</h2>
      `,
    });

    console.log(data);
    console.log("yeta");
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: err.message }, { status: 500 });
  }
}
