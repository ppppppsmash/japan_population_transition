import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const Charts = () => {
  const options: Highcharts.Options = {
    title: {
      text: '人口推移',
    },
    series: [
      {
        type: 'line',
        data: [1, 2, 3],
        marker: {
          enabled: true,
        },
        lineWidth: 2,
      },
    ],
    xAxis: {
      categories: ['1980', '1990', '2000'],
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
