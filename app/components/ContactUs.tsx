"use client";
import { useState } from "react";
import Alert from "./UI/Alert";

export default function ContactUs() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");

	const sendMessage = async (e: any) => {
		e.preventDefault();
		setError("");

		if (fullName.length < 5) return setError("Full name must be at least 5 characters");
		if (email.length < 5 || !email.includes("@")) return setError("Not a valid email address");
		if (fullName.length < 5) return setError("Message must be at least 5 characters");

		try {
			setLoading(true);
			const res = await fetch(`/contact`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, email, message }),
			});
			const data = await res.json();

			if (res.ok) setSuccess(data.message);
			else throw new Error(data.message);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="bg-gray-100 py-20">
			<div className="py-5 px-4 mx-auto max-w-screen-sm">
				<h2 className="mb-10 font-montserrat text-6xl font-bold text-brown1">
					Chat <span className="max-sm:block">With Us.</span>
				</h2>
				<form onSubmit={sendMessage} className="space-y-8">
					<div>
						<label htmlFor="fullName" className="inputLabel">
							Full Name
						</label>
						<input
							type="text"
							id="fullName"
							className="input"
							placeholder="Jane Doe"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							required
						/>
					</div>

					<div>
						<label htmlFor="email" className="inputLabel">
							Your email
						</label>
						<input
							type="email"
							id="email"
							className="input"
							placeholder="name@gmail.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className="sm:col-span-2">
						<label htmlFor="message" className="inputLabel">
							Your message
						</label>
						<textarea
							id="message"
							rows={6}
							className="input"
							placeholder="Leave a comment..."
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
					</div>
					<button
						type="submit"
						className="py-3 px-5 text-sm font-semibold font-montserrat text-center text-white rounded-lg bg-brandBlue3 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
					>
						{!loading ? "Send Message" : "Sending..."}
					</button>
				</form>
				{error.length > 0 && <Alert type="warning" message={error} />}
				{success.length > 0 && <Alert type="success" message={success} />}
			</div>
		</section>
	);
}
