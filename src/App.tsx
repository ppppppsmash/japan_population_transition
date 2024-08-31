import { usePrefecturePopulationHooks } from './hooks/usePrefecturePopulation';

import Layout from './components/layout/Layout';
import { Heading } from './components/ui/heading/Heading';
import { Checkbox } from './components/ui/checkbox/Checkbox';
import { Charts } from './components/ui/chart/Chart';
import { FilterButton } from './components/ui/button/Button';

import { Prefecture } from './types';

import './App.css';
import 'normalize.css';

function App() {
  const { prefectures, handleCheckboxChange, population } = usePrefecturePopulationHooks();

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
            {prefectures.map((prefecture: Prefecture) => (
              <Checkbox
                key={prefecture.prefCode}
                label={prefecture.prefName}
                index={prefecture.prefCode}
                onChange={() => handleCheckboxChange(prefecture)}
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

          <Charts population={population} />
        </div>
      </Layout>
    </>
  );
}

export default App;
