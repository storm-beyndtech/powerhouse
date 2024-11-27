import { PaymentInitiateResponse, UserData } from "@/types/types";

export const initiatePayment = async (userData: UserData): Promise<PaymentInitiateResponse> => {
	const response = await fetch("/api/create-payment", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ userData }),
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || "Payment initiation failed");
	}

	return response.json();
};

export const verifyPayment = async (reference: string): Promise<{ status: string }> => {
	const response = await fetch(`/api/verify-payment?reference=${reference}`);

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || "Payment verification failed");
	}

	return response.json();
};
