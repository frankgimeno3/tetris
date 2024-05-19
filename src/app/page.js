"use client"

import Image from "next/image";
import { useState } from "react";
import MainMenu from "./mainComponents/mainElements/MainMenu";
import Game from "./mainComponents/mainElements/Game";
import GameOver from "./mainComponents/mainElements/GameOver";
import Instructions from "./mainComponents/mainElements/Instructions";

export default function Home() {

  const [screen, setScreen] = useState("mainmenu")

  return (
    <main className="flex min-h-screen flex-col text-center px-24">
      <h1 className="my-24 "> Frank Tetris</h1>
      {screen == "mainmenu" &&
        <MainMenu setScreen={setScreen} />
      }
      {screen == "game" &&
        <Game setScreen={setScreen} />
      }
      {screen == "gameover" &&
        <GameOver  setScreen={setScreen}/>
      }
            {screen == "instructions" &&
        <Instructions  setScreen={setScreen}/>
      }

    </main>
  );
}
