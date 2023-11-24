import localforage from "localforage";
import { BenchMarkInfo, DefaultInfo, Source } from "../types/benchmark";
import { v4 as uuidv4 } from "uuid";

async function getItemFromLocalForage(): Promise<BenchMarkInfo | null> {
  const benchMarkInfo = await localforage.getItem("benchMark");
  return benchMarkInfo ? (benchMarkInfo as BenchMarkInfo) : null;
}

export async function readDefaultInfoFromLocalStorage(): Promise<DefaultInfo> {
  const benchMarkInfo = await getItemFromLocalForage();
  if (benchMarkInfo == null) {
    return {
      title: "",
      description: "",
    };
  } else {
    const { title, description } = benchMarkInfo;
    return { title, description };
  }
}

export async function readSourceFromLocalStorage(): Promise<Source[]> {
  const benchMarkInfo = await getItemFromLocalForage();
  if (benchMarkInfo == null) {
    return [
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
    ];
  } else {
    return benchMarkInfo.sources;
  }
}

export async function readPreviewDataFromLocalStorage(): Promise<BenchMarkInfo> {
  const benchMarkInfo = await getItemFromLocalForage();
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
    const { title, description, sources } = benchMarkInfo;
    return { title, description, sources };
  }
}
