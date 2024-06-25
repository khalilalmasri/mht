import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_h8VVm8Xg_AUm8g3R1ncLRBY4uT95QyDsF");

export async function POST(Request) {
  try {
    const { data, error } = await resend.emails.send({
      // const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "faresalharamy@gmail.com",
      subject: "Hello world",
    //    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
      react: EmailTemplate({
        firstName: Request.body.name,
        pro: Request.body.profession,
        emailaddress: Request.body.email,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
