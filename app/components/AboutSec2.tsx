import Image from "next/image";
import arrow from "../assets/sub-arrow-2.svg";
import aboutImg from "../assets/about-sec.svg";
import Btn from "./UI/Btn";
import Link from "next/link";

export default function AboutSec2() {
	return (
		<section className="bg-[#483f0308] pb-20">
			<div className="w-full max-w-[1400px] mx-auto flex justify-center items-center flex-wrap-reverse gap-24">
				<div className="w-full max-w-[470px] flex flex-col lg:items-end gap-10 max-sm:px-5">
					<div className="flex flex-col lg:items-end text-brown2">
						<p className="flex items-center lg:justify-end gap-2 leading-tight italic pt-6 font-petrov">
							<Image
								src={arrow}
								alt="arrow"
								style={{ width: "auto", height: "24px", marginBottom: "-14px" }}
							/>
							<span className="font-bold text-lg uppercase">ABOUT US</span>
						</p>
						<h1 className="text-right font-black text-5xl lg:text-7xl flex lg:flex-col lg:items-end max-lg:gap-3.5">
							<span>MORE</span>
							<span className="italic lg:mt-[-20px]">INFO</span>
						</h1>
					</div>

					<div className="-mt-5 grid gap-6 text-desc text-justify tracking-[-0.02em] leading-6">
						<p>
							At Powerhouse Construction Ltd, we believe that every home, regardless of location, size or
							economic status, deserve easy access to renewable energy and safe, durable construction.
						</p>
						<p>
							Our team of skilled engineers, architects, and solar experts collaborate to deliver innovative, energy-efficient and 
							top-tier solutions that meet the evolving needs of modern living.
						</p>
						<p>
							Through our innovative approach in renewable energy and modern building techniques, we aim to
							provide homes that are both sustainable and resilient to challenges of the future.
						</p>
					</div>

					<Link href="/contact" className="max-w-fit">
						<Btn type="sec" label="Send Your Request" btnAction="button" />
					</Link>
				</div>

				<div className="w-full max-w-[500px] lg:pt-20 max-lg:mt-[-5px]">
					<Image
						src={aboutImg}
						alt="arrow"
						width={500}
						height={600}
						className="w-full max-w-[500px] h-auto  drop-shadow-sharp lg:drop-shadow-[50px_-60px_0px_#1D1900]"
					/>
				</div>
			</div>
		</section>
	);
}
