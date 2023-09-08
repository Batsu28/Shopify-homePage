import Button from "@/app/global/button";
import { Archivo_Black } from "next/font/google";
import { IoDocumentTextSharp } from "react-icons/io5";

const font = Archivo_Black({ subsets: ["latin-ext"], weight: ["400"] });

const MidOverlay = () => {
	return (
		<div className="w-full px-12 xl:w-8/12 flex flex-col justify-start text-white">
			<h1
				className={`text-7xl ${font.className} tracking-normal leading-tight`}>
				The Shopify stack for headless commerce
			</h1>
			<p className="text-2xl">
				Fast-track your storefront build with Hydrogen, our React-based headless
				toolkit, built on Remix. Deploy for free on Oxygen, our global hosting
				solution.
			</p>
			<div className="flexRowBetween text-bold my-5 font-bold text-lg">
				<Button
					url={"./"}
					name={"Read documentation"}
					style={`flexRowCenter readDoc ${(<IoDocumentTextSharp size={2} />)}`}
				/>
				<Button
					url={"./"}
					name={`npm create @shopify/hydrogen@lastest`}
					style={"flexRowCenter "}
				/>
			</div>
		</div>
	);
};

export default MidOverlay;
