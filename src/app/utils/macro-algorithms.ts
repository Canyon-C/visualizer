import React, { SetStateAction, Dispatch } from "react";
import * as Tone from "tone";

const gain = new Tone.Gain(0.05).toDestination();

export const playAudio = (
  array: number[],
  index_1: number,
  index_2: number
) => {
  const frequency = Math.round(((array[index_1] + array[index_2]) / 2) * 10);
  const osc = new Tone.Oscillator(
    frequency as Tone.Unit.Frequency,
    "triangle" as Tone.ToneOscillatorType
  )
    .connect(gain)
    .start()
    .stop("+0.1" as Tone.Unit.Time);

  osc.onstop = () => {
    osc.dispose();
  };
};

export const quickSort = async (
  array: number[],
  setSwapDivs: Dispatch<SetStateAction<number[]>>,
  stateRef: { current: string },
  setArray: Dispatch<SetStateAction<number[]>>,
  initialArray: number[]
) => {
  const arraysAreEqual = array.every(
    (element, index) => element === initialArray[index]
  );
  if (arraysAreEqual) {
    return;
  }
  const stack: { low: number; high: number }[] = [];
  stack.push({ low: 0, high: array.length - 1 });

  while (stack.length) {
    const { low, high } = stack.pop()!;
    if (low < high) {
      const pivotIndex = await partition(
        array,
        low,
        high,
        setSwapDivs,
        setArray,
        stateRef
      );
      if (pivotIndex !== undefined) {
        stack.push({ low: low, high: pivotIndex - 1 });
        stack.push({ low: pivotIndex + 1, high: high });
      }
    }
  }
};

const partition = async (
  array: number[],
  low: number,
  high: number,
  setSwapDivs: Dispatch<SetStateAction<number[]>>,
  setArray: Dispatch<SetStateAction<number[]>>,
  stateRef: { current: string }
) => {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (stateRef.current === "Stop") {
      return;
    }
    if (array[j] < pivot) {
      i++;
      playAudio(array, i, j);
      setSwapDivs([i, j]);
      await timeout();
      [array[i], array[j]] = [array[j], array[i]];
      setSwapDivs([-1, -1]);
      setArray(array);
    }
  }
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
};

const timeout = async () => {
  await new Promise((resolve) => setTimeout(resolve, 20));
};

export const mergeSort = async (
  array: number[],
  setSwapDivs: Dispatch<SetStateAction<number[]>>,
  stateRef: { current: string },
  setArray: Dispatch<SetStateAction<number[]>>,
  initialArray: number[]
) => {
  const arraysAreEqual = array.every(
    (element, index) => element === initialArray[index]
  );
  if (arraysAreEqual) {
    return;
  }
  if (array.length <= 1) {
    return array;
  }
  let width = 1;
  const n = array.length;
  const tempArray = array.slice();

  while (width < n) {
    let i = 0;
    while (i < n) {
      if (stateRef.current === "Stop") {
        return;
      }
      const left = i;
      const mid = Math.min(i + width, n);
      const right = Math.min(i + 2 * width, n);
      await merge(array, tempArray, left, mid, right, setArray, setSwapDivs);
      i += 2 * width;
    }
    width *= 2;
  }
  setArray([...array]);
};

const merge = async (
  array: number[],
  tempArray: number[],
  left: number,
  mid: number,
  right: number,
  setArray: Dispatch<SetStateAction<number[]>>,
  setSwapDivs: Dispatch<SetStateAction<number[]>>
) => {
  let i = left;
  let j = mid;
  let k = left;

  while (i < mid && j < right) {
    if (tempArray[i] <= tempArray[j]) {
      playAudio(array, k, i);
      setSwapDivs([k, i]);
      await timeout();
      array[k] = tempArray[i];
      setSwapDivs([-1, -1]);
      setArray([...array]);
      k++;
      i++;
    } else {
      playAudio(array, k, j);
      setSwapDivs([k, j]);
      await timeout();
      array[k] = tempArray[j];
      setSwapDivs([-1, -1]);
      setArray([...array]);
      k++;
      j++;
    }
  }

  while (i < mid) {
    playAudio(array, k, i);
    setSwapDivs([k, i]);
    await timeout();
    array[k] = tempArray[i];
    setSwapDivs([-1, -1]);
    setArray([...array]);
    k++;
    i++;
  }

  while (j < right) {
    playAudio(array, k, j);
    setSwapDivs([k, j]);
    await timeout();
    array[k] = tempArray[j];
    setSwapDivs([-1, -1]);
    setArray([...array]);
    k++;
    j++;
  }

  for (let i = left; i < right; i++) {
    tempArray[i] = array[i];
  }
};

export const shellSort = async (
  array: number[],
  setSwapDivs: Dispatch<SetStateAction<number[]>>,
  stateRef: { current: string },
  setArray: Dispatch<SetStateAction<number[]>>,
  initialArray: number[]
) => {
  const arraysAreEqual = array.every(
    (element, index) => element === initialArray[index]
  );
  if (arraysAreEqual) {
    return;
  }
  let n = array.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = array[i];
      let j;
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        if (stateRef.current === "Stop") {
          return;
        }
        playAudio(array, j, j - gap);
        setSwapDivs([j, j - gap]);
        await timeout();
        array[j] = array[j - gap];
        setSwapDivs([-1, -1]);
        setArray([...array]);
      }

      array[j] = temp;
      setArray([...array]);
    }
  }
};

export const selectionSort = async (
  array: number[],
  setSwapDivs: Dispatch<SetStateAction<number[]>>,
  stateRef: { current: string },
  setArray: Dispatch<SetStateAction<number[]>>,
  initialArray: number[]
) => {
  const arraysAreEqual = array.every(
    (element, index) => element === initialArray[index]
  );
  if (arraysAreEqual) {
    return;
  }
  let n = array.length;
  for (let i = 0; i < n; i++) {
    if (stateRef.current === "Stop") {
      return;
    }
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (stateRef.current === "Stop") {
        return;
      }
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      playAudio(array, i, min);
      setSwapDivs([i, min]);
      await timeout();
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      setSwapDivs([-1, -1]);
      setArray([...array]);
    }
  }
  setSwapDivs([-1, -1]);
  setArray([...array]);
};
