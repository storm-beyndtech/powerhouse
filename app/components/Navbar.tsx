"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Btn from "./UI/Btn";
import logo from "../assets/logo.svg";

const Navbar = () => {

	const handleNavbg = () => {
		const nav = document.getElementById("navBar");
		if (nav) {
			if (window.scrollY >= 150) {
				nav.style.position = "fixed";
				nav.style.backdropFilter = "blur(10px)";
				nav.style.background = "#1D1900";
			} else {
				nav.style.position = "absolute";
        nav.style.backdropFilter = "none";
        nav.style.background = "transparent";
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleNavbg);
	}, []);

	return (
		<nav className="py-5 absolute w-full top-0 left-0 z-40" id="navBar">
			<div className="max-ctn flex items-center justify-between">
				<div className="flex-shrink-0">
					<Link href="/" className="text-white font-bold text-xl">
							<Image
								src={logo}
								alt="logo"
								style={{ width: "auto", height: "40px" }}
								className="max-sm:h-24px"
							/>
					</Link>
				</div>

				<Link href="/contact">
					<Btn type="primary" label="Send Your Request" btnAction="button" />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
