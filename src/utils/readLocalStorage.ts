import localforage from "localforage";
import { BenchMarkInfo } from "../types/benchmark";
import { v4 as uuidv4 } from "uuid";

export async function readDefaultInfoFromLocalStorage() {
  const benchMarkInfo = await localforage.getItem("benchMark");
  if (benchMarkInfo == null) {
    return {
      title: "",
      description: "",
    };
  } else {
    const wholeData = benchMarkInfo as BenchMarkInfo;
    const { title, description } = wholeData;
    return { title, description };
  }
}

export async function readSourceFromLocalStorage() {
  const benchMarkInfo = await localforage.getItem("benchMark");
  if (benchMarkInfo == null) {
    return [{ id: uuidv4(), title: "", url: "", dataArr: [] }];
  } else {
    const wholeData = benchMarkInfo as BenchMarkInfo;
    const { sources } = wholeData;
    return sources;
  }
}

export async function readPreviewDataFromLocalStorage() {
  const benchMarkInfo = await localforage.getItem("benchMark");
  if (benchMarkInfo == null) {
    return {
      title: "",
      description: "",
      sources: [
        {
          id: uuidv4(),
          title: "",
          url: "",
          dataArr: [
            {
              id: uuidv4(),
              content: "",
            },
          ],
        },
      ],
    };
  } else {
    const wholeData = benchMarkInfo as BenchMarkInfo;
    const { title, description, sources } = wholeData;
    return { title, description, sources: sources };
  }
}
