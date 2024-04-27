import Image from "next/image";
import CountDown from "./components/countdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 md:px-24 py-12 text-center md:py-52">
      <Image src={"/logo.svg"} alt="Logo" width={"350"} height={"350"} />
      <div className="flex flex-col justify-center items-center gap-8 md:gap-12">
        <h1 className="text-4xl font-light">
          A Simple DEX for all your swapping needs
        </h1>

        <CountDown targetDate={new Date("2024-05-15T10:00:00")} />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-offwhite">Powered by</h2>
        <div className="flex flex-row gap-6">
          <Image
            src={"/chains/blast.png"}
            height={"50"}
            width={"50"}
            alt="Blast Icon"
          />
          <Image
            src={"/chains/mode.png"}
            height={"50"}
            width={"50"}
            alt="Mode Icon"
          />
        </div>
      </div>
    </main>
  );
}
