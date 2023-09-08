import Button from "@/app/global/button";

const BottomOverlay = () => {
	return (
		<div className="w-full flexRowCenter mb-5 self-baseline">
			<div className="w-11/12 flex flex-col botOverlay py-7 px-12 bg-white pointer-events-auto">
				<h3>Build more in less time</h3>
				<p>
					Hydrogen now features even greater DX. Set up your build and scaffold
					a full purchasing journey in just a few keystrokes, and use drop-in
					components that leverage the full power of Remix, from the cart,
					product forms to pagination.
				</p>
				<Button
					url={"./"}
					name={"Learn more about the lastest release"}
				/>
			</div>
		</div>
	);
};

export default BottomOverlay;
