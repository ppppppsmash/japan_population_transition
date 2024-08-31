import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Population } from '../../../types';

export const Charts = ({ population }: { population: Population[] }) => {
  const options: Highcharts.Options = {
    title: {
      text: '人口推移',
    },
    series: [
      {
        type: 'spline',
        data: population.map((item) => item.value),
        marker: {
          enabled: true,
        },
        lineWidth: 2,
      },
    ],
    xAxis: {
      categories: population.map((item) => item.year.toString()),
    },
    yAxis: {
      title: {
        text: '人口数',
      },
      labels: {
        format: '{value}人',
      },
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
