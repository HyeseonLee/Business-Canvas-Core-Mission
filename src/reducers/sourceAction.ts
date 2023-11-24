import { Source } from "./../types/benchmark";

export type SourcesAction =
  | { type: "INIT_SOURCES"; sources: Source[] }
  | { type: "ADD_SOURCE" }
  | { type: "DELETE_SOURCE"; id: string }
  | { type: "CHANGE_SOURCE"; id: string; name: string; value: string }
  | { type: "ADD_DATA"; sourceId: string }
  | { type: "DELETE_DATA"; sourceId: string; dataId: string }
  | {
      type: "CHANGE_DATA";
      sourceId: string;
      dataId: string;
      content: string;
    };
