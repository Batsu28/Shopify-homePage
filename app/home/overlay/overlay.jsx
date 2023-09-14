import BottomOverlay from "./bot-overlay";
import MidOverlay from "./mid-overlay";
import TopOverlay from "./top-overlay";

const Overlay = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-10 pointer-events-none overflow-x-hidden mb-10 flex flex-col">
      <TopOverlay />
      <div className="container mx-auto h-full">
        <div className="h-full flex flex-col justify-between">
          <MidOverlay />
          <BottomOverlay />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
