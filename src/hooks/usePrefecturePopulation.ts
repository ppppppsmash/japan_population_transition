import { useState, useEffect } from 'react';

import { fetchPrefectures, fetchPopulation } from '../api/fetchUtils';
import { Prefecture, Population } from '../types';

export const usePrefecturePopulationHooks = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>([]);
  const [population, setPopulation] = useState<Population[]>([]);

  const handleCheckboxChange = (prefecture: Prefecture) => {
    setSelectedPrefectures([...selectedPrefectures, prefecture]);
  };

  const getPopulation = async (prefCode: number) => {
    const data = await fetchPopulation(prefCode);
    setPopulation(data);
  };

  useEffect(() => {
    fetchPrefectures().then((data) => {
      setPrefectures(data);
    });
  }, []);

  useEffect(() => {
    selectedPrefectures.forEach((prefecture) => {
      getPopulation(prefecture.prefCode);
    });
  }, [selectedPrefectures]);

  useEffect(() => {
    getPopulation(1);
  }, []);

  console.log(population);

  return { prefectures, handleCheckboxChange, population };
};
