export type Source = {
  id: string;
  title: string;
  url: string;
  data: Data[];
};

export type Data = {
  id: string;
  content: string;
};
