import BoxCanvas from "@/app/home/canvas/boxCanvas";
import Overlay from "./home/overlay/overlay";

export default function Home() {
	return (
		<main className="w-full h-[1000px] bg-blue-400 relative">
			<BoxCanvas />
			<Overlay />
		</main>
	);
}
