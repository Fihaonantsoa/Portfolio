// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json()

//     // Envoi d’email via Resend
//     await resend.emails.send({
//       from: process.env.RESEND_FROM,
//       to: process.env.RESEND_TO,
//       subject: `Nouveau message de ${name} via portfolio`,
//       html: `
//         <h2>Nouveau message via portfolio</h2>
//         <p><strong>Nom :</strong> ${name}</p>
//         <p><strong>Email :</strong> ${email}</p>
//         <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
//       `,
//     })

//     return new Response(JSON.stringify({ success: true }), { status: 200 })
//   } catch (error) {
//     console.error('Erreur envoi email:', error)
//     return new Response(JSON.stringify({ error: 'Erreur serveur' }), { status: 500 })
//   }
// }
export default function resend(){
    return null
}