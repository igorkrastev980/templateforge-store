/*
Minimal email sender using SendGrid's SMTP via nodemailer or SendGrid API.
This example uses nodemailer + SendGrid SMTP; for production you can use @sendgrid/mail.
*/
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});

export default async function sendEmail(to, files=[]) {
  const lines = files.map(f => `<li><a href="${f.url}">${f.name}</a></li>`).join('');
  const html = `<p>Thanks for your purchase — download your files below:</p><ul>${lines}</ul><p>If you have issues, reply to this email.</p>`;
  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to,
    subject: 'Your TemplateForge Downloads',
    html
  });
}
