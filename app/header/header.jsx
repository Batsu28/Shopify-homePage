import Button from "../global/button";
import Navbar from "./navbar";
import { Fira_Code } from "next/font/google";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaShopify, FaDiscord } from "react-icons/fa";

const font = Fira_Code({ subsets: ["latin"], weight: ["600"] });

const Header = () => {
  return (
    <header className={`px-6 bg-black ${font.className}`}>
      <div className="w-full flex justify-between h-xl py-3 w-full text-white text-sm">
        <Button
          url={"./"}
          name={<FaShopify className="w-full h-full" />}
          style={"w-8 h-10 mr-12"}
        />
        <div className="flexRowBetween w-fit sm:w-full">
          <Navbar />
          <div className="flexRowBetween gap-5">
            <Button
              url={"./"}
              name={"Docs"}
              style={"flexRowCenter border-2 border-white px-3 rounded-2xl"}
            />
            <div className="gap-5 hidden lg:flex justify-between items-center">
              <Button
                url={"./"}
                name={<FaDiscord className="w-full h-full" />}
                style={"w-6 h-6 hover:opacity-75"}
              />
              <Button
                url={"./"}
                name={<BsGithub className="w-full h-full" />}
                style={"w-6 h-6 hover:opacity-75"}
              />
              <Button
                url={"./"}
                name={<BsTwitter className="w-full h-full" />}
                style={"w-6 h-6 hover:opacity-75"}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
