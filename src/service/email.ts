import nodemailer from 'nodemailer';

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  service: 'naverworks',
  host: 'smtp.naver.com',
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  ignoreTLS: false,
  requireTLS: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

export function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    from: process.env.AUTH_USER,
    html: `
        <h1>${subject}</h1>
        <div>${message}</div>
        <br/>
        <p>보낸사람: ${from}</p>
        `,
  };

  return transporter.sendMail(mailData);
}
