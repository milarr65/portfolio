import { NextResponse } from "next/server";
import { sendEmailServer } from "@/lib/server/email";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, email, message } = body;

		if (!name || !email || !message) {
			return NextResponse.json({ error: "Missing fields" }, { status: 400 });
		}

		const subject = `Portfolio message from ${name}`;
		const html = `<p>${message}</p><p>Sender: ${name} &lt;${email}&gt;</p>`;

		const data = await sendEmailServer({
			fromName: name,
			replyToEmail: email,
			subject,
			html,
		});

		return NextResponse.json({ ok: true, id: data?.id ?? null });
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error.message);
			return NextResponse.json(
				{ error: error?.message ?? "unknown" },
				{ status: 500 }
			);
		} else {
			console.error("An unknown error occured", error);
			return NextResponse.json({ error: "unknown" }, { status: 500 });
		}
	}
}
