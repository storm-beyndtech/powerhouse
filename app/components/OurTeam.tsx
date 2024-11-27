"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Btn from "./UI/Btn";
import Image from "next/image";
import arrow from "../assets/sub-arrow-2.svg";

export default function OurTeam() {
	const slideSectionWrapperRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	// Memoize the update function
	const updateScrollButtons = useCallback(() => {
		if (slideSectionWrapperRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = slideSectionWrapperRef.current;
			setCanScrollLeft(scrollLeft > 10); // Small threshold for better UX
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
		}
	}, []);

	useEffect(() => {
		const current = slideSectionWrapperRef.current;
		if (current) {
			// Add resize observer to handle window resizing
			const resizeObserver = new ResizeObserver(updateScrollButtons);
			resizeObserver.observe(current);

			// Add scroll listener
			current.addEventListener("scroll", updateScrollButtons);

			// Initial check
			updateScrollButtons();

			return () => {
				current.removeEventListener("scroll", updateScrollButtons);
				resizeObserver.disconnect();
			};
		}
	}, [updateScrollButtons]);

	const getScrollAmount = useCallback(() => {
		if (!slideSectionWrapperRef.current) return 0;

		const isMobile = window.innerWidth < 640;
		const cardWidth = isMobile ? window.innerWidth - 48 : 483; // Account for padding
		const gap = isMobile ? 24 : 40; // sm:gap-10 = 40px

		// Calculate visible cards (slides per view)
		const containerWidth = slideSectionWrapperRef.current.clientWidth;
		const cardsPerView = Math.floor(containerWidth / (cardWidth + gap)) || 1; // Ensure at least 1 card

		// Scroll by the width of one full view of cards
		return (cardWidth + gap) * cardsPerView;
	}, []);

	const handleSlideBack = useCallback(() => {
		if (!slideSectionWrapperRef.current || !canScrollLeft) return;

		const scrollAmount = getScrollAmount();
		const currentScroll = slideSectionWrapperRef.current.scrollLeft;

		if (currentScroll < scrollAmount) {
			slideSectionWrapperRef.current.scrollTo({
				left: 0,
				behavior: "smooth",
			});
		} else {
			slideSectionWrapperRef.current.scrollBy({
				left: -scrollAmount,
				behavior: "smooth",
			});
		}
	}, [canScrollLeft, getScrollAmount]);

	const handleSlideFront = useCallback(() => {
		if (!slideSectionWrapperRef.current || !canScrollRight) return;

		const scrollAmount = getScrollAmount();
		const currentScroll = slideSectionWrapperRef.current.scrollLeft;
		const maxScroll = slideSectionWrapperRef.current.scrollWidth - slideSectionWrapperRef.current.clientWidth;

		if (currentScroll + scrollAmount > maxScroll) {
			slideSectionWrapperRef.current.scrollTo({
				left: maxScroll,
				behavior: "smooth",
			});
		} else {
			slideSectionWrapperRef.current.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	}, [canScrollRight, getScrollAmount]);

	return (
		<section className="relative">
			<div className="max-lg:hidden relative text-[18vw] font-poppins font-black text-center text-[#1d190008] leading-[0] select-none">
				<h1>Our Team</h1>
				<h1>Our Team</h1>
				<h1>Our Team</h1>
			</div>

			<div className="lg:absolute left-0 top-[50%] lg:translate-y-[-50%] w-full grid place-content-center gap-14">
				<div className="flex flex-col items-center italic text-brown2">
					<p className="flex items-center justify-end gap-2 leading-tight italic pt-6 font-petrov">
						<Image src={arrow} alt="arrow" style={{ width: "auto", height: "28px", marginBottom: "-20px" }} />
						<span className="font-bold text-lg uppercase">Xplore</span>
					</p>
					<h1 className="text-right font-black text-6xl lg:text-8xl">Our Team</h1>
				</div>

				{/* Wrapper with scroll */}
				<div
					className={`w-full flex sm:gap-10 overflow-x-scroll no-scrollbar my-5 sm:pl-7
          scroll-smooth transition-all duration-300 ease-in-out`}
					ref={slideSectionWrapperRef}
				>
					{[1, 2, 3, 1, 2, 3].map((_, i) => (
						<div key={i} className="relative w-full max-w-[483px] flex-shrink-0 px-3">
							<Image
								width={300}
								height={350}
								className="w-full h-auto object-cover transition-transform duration-300
                group-hover:scale-[1.02]"
								src={`/team/team-${_}.svg`}
								alt={`BoldFitnessNG Coach ${i + 1}`}
								loading="lazy"
							/>
						</div>
					))}
				</div>

				{/* Slide controls */}
				<div className="flex justify-center space-x-4 ">
					<Btn type="small" direction="left" onClick={handleSlideBack} enabled={canScrollLeft} />
					<Btn type="small" direction="right" onClick={handleSlideFront} enabled={canScrollRight} />
				</div>
			</div>
		</section>
	);
}
