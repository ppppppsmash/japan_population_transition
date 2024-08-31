import { useState, useEffect } from 'react';

import { fetchPrefectures } from '../api/fetchUtils';
import { Prefecture } from '../types';

export const usePrefecturePopulationHooks = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>([]);

  const handleCheckboxChange = (prefecture: Prefecture) => {
    setSelectedPrefectures([...selectedPrefectures, prefecture]);
  };

  useEffect(() => {
    fetchPrefectures().then((data) => {
      setPrefectures(data);
    });
  }, []);

  return { prefectures, selectedPrefectures, handleCheckboxChange };
};
