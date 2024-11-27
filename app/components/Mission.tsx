import Image from "next/image";
import arrow from "../assets/sub-arrow-2.svg";
import missionImg from "../assets/mission-sec.svg";
import Btn from "./UI/Btn";
import Link from "next/link";

export default function Mission() {
	return (
		<section className="bg-[#483f0308] pb-20">
			<div className="w-full max-w-[1400px] mx-auto flex justify-center items-center flex-wrap-reverse gap-24">
				<div className="w-full max-w-[474px] flex flex-col lg:items-end gap-10 max-sm:px-5">
					<div className="flex flex-col lg:items-end text-brown2">
						<p className="flex items-center lg:justify-end gap-2 leading-tight italic pt-6 font-petrov">
							<Image
								src={arrow}
								alt="arrow"
								style={{ width: "auto", height: "24px", marginBottom: "-14px" }}
							/>
							<span className="font-bold text-lg uppercase">Our Goal</span>
						</p>
						<h1 className="text-right font-black text-4xl lg:text-8xl flex lg:flex-col lg:items-end max-lg:gap-3.5">
							<span>Mission</span>
							<span className="italic lg:mt-[-20px]">& Vision</span>
						</h1>
					</div>

					<div className="-mt-5 grid gap-8 text-desc text-justify tracking-[-0.02em] leading-7">
						<p>
							To deliver top-tier, sustainable solar-powered construction, creating energy-efficient homes,
							reducing grid dependence & support a greener future through superior craftsmanship.
            </p>
            
						<p>
							To inspire a future of eco-friendly, energy-efficient buildings by leading in solar-integrated
							construction and making clean and reusable energy accessible to communities worldwide.
						</p>
					</div>

					<Link href="/contact" className="max-w-fit">
						<Btn type="sec" label="Send Your Request" btnAction="button" />
					</Link>
				</div>

				<div className="w-full max-w-[600px] lg:pt-20">
					<Image
						src={missionImg}
						alt="arrow"
						width={500}
						height={600}
						className="w-full max-w-[500px] h-auto  drop-shadow-sharp lg:drop-shadow-[60px_-60px_0px_#E3F5AE]"
					/>
				</div>
			</div>
		</section>
	);
}
