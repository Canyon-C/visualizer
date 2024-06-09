import Image from "next/image";
import React, { act, useState, useEffect, useLayoutEffect, useCallback, Dispatch, SetStateAction } from 'react';
import { GenerateMarkup, Data } from "@/app/ui/array/generation";
import { motion } from "framer-motion"
import useStateRef from 'react-usestateref'



export const selectionSort = async (
    arr: Data[],
    setSwapIndicies: Dispatch<SetStateAction<[number, number]>>,
    stateRef: {current: string},
    setArrayData: Dispatch<SetStateAction<Data[]>>
) => {
    const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = arr[i].position;

    // Find the index of the minimum element in the remaining unsorted array
    for (let j = i + 1; j < n; j++) {
      if (arr[j].value < arr[minIndex].value) {
        minIndex = arr[j].position;
      }
    }

    // Swap the found minimum element with the first element of the unsorted array
    if (minIndex !== i) {
      
      if (stateRef.current === 'Stop') {
        return;
      }
      if (i > minIndex) {
        setSwapIndicies([minIndex, i]);
      } else {
        setSwapIndicies([i, minIndex]);
      }

      await new Promise((resolve) => setTimeout(resolve, 1250));


     
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;

      const tempPos = arr[i].position;
      arr[i].position = arr[minIndex].position;
      arr[minIndex].position = tempPos;
      
      setSwapIndicies([-1, -1]);
      setArrayData([...arr]);
      // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; 
      await new Promise((resolve) => setTimeout(resolve, 1250));
      
    }
    
  }
  
  console.log(arr);
  
}

export const insertionSort = async (
    arr: Data[],
    stateRef: {current: string},
    setSwapIndices: Dispatch<SetStateAction<[number, number]>>,
    setArrayData: Dispatch<SetStateAction<Data[]>>,

) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j].value > key.value) {
            if (stateRef.current === 'Stop') {
                return;
            }
            setSwapIndices([arr[j + 1].position, arr[j].position]);

            await new Promise((resolve) => setTimeout(resolve, 1250));

            const temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;

            const tempPos = arr[j + 1].position;
            arr[j + 1].position = arr[j].position;
            arr[j].position = tempPos;
            
            setSwapIndices([-1, -1]);
            setArrayData([...arr]);

            await new Promise((resolve) => setTimeout(resolve, 1250));
            
            j = j - 1;
            
        }
        arr[j + 1].value = key.value;
        arr[j + 1].position = key.position;
        setArrayData([...arr]);
    }
}

export const bubbleSort = async (
    arr: Data[],
    stateRef: {current: string},
    setSwapIndices: Dispatch<SetStateAction<[number, number]>>,
    setArrayData: Dispatch<SetStateAction<Data[]>>,
    ) => {
    const n = arr.length;
    let swapped: boolean;

    do {
        
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i].value > arr[i + 1].value) {
              if (stateRef.current === 'Stop') {
                return;
              }
                // Swap arr[i] and arr[i+1]
                // console.log(arr[i].position);
                setSwapIndices([arr[i].position, arr[i + 1].position]);

                await new Promise((resolve) => setTimeout(resolve, 1250));

                

                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                [arr[i].position, arr[i + 1].position] = [arr[i + 1].position, arr[i].position];

                setSwapIndices([-1, -1]);
                setArrayData([...arr]);
                
                await new Promise((resolve) => setTimeout(resolve, 1250));
                swapped = true;
            }
            
        }
        
    } while (swapped);
    
}