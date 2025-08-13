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
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { TextCursor } from "lucide-react";

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

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div
			id="contact"
			className="w-full flex flex-col gap-6 items-center justify-center p-6"
		>
			<h1 className="text-3xl font-bold">
				{lang === "en" ? "Get in touch" : "Contactame"}
			</h1>
			<p className="w-9/10 text-muted-foreground text-left sm:text-center">
				{lang === "en"
					? "If you have any questions or want to work with me, feel free to contact me via email or any of my social media profiles."
					: "Si tienes alguna pregunta o deseas trabajar conmigo, no dudes en contactarme por correo o a través de cualquiera de mis redes sociales."}
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
								<FormLabel>
									{lang === "en" ? "Your Name" : "Tu Nombre"}
								</FormLabel>
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
								<FormLabel>
									{lang === "en" ? "Your Email" : "Tu Email"}
								</FormLabel>
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
								{/* <FormLabel>
									{lang === "en" ? "Your Email" : "Tu Email"}
								</FormLabel> */}
								<FormControl>
									<Textarea
										placeholder={
											lang === "en"
												? "Write your message here."
												: "Escribe tu mensaje aqui."
										}
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
