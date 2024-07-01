import { NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";
import fetch from "node-fetch";

const mailgun = new Mailgun(formData);

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      name,
      contact,
      user,
      admin,
      subject,
      message,
      ccRecipients,
      bccRecipients,
      attachment,
    } = data.data;

    const mg = mailgun.client({
      username: "api",
      key: process.env.NEXT_PUBLIC_MAILGUN_API_KEY,
      url: process.env.NEXT_PUBLIC_MAILGUN_API_URL,
    });

    const emailContent = `
      <div style="font-family: Arial, sans-serif;">
        <h2 style="color: #333;">${subject}</h2>
        <p style="color: #666;">${message}</p>
      </div>
    `;

    const emailData = {
      from: "Mibio.am contact <no-reply@mibio.am>",
      to: [contact],
      subject: subject,
      html: emailContent,
      "h:Reply-To": user,
    };

    if (ccRecipients || user) {
      const ccArr = [];
      if (ccRecipients) ccArr.push(ccRecipients);
      if (user) ccArr.push(user);
      emailData.cc = ccArr;
    }

    if (bccRecipients || admin) {
      const bccArr = [];
      if (bccRecipients) bccArr.push(bccRecipients);
      if (admin) bccArr.push(admin);
      emailData.bcc = bccArr;
    }

    if (attachment) {
      const fileResponse = await fetch(attachment.file);
      const fileContent = await fileResponse.arrayBuffer();
      const encodedFileContent = Buffer.from(fileContent).toString("base64");
      emailData.attachment = {
        filename: attachment.name,
        data: encodedFileContent,
      };
    }

    await mg.messages.create("mail.mibio.am", emailData);

    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
