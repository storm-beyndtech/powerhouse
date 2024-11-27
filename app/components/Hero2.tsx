import Image from "next/image";
import heroBg from "../assets/hero-bg.png";

const Hero2 = () => {
	return (
		<div className="relative h-[70vh] flex items-center justify-center">
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
					<h1 className="text-[18vw] lg:text-[140px] font-black font-petrov lg:tracking-[-5px] leading-[-4px] text-darkLemon lg:italic lg:mb-[-70px] mb-[-7vw]">
						Contact
					</h1>
					<h1 className="text-[18vw] lg:text-[140px] font-black font-petrov lg:tracking-[-6px] leading-[-4px] text-brandYellow italic lg:pr-[110px]">
          Support
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Hero2;
