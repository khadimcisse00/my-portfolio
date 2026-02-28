import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { nom, prenom, email, objet, message } = await req.json();

  // Verification que tous les champs sont remplis
  if (!nom || !prenom || !email || !objet || !message) {
    return NextResponse.json(
      { error: "Tous les champs sont obligatoires." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // adresse Resend par défaut
      to: "khadimcisse00@gmail.com",
      subject: `[Portfolio] ${objet}`,
      html: `
        <h2>Nouveau message depuis ton portfolio</h2>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Objet :</strong> ${objet}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du mail." },
      { status: 500 }
    );
  }
}