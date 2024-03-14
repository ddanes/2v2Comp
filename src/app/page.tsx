/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
"use client"
import Image from "next/image";
import CountdownTimer from "./components/timer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-4">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black text-center p-4 rounded-lg shadow-lg">
        <p>Welcome to the ultimate showdown in the digital realm where creativity meets code! Get ready to witness a thrilling 2v2 coding challenge that will set the virtual stage on fire. Join us as David and Hank, the dynamic duo known for their innovative solutions, face off against Tony and Brandon, the masterminds of efficiency and design. These formidable pairs will embark on an intense journey to build a groundbreaking web application under the ticking clock. With their skills put to the ultimate test, they'll push the boundaries of web development, exploring new technologies and collaborative strategies. Who will triumph as the architects of the future's web? Join us to find out which team's application will dazzle the digital world. It's not just a battle of codes; it's a quest for glory in the arena of innovation!</p>
      </div>
      <div className="w-full max-w-xs flex-col items-center justify-center bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black rounded-lg shadow-lg">
          <CountdownTimer />
      </div>
    </main>
  );
}
