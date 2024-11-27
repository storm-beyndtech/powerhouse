import { CgSpinner } from "react-icons/cg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type dataProp = {
	type?: "primary" | "small" | "sec";
	label?: string;
	disabled?: boolean;
	btnAction?: "button" | "submit" | "reset" | undefined;
	direction?: "left" | "right";
	onClick?: () => void;
	enabled?: boolean;
};

export default function Btn({ type, label, disabled, btnAction, direction, onClick, enabled }: dataProp) {
	switch (type) {
		case "primary":
			return (
				<button
					aria-label={label}
					disabled={disabled}
					type={btnAction}
          className={`text-[#534d1a] text-sm bg-brandYellow font-montserrat font-bold 
            sm:px-7.5 px-5 py-2 text-center inline-flex items-center justify-center whitespace-nowrap hover:bg-brandYellow/70
            drop-shadow-sharp drop-shadow-[-4px_6px_0px_#92933B] transition-all duration-300${
						disabled ? "opacity-50 cursor-not-allowed" : ""
					}`}
				>
					{disabled ? <CgSpinner className="w-4 h-4 text-white spin" /> : label}
				</button>
      );
    
		case "sec":
			return (
				<button
					aria-label={label}
					type={btnAction}
          className={`text-[#F0F0EE] text-sm bg-brown2 font-montserrat font-bold 
            px-7.5 py-3.5 text-center inline-flex items-center justify-center whitespace-nowrap hover:bg-black
            transition-all duration-300 drop-shadow-sharp drop-shadow-[-4px_6px_0px_#92933B]`}
        >
          {label}
				</button>
			);

		case "small":
			return (
				<div
					onClick={enabled ? onClick : undefined}
					className={`w-12 h-12 grid place-content-center cursor-pointer 
               text-xl transition-colors duration-200
                ${enabled ? "text-brandYellow bg-brown2 hover:bg-brown1" : "text-brown2 cursor-not-allowed"}`}
				>
					{direction === "left" ? <FaArrowLeftLong /> : <FaArrowRightLong />}
				</div>
			);

		default:
			return;
	}
}
