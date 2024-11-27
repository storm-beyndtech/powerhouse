import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

type mailOpt = {
	from: string;
	to: string;
	subject: string;
	html: string;
};

let transporter = nodemailer.createTransport({
	host: "mail.privateemail.com",
	port: 465,
	secure: true,
	auth: {
		user: `${process.env.SMTP_USER}`,
		pass: `${process.env.SMTP_PASSWORD}`,
	},
	tls: { rejectUnauthorized: false },
});

const verifyTransporter = () => {
	return new Promise((resolve, reject) => {
		transporter.verify((error, success) => {
			if (error) {
				console.log(error);
				reject(error);
			} else {
				console.log("Server is ready to take our messages");
				resolve(success);
			}
		});
	});
};

const sendMail = (mailData: mailOpt) => {
	return new Promise((resolve, reject) => {
		transporter.sendMail(mailData, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log(info);
				resolve(info);
			}
		});
	});
};

export async function POST(req: NextRequest) {
	const { userEmail, fullName, message } = await req.json();

	try {
		await verifyTransporter();

		const mailData = {
			from: `${process.env.SMTP_USER}`,
			to: `${process.env.SMTP_USER}`,
			subject: "Contact Message!",
			html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <title>Contact Message</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        table {
          max-width: 600px;
          width: 100%;
          margin: 0 auto;
          border-spacing: 0;
        }
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
        .footer {
          font-size: 12px;
          color: #fafafa;
          background-color: #13160F;
          padding: 20px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <table role="presentation" style="width: 100%; background-color: #f4f4f4;">
        <tr>
          <td style="padding: 20px 0;">
            <table role="presentation">
              <!-- Header Section with Logo -->
              <tr>
                <td style="background-color: #13160F; padding: 20px; text-align: center;">
                  <img src="https://www.powerhouseconstruction.ltd/logo.png" alt="Power House Logo" style="max-width: 100px;">
                </td>
              </tr>
              <!-- Body Content Section -->
              <tr>
             <td style="padding: 20px; line-height: 1.8;">
              <p>Details:</p>
              <ul>
                <li>Email: ${userEmail}</li>
                <li>Name: ${fullName}</li>
              </ul>

              <p>${message}</p>
              <p>Thank you,</p>
              <p>Power House Team</p>
            </td>
              </tr>
              <!-- Footer Section -->
              <tr>
                <td class="footer">
                  <img src="https://www.powerhouseconstruction.ltd/logo.png" alt="Power House Logo" style="max-width: 80px; margin-bottom: 10px;">
                  <p>© 2023 Power House | All Rights Reserved</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>    
      `,
		};

		// Send mail
		await sendMail(mailData);

		return new Response(JSON.stringify({ status: "ok" }));
	} catch (error) {
		return new Response(JSON.stringify({ error: "An error occurred while sending the email" }));
	}
}
