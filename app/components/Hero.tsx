import Image from "next/image";
import heroBg from "../assets/hero-bg.png";
import floatDesc from "../assets/hero-float-desc.svg";

const Hero = () => {
	return (
		<div className="relative h-[70vh] lg:h-screen flex items-center justify-center">
			<Image
				src={heroBg}
				fill
				quality={100}
				priority
				alt="Hero background"
				className="object-top object-cover max-lg:w-full max-lg:h-full"
			/>
			<div className="max-ctn relative z-10 lg:text-center px-4 sm:px-6 lg:px-8 max-lg:pt-20">
				<div className="flex flex-col lg:items-end">
					<h1 className="text-[20vw] lg:text-[180px] font-black font-petrov lg:tracking-[-5px] leading-[-4px] text-darkLemon lg:italic lg:mb-[-80px] mb-[-8vw]">
						CLEAN
					</h1>
					<h1 className="text-[20vw] lg:text-[180px] font-black font-petrov lg:tracking-[-6px] leading-[-4px] text-brandYellow italic lg:pr-[110px]">
						ENERGY
					</h1>
				</div>
				<div className="flex justify-between items-center mt-5">
					<p className="uppercase font-semibold font-montserrat text-brandYellow lg:italic">
						<span className="text-brandYellow/50">Safe,</span> Renewable{" "}
						<span className="text-brandYellow/50">
							And <br />
							Clean
						</span>{" "}
						energy source
          </p>
          
					<Image src={floatDesc} alt="desc" width={150} height={50} className="w-40 lg:w-[260px] h-auto max-lg:hidden" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
