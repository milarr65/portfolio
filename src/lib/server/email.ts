"use server";

import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) throw new Error("RESEND_API_KEY is not set");

const resend = new Resend(apiKey);

const myEmail = process.env.MY_EMAIL;
if (!myEmail) throw new Error("MY_EMAIL is not set");

export async function sendEmailServer({
	fromName,
	replyToEmail,
	subject,
	html,
}: {
	fromName: string;
	replyToEmail?: string;
	subject: string;
	html: string;
}) {
	const payload = {
		from: `${fromName} <onboarding@resend.dev>`, //this should be a verified domain by resend
		to: [myEmail],
		subject,
		html,
		reply_to: replyToEmail,
	};

	const { data, error } = await resend.emails.send(payload);
	if (error) throw error;
	return data; //data is just an id i'm pretty sure...
}
