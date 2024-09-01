import { usePrefecturePopulationHooks } from './hooks/usePrefecturePopulation';

import Layout from './components/layout/Layout';
import { Heading } from './components/ui/heading/Heading';
import { ScrollMessage } from './components/ui/notice/ScrollMessage';
import { Checkbox } from './components/ui/checkbox/Checkbox';
import { Charts } from './components/ui/chart/Chart';
import { FilterButton } from './components/ui/button/Button';

import { Prefecture, PopulationType } from './types';

import './App.css';
import 'normalize.css';

function App() {
  const {
    prefectures,
    handleCheckboxChange,
    population,
    populationTypes,
    selectedType,
    setSelectedType,
  } = usePrefecturePopulationHooks();

  return (
    <>
      <Layout>
        <Heading level={2} align="center" titlePattern={true}>
          日本の都道府県別総人口推移
        </Heading>

        <div className="container">
          <Heading level={3} align="left">
            都道府県
          </Heading>

          <ScrollMessage />

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
            {populationTypes.map(
              (type: PopulationType['label'], index: number) => (
                <FilterButton
                  key={index}
                  label={type}
                  isSelected={type === selectedType}
                  onClick={() => setSelectedType(type)}
                />
              ),
            )}
          </div>

          <Charts data={population} selectedType={selectedType} />
        </div>
      </Layout>
    </>
  );
}

export default App;
