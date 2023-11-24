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
