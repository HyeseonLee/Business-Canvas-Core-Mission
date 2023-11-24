export type BenchMarkInfo = {
  title: string;
  description: string;
  sources: Source[];
};

export type DefaultInfo = {
  title: string;
  description: string;
};

export type Source = {
  id: string;
  title: string;
  url: string;
  dataArr: Data[];
};

export type Data = {
  id: string;
  content: string;
};

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

export type DefaultInfoContextType = {
  defaultInfo: DefaultInfo;
  setDefaultInfo: React.Dispatch<React.SetStateAction<DefaultInfo>>;
};

export type PreviewContextType = {
  previewData: BenchMarkInfo;
  setPreviewData: React.Dispatch<React.SetStateAction<BenchMarkInfo>>;
};

export type SourceContextType = {
  sources: Source[];
  dispatch: React.Dispatch<SourcesAction>;
};
