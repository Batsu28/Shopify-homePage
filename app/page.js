import BoxCanvas from "@/app/home/canvas/boxCanvas";
import Overlay from "./home/overlay/overlay";
import Backround from "./global/background";
import Test from "./test";

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      <Backround
        style={
          "absolute top-0 left-0 -z-10 bg-gradient-to-br from-blue-900 from-10% to-purple-900"
        }
        num={15}
      />
      <BoxCanvas />
      <Overlay />
      <Backround
        style={
          "relative -top-14 left-0 bg-gradient-to-bl from-blue-700 to-pink-900"
        }
        num={15}
      />
      {/* <Test /> */}
    </main>
  );
}
