import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
