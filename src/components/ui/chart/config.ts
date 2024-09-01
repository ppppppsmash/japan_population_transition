import Highcharts from 'highcharts';

import { PopulationResult } from '../../../types';

export const chartConfig = (data: PopulationResult[]): Highcharts.Options => {
  return {
    chart: {
      backgroundColor: 'transparent',
      style: {
        fontFamily: "'Unica One', sans-serif",
      },
      marginTop: 60,
    },
    title: {
      text: '都道府県別人口推移',
      y: -20,
      style: {
        display: 'none',
      },
    },
    series: data.map((prefData) => ({
      type: 'spline',
      name: prefData.prefecture,
      data: prefData.data.map((item) => item.value),
      marker: {
        enabled: true,
      },
      lineWidth: 2,
    })),
    xAxis: {
      categories: data[0]?.data.map((item) => item.year.toString()) || [],
      title: {
        text: '年度',
        align: 'high',
        offset: 0,
        rotation: 0,
        y: -6,
        x: 32,
        style: {
          color: '#e0e0e0',
          fontSize: '12px',
        },
      },
      lineColor: '#606060',
      tickColor: '#606060',
      labels: {
        style: {
          color: '#e0e0e0',
        },
      },
      tickInterval: 2,
    },
    yAxis: {
      title: {
        text: '人口数',
        align: 'high',
        offset: 0,
        rotation: 0,
        y: -30,
        x: -20,
        style: {
          color: '#e0e0e0',
          fontSize: '12px',
        },
      },
      labels: {
        format: '{value}',
        style: {
          color: '#e0e0e0',
        },
      },
      gridLineColor: 'rgba(255, 255, 255, 0.4)',
    },
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
      itemStyle: {
        color: '#e0e0e0',
        fontWeight: 'normal',
      },
      itemHoverStyle: {
        color: '#ffffff',
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 480,
          },
          chartOptions: {
            xAxis: {
              title: {
                text: '年度',
                align: 'high',
                offset: 0,
                rotation: 0,
                y: 20,
                x: 0,
                style: {
                  color: '#e0e0e0',
                  fontSize: '10px',
                },
              },
            },
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal',
            },
          },
        },
      ],
    },
    plotOptions: {
      series: {
        marker: {
          lineWidth: 1,
        },
      },
    },
  };
};
