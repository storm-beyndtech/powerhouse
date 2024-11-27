"use client";
import { useState } from "react";
import Image from "next/image";
import arrow from "../assets/sub-arrow-2.svg";

export default function FAQ() {
	const [openQuestions, setOpenQuestions] = useState<Array<boolean>>([false, false, false, false]);

	const toggleQuestion = (index: number) => {
		const newOpenQuestions = [...openQuestions];
		newOpenQuestions[index] = !newOpenQuestions[index];
		setOpenQuestions(newOpenQuestions);
	};

	return (
		<section className="w-full px-5 py-10">
			<div className="relative w-full grid place-content-center gap-14">
				<div className="relative text-[200px] lg:text-[240px] font-poppins font-black text-center text-[#1d190008] leading-[0] select-none whitespace-nowrap overflow-x-hidden">
					<h1>Frequently Asked Questions</h1>
				</div>

				<div className="flex flex-col items-center italic text-brown2 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
					<h1 className="text-center font-black text-[80px]">FAQ</h1>
					<p className="max-lg:hidden flex items-center justify-end gap-2 leading-tight italic font-petrov">
						<Image src={arrow} alt="arrow" style={{ width: "auto", height: "24px", marginBottom: "-20px" }} />
						<span className="font-bold text-lg uppercase">Frequent Questions</span>
					</p>
				</div>
			</div>

			{faqData.map((item, index) => (
				<div
					key={index}
					className="max-ctn rounded-sm border border-solid border-gray-300 p-8 max-md:px-4 max-md:py-7"
				>
					<div
						onClick={() => toggleQuestion(index)}
						className="mb-4 flex cursor-pointer items-start justify-between"
					>
						<p className="text-lg font-semibold lg:text-xl">{item.question}</p>
						<div className="relative ml-10 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-brown2">
							<div
								className={`absolute h-3 w-0.5 bg-brandYellow transition-transform ${
									openQuestions[index] ? "transform rotate-90" : ""
								}`}
							></div>
							<div className="h-0.5 w-4 border border-solid border-brandYellow"></div>
						</div>
					</div>
					<p className="text-justify mb-4 text-desc" style={{ display: openQuestions[index] ? "block" : "none" }}>
						{item.answer}
					</p>
				</div>
			))}
		</section>
	);
}




const faqData = [
	{
		question: "WHY USE SOLAR FOR MY HOME AND BUSINESS?",
		answer:
			"Solar energy is a clean, renewable source of power that can significantly reduce electricity bills and dependence on the grid. It also increases property value and is environmentally friendly.",
	},
	{
		question: "ARE SERVICES AVAILABLE OUTSIDE NIGERIA?",
		answer:
			"Yes, solar services and installations can be provided outside Nigeria, depending on the provider's coverage area and logistics support.",
	},
	{
		question: "CAN SOLAR WORK IN AREAS WITH LESS SUNLIGHT?",
		answer:
			"Yes, solar panels can still generate electricity in areas with less sunlight. Modern solar technology is designed to work efficiently even under cloudy conditions, although energy production may be reduced.",
	},
];
