"use client";
import { Tab, Tabs } from "./ui/array/tabs";
import React, { useState, useEffect } from "react";
import { RandomizeButton, TailwindcssButtons } from "./ui/input/ace-buttons";
import useStateRef from "react-usestateref";
import { NavBar } from "./ui/nav/nav";
import { NavScreen } from "./ui/nav/nav-big-picture";
import { Render } from "./ui/macro/render";
import {
  quickSort,
  selectionSort,
  mergeSort,
  shellSort,
} from "./utils/macro-algorithms";

export const runtime = "edge";

export default function Home() {
  const tabData = [
    {
      title: "Quick Sort",
      value: "Quick",
      content: <p></p>,
    },
    {
      title: "Merge Sort",
      value: "Merge",
      content: <p></p>,
    },

    {
      title: "Shell Sort",
      value: "Shell",
      content: <p></p>,
    },
    // {
    //   title: "Insertion Sort",
    //   value: 'Insertion',
    //   content: <p></p>,
    // },
    {
      title: "Selection Sort",
      value: "Selection",
      content: <p></p>,
    },
    // {
    //   title: "Bubble Sort",
    //   value: 'Bubble',
    //   content: <p></p>,
    // },
  ];
  let initialArray = new Array<number>(100);
  for (var i = 0; i < initialArray.length; i++) {
    initialArray[i] = i + 1;
  }
  const [array, setArray] = useState([...initialArray]);

  const [isClicked, setIsClicked, clickRef] = useStateRef<boolean>(false);
  const [activeTab, setActiveTab] = useState(tabData[0].title);
  const [randomize, setRandomize, randomizeRef] = useStateRef<boolean>(false);
  const [elementDelta, setElementDelta] = useState<number>(0);
  const [swapDivs, setSwapDivs, swapDivRef] = useStateRef<number[]>([
    -1, -1, -1, -1,
  ]);
  const [green, setGreen] = useState<number[]>([-1, -1]);

  const [sortState, setSortState, stateRef] = useStateRef("Stop");

  const clickHandle = (data: boolean) => {
    setIsClicked(data);
  };

  const onTabChange = (data: Tab) => {
    setActiveTab(data.title);
  };

  const sortCompleted = async () => {
    const arraysAreEqual = array.every(
      (element, index) => element === initialArray[index]
    );
    if (arraysAreEqual) {
      for (var i = 0; i < initialArray.length - 1; i++) {
        // playAudio(initialArray, i, i + 1);
        setGreen([
          i,
          i + 1,
          i + 2,
          i + 3,
          i + 4,
          i + 5,
          i + 6,
          i + 7,
          i + 8,
          i + 9,
        ]);
        await new Promise((resolve) => setTimeout(resolve, 10));
        setGreen([-1, -1]);
      }
    }
  };

  const ButtonClick = async (state: string) => {
    setSortState(state);
    if (activeTab === "Quick Sort" && state === "Start") {
      await quickSort(array, setSwapDivs, stateRef, setArray, initialArray);
      sortCompleted();
    }
    if (activeTab === "Merge Sort" && state === "Start") {
      await mergeSort(array, setSwapDivs, stateRef, setArray, initialArray);
      sortCompleted();
    }
    if (activeTab === "Shell Sort" && state === "Start") {
      await shellSort(array, setSwapDivs, stateRef, setArray, initialArray);
      sortCompleted();
    }

    // if (activeTab === 'Insertion Sort' && state === 'Start') {
    //   await insertionSort(array, setSwapDivs, stateRef, setArray, initialArray);
    //   sortCompleted();

    // }
    if (activeTab === "Selection Sort" && state === "Start") {
      await selectionSort(array, setSwapDivs, stateRef, setArray, initialArray);
      sortCompleted();
    }
    // if (activeTab === 'Bubble Sort' && state === 'Start') {
    //   await bubbleSort(array, setSwapDivs, stateRef, setArray, initialArray);
    //   sortCompleted();

    // }
  };

  const randomizeClick = (randomizeStatus: boolean) => {
    setRandomize(randomizeStatus);
  };
  useEffect(() => {
    const shuffleArray = async () => {
      const shuffledArray = [...array];
      for (let i = 0; i < shuffledArray.length - 1; i++) {
        const j = Math.floor(Math.random() * shuffledArray.length);
        // playAudio(shuffledArray, j, i);
        setSwapDivs([j, i]);
        await timeout();

        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
        setArray(shuffledArray);
      }
      setSwapDivs([-1, -1]);
      setRandomize(false);
    };

    if (randomizeRef.current) {
      shuffleArray();
    }
  }, [randomizeRef.current]);

  const timeout = async () =>
    await new Promise((resolve) => setTimeout(resolve, 20));

  useEffect(() => {
    if (swapDivRef.current[0] !== -1 && swapDivRef.current[1] !== -1) {
      setElementDelta(
        (document
          .getElementById("position" + swapDivRef.current[1])
          ?.getBoundingClientRect().x ?? 0) -
          (document
            .getElementById("position" + swapDivRef.current[0])
            ?.getBoundingClientRect().x ?? 0)
      );
    }
  }, [swapDivRef.current]);

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar
        clickHandle={() => setIsClicked(!clickRef.current)}
        className=""
      />
      <NavScreen setIsClicked={setIsClicked} clicked={clickRef} />

      <div className="flex flex-col justify-center grow items-center md:flex-row z-10 gap-10 md:gap-20 p-5">
        <nav className=" ">
          <Tabs tabs={tabData} onTabChange={onTabChange} />
        </nav>

        <div id="height" className=" w-full md:w-3/4 lg:w-1/2">
          {/* <p className="text-center pb-5">Swaping Values:{}</p> */}

          <div className="relative w-full h-full flex overflow-hidden">
            <Render
              data={array}
              randomize={randomize}
              swapDivs={swapDivRef.current}
              elementDelta={elementDelta}
              applyGreen={green}
            />
          </div>
        </div>

        <section className="flex gap-5 min-w-fit">
          <TailwindcssButtons
            ButtonClick={ButtonClick}
            randomState={randomizeRef.current}
          />
          <RandomizeButton
            randomizeClick={randomizeClick}
            randomState={randomizeRef.current}
            sortState={stateRef.current}
          />
        </section>
      </div>

      <div>{/* <BackgroundBeams className="z-0"/> */}</div>
    </main>
  );
}
