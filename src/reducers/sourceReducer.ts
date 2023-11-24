import { v4 as uuidv4 } from "uuid";
import { Source } from "../types/benchmark";
import { SourcesAction } from "../types/benchmark";

export default function sourceReducer(
  sources: Source[],
  action: SourcesAction
): Source[] {
  switch (action.type) {
    case "INIT_SOURCES": {
      return action.sources;
    }
    case "ADD_SOURCE": {
      return [
        ...sources,
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
    }
    case "DELETE_SOURCE": {
      return sources.filter((source) => source.id !== action.id);
    }
    case "CHANGE_SOURCE": {
      return sources.map((source) =>
        source.id === action.id
          ? { ...source, [action.name]: action.value }
          : source
      );
    }
    case "ADD_DATA": {
      return sources.map((source) =>
        source.id === action.sourceId
          ? {
              ...source,
              dataArr: [...source.dataArr, { id: uuidv4(), content: "" }],
            }
          : source
      );
    }
    case "DELETE_DATA": {
      return sources.map((source) =>
        source.id === action.sourceId
          ? {
              ...source,
              dataArr: source.dataArr.filter(
                (data) => data.id !== action.dataId
              ),
            }
          : source
      );
    }
    case "CHANGE_DATA": {
      return sources.map((source) =>
        source.id === action.sourceId
          ? {
              ...source,
              dataArr: source.dataArr.map((data) =>
                data.id === action.dataId
                  ? { ...data, content: action.content }
                  : data
              ),
            }
          : source
      );
    }
    default: {
      throw new Error("잘못된 action 타입입니다");
    }
  }
}
