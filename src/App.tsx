import { useState, useEffect } from 'react';

import { fetchPrefectures } from './api/fetchUtils';

import Layout from './components/layout/Layout';
import { Heading } from './components/ui/heading/Heading';
import { Checkbox } from './components/ui/checkbox/Checkbox';
import { Charts } from './components/ui/chart/Chart';
import { FilterButton } from './components/ui/button/Button';

import './App.css';
import 'normalize.css';

interface Prefecture {
  prefCode: number;
  prefName: string;
}

function App() {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    alert(e.target.checked);
  };

  useEffect(() => {
    fetchPrefectures().then((prefectures) => {
      setPrefectures(prefectures);
    });
  }, []);

  return (
    <>
      <Layout>
        <Heading level={2} align="center" titlePattern={true}>
          日本の都道府県別総人口推移可視化SPA
        </Heading>

        <div className="container">
          <Heading level={3} align="left">
            都道府県
          </Heading>

          <div className="checkboxWrapper">
            {prefectures.map((prefecture) => (
              <Checkbox
                key={prefecture.prefCode}
                label={prefecture.prefName}
                checked={checked}
                onChange={handleChange}
              />
            ))}
          </div>

          <Heading level={3} align="left">
            人口種類
          </Heading>

          <div className="filterButtonWrapper">
            <FilterButton label="総人口" />
            <FilterButton label="年少人口" />
            <FilterButton label="生産年齢人口" />
            <FilterButton label="老年人口" />
          </div>

          <Charts />
        </div>
      </Layout>
    </>
  );
}

export default App;
