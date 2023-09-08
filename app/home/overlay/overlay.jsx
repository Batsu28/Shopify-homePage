import BottomOverlay from "./bot-overlay";
import MidOverlay from "./mid-overlay";
import TopOverlay from "./top-overlay";

const Overlay = () => {
	return (
		<div className="w-full h-full absolute top-0 left-0 flexRowBetween flex-col z-10 pointer-events-none overflow-y-hidden mb-10">
			<div>
				<TopOverlay />
				<MidOverlay />
			</div>
			<BottomOverlay />
		</div>
	);
};

export default Overlay;
