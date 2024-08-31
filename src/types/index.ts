export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationType = {
  label: '総人口' | '年少人口' | '生産年齢人口' | '老年人口';
};

export type Population = {
  year: number;
  value: number;
};

export type PrefectureList = {
  prefecture: string;
  population: PopulationList[];
};

export type PopulationList = {
  label: string;
  data: Population[];
};
