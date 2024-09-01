import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { chartConfig } from './config';

import { PrefectureList, PopulationType } from '../../../types';
import classes from './Chart.module.css';

export const Charts = ({
  data,
  selectedType,
}: {
  data: PrefectureList[];
  selectedType: PopulationType['label'];
}) => {
  if (data.length === 0) {
    return (
      <div className={classes.noDataMessage}>データが選択されていません。</div>
    );
  }

  const filteredData = data.map((prefData) => {
    const populationData = prefData.population.find(
      (pop) => pop.label === selectedType,
    );

    return {
      prefecture: prefData.prefecture,
      data: populationData?.data || [],
    };
  });

  const options = chartConfig(filteredData);

  return (
    <div className={classes.chartsWrapper}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
