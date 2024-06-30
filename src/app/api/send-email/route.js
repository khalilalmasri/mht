import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_h8VVm8Xg_AUm8g3R1ncLRBY4uT95QyDsF");

export async function POST(req) {
  const body = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["faresalharamy@gmail.com", "Hady@sourcea.se"],
      subject: "muhtref_freelancer",
      react: EmailTemplate({
        firstName: body?.name,
        profession: body?.profession,
        emailaddress: body?.email,
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
