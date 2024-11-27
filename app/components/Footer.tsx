import Thread from "../assets/thread.svg";
import Email from "../assets/email.svg";
import IG from "../assets/ig.svg";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo-dark.svg";


export default function Footer() {
	return (
		<section className="pt-30">
			<div className="max-ctn flex w-full justify-between">
					{/*Company Logo */}
						<Link href="/">
							<Image
								src={logo}
								alt="logo"
								className="w-auto h-12"
								width={100}
								height={40}
							/>
						</Link>

						<div className="flex items-center gap-3 mt-2">
							{/* <a className="">
								<Thread />
							</a>
							<a className="">
								<Email />
							</a>
							<a className="">
								<IG />
							</a> */}
						</div>
				</div>

				<p className="text-desc/80 text-center pb-5 max-sm:text-xs mt-20">
					2024 © All rights reserved, Power House
				</p>
		</section>
	);
}
