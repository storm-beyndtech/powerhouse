"use client"
import { useEffect, useRef, useState } from "react";
import Btn from "./UI/Btn";
import Image from "next/image";
import arrow from "../assets/sub-arrow-2.svg";
import { reviews } from "../utils/utils";

export default function Reviews() {
	const slideSectionWrapperRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const updateScrollButtons = () => {
		if (slideSectionWrapperRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = slideSectionWrapperRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px threshold
		}
	};

	useEffect(() => {
		const current = slideSectionWrapperRef.current;
		if (current) {
			current.addEventListener("scroll", updateScrollButtons);
			// Initial check
			updateScrollButtons();
			return () => current.removeEventListener("scroll", updateScrollButtons);
		}
	}, []);

	const getScrollAmount = () => {
		const isMobile = window.innerWidth < 640;
		const cardWidth = isMobile ? 400 : 465;
		const gap = 24;
		return cardWidth + gap;
	};

	const handleSlideBack = () => {
		if (slideSectionWrapperRef.current) {
			const scrollAmount = getScrollAmount();
			const currentScroll = slideSectionWrapperRef.current.scrollLeft;

			// If at the start, scroll to the beginning smoothly
			if (currentScroll < scrollAmount) {
				slideSectionWrapperRef.current.scrollTo({
					left: 0,
				});
			} else {
				slideSectionWrapperRef.current.scrollBy({
					left: -scrollAmount,
				});
			}
		}
	};

	const handleSlideFront = () => {
		if (slideSectionWrapperRef.current) {
			const scrollAmount = getScrollAmount();
			const currentScroll = slideSectionWrapperRef.current.scrollLeft;
			const maxScroll =
				slideSectionWrapperRef.current.scrollWidth - slideSectionWrapperRef.current.clientWidth;

			// If near the end, scroll to the end smoothly
			if (currentScroll + scrollAmount > maxScroll) {
				slideSectionWrapperRef.current.scrollTo({
					left: maxScroll,
				});
			} else {
				slideSectionWrapperRef.current.scrollBy({
					left: scrollAmount,
				});
			}
		}
	};

	return (
		<section className="py-20" id="service">
			<div className="flex flex-col items-center pb-15 italic text-brown2">
					<p className="flex items-center justify-end gap-2 leading-tight italic pt-6 font-petrov">
						<Image src={arrow} alt="arrow" style={{ width: "auto", height: "28px", marginBottom: "-20px"}} />
						<span className="font-bold text-lg uppercase">Xplore</span>
					</p>
          <h1 className="text-right font-black text-6xl lg:text-8xl">
            reviews
					</h1>
			</div>

			{/* Wrapper with scroll */}
			<div
				className="w-full flex lg:justify-center gap-6 overflow-x-scroll no-scrollbar pl-4 my-5 sm:pl-7 transition-transform animate-duration-300 animate-ease-in-out"
				ref={slideSectionWrapperRef}
			>
				{reviews.map((service, i) => (
					<div
						key={i}
						className="w-[465px] max-sm:w-[400px] p-7.5 bg-[#1d190005] flex flex-col justify-between gap-7.5 flex-shrink-0"
					>
						<div className="flex justify-between">
							<div className="grid">
								<h3 className="text-brown2 font-bold font-montserrat text-xl leading-[2]">{service.name}</h3>
								<h3 className="text-brown2/90 font-medium leading-[0]">{service.title}</h3>
							</div>
              <div className="relative w-15 h-15 grid place-content-center rounded-lg bg-brown1/5">
                <Image src={service.imgUrl} alt="avatar" width={60} height={60} className="w-full filter grayscale hover:grayscale-0 transition duration-300 rounded-lg"/>
							</div>
						</div>
						<p className=" max-sm:text-sm max-sm:leading-loose font-medium text-desc leading-7">{service.message}</p>
					</div>
				))}
			</div>

			{/* Slide controls */}
			<div className="flex justify-center mt-10 space-x-4 pr-3 ml-4">
				<Btn type="small" direction="left" onClick={handleSlideBack} enabled={canScrollLeft} />
				<Btn type="small" direction="right" onClick={handleSlideFront} enabled={canScrollRight} />
			</div>
		</section>
	);
}
