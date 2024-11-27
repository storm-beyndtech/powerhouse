import Image from "next/image";
import mapIMG from "../assets/map.svg";

export default function Map() {
	return (
		<section className="w-full pb-20 pt-5">
			<div className="w-full max-w-[1500px] mx-auto">
				<h1 className="text-center font-black text-3xl lg:text-8xl  text-brown2 flex flex-col mb-15 -tracking-normal">
          <span>We {" "}<span className="text-brown2/60">Power Houses</span></span>
					<span className="italic lg:-mt-5 -mt-2">All Over The Globe</span>
				</h1>
				<div className="w-full relative">
					<Image src={mapIMG} width={1000} height={600} quality={100} alt="Map" className="w-full h-auto" />
				</div>
			</div>
		</section>
	);
}
