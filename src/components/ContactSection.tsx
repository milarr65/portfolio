"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLocale } from "@/contexts/locale-context";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
	name: z.string(),
	email: z.email(),
	message: z.string(),
});

export default function ContactSection() {
	const { lang } = useLocale();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const res = await fetch("/api/send", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});
			const json = await res.json();
			if (!res.ok) {
				throw new Error(json?.error || "Failed to send email");
			} else {
				const toastMessage =
					lang === "en"
						? "Your email has just been sent!"
						: "¡Tu mensaje ha sido enviado!";
				toast.success(toastMessage, {
					description: new Date().toLocaleString([], {
						dateStyle: "medium",
						timeStyle: "short",
						hour12: true,
					}),
				});
			}
		} catch (error) {
			const toastError =
				lang === "en"
					? "Failed to send email. Try again later."
					: "Hubo un error al enviar tu mensaje. Intenta de nuevo más tarde.";
			console.log(error);
			toast.error(toastError);
		}
	}

	return (
		<div
			id="contact"
			className="w-full flex flex-col gap-6 items-center justify-center p-6"
		>
			<h1 className="text-3xl font-bold">
				{lang === "en" ? "Get in touch" : "Contactame"}
			</h1>
			<p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center w-9/10">
				{lang === "en"
					? "If you have any questions or want to work with me, feel free to contact me via email."
					: "Si tienes alguna pregunta o deseas trabajar conmigo, no dudes en contactarme por correo."}
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col gap-10 w-9/10"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										type="text"
										placeholder={lang === "en" ? "Name" : "Nombre"}
										{...field}
										required
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input type="text" placeholder="Email" {...field} required />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										placeholder={
											lang === "en"
												? "Write your message here."
												: "Escribe tu mensaje aqui."
										}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="w-full flex items-center justify-end">
						<Button type="submit">{lang === "en" ? "Submit" : "Enviar"}</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
