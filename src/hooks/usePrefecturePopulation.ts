import { useState, useEffect, useCallback } from 'react';

import { fetchPrefectures, fetchPopulation } from '../api/fetchUtils';
import { Prefecture, PrefectureList, PopulationType } from '../types';

export const usePrefecturePopulationHooks = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>(
    [],
  );

  const [selectedType, setSelectedType] =
    useState<PopulationType['label']>('総人口');
  const [population, setPopulation] = useState<PrefectureList[]>([]);
  const [populationTypes, setPopulationTypes] = useState<
    PopulationType['label'][]
  >([]);

  const handleCheckboxChange = (prefecture: Prefecture) => {
    setSelectedPrefectures([...selectedPrefectures, prefecture]);
  };

  const getPopulation = useCallback(
    async (prefName: string, prefCode: number) => {
      const data = await fetchPopulation(prefCode);
      setPopulation((prev) => {
        if (!prev.some((p) => p.prefecture === prefName)) {
          const types = data.map((t: PopulationType) => t.label);
          setPopulationTypes((prevTypes) =>
            Array.from(new Set([...prevTypes, ...types])),
          );
        }

        return [
          ...prev,
          {
            prefecture: prefName,
            population: data,
          },
        ];
      });
    },
    [],
  );

  useEffect(() => {
    fetchPrefectures().then((data) => {
      setPrefectures(data);
    });
  }, []);

  useEffect(() => {
    const fetchInitialData = async () => {
      const prefecturesData = await fetchPrefectures();
      setPrefectures(prefecturesData);

      const initialPopulation = await fetchPopulation(1);
      const types = initialPopulation.map((item: PopulationType) => item.label);
      setPopulationTypes(types);
      setSelectedType(types[0]);
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    selectedPrefectures.forEach((prefecture) => {
      if (!population.some((p) => p.prefecture === prefecture.prefName)) {
        getPopulation(prefecture.prefName, prefecture.prefCode);
      }
    });
  }, [selectedPrefectures, population, getPopulation]);

  useEffect(() => {
    selectedPrefectures.forEach((prefecture) => {
      getPopulation(prefecture.prefName, prefecture.prefCode);
    });
  }, [getPopulation, selectedPrefectures]);

  return {
    prefectures,
    handleCheckboxChange,
    population,
    selectedType,
    populationTypes,
    setSelectedType,
  };
};
