import Button from "@/app/global/button";

const BottomOverlay = () => {
  return (
    <div className="w-full flexRowCenter self-baseline relative">
      <div className="w-11/12 flex flex-col botOverlay py-7 px-12 bg-white pointer-events-auto gap-3">
        <h3 className="text-2xl font-bold">Build more in less time</h3>
        <p>
          Hydrogen now features even greater DX. Set up your build and scaffold
          a full purchasing journey in just a few keystrokes, and use drop-in
          components that leverage the full power of Remix, from the cart,
          product forms to pagination.
        </p>
        <div className="w-fit">
          <Button
            url={"./"}
            name={"Learn more about the lastest release"}
            style={"font-semibold underline underline-offset-1"}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomOverlay;
