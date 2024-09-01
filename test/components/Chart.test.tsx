import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Charts } from '../../src/components/ui/chart/Chart';

import { PrefectureList, PopulationType } from '../../src/types';

describe('Charts', () => {
  test('チャートが正しく表示されること', () => {
    const testData: PrefectureList[] = [
      {
        prefecture: '北海道',
        population: [
          { label: '生産年齢人口', data: [{ year: 2020, value: 100 }] },
        ],
      },
      {
        prefecture: '東京都',
        population: [
          { label: '生産年齢人口', data: [{ year: 2021, value: 300 }] },
        ],
      },
      {
        prefecture: '神奈川県',
        population: [
          { label: '生産年齢人口', data: [{ year: 2021, value: 200 }] },
        ],
      },
    ];
    render(<Charts data={testData} selectedType="生産年齢人口" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('データが空のときに、データが選択されていませんと表示される', () => {
    const data: PrefectureList[] = [];
    const selectedType: PopulationType['label'] = '総人口';

    const { getByText } = render(
      <Charts data={data} selectedType={selectedType} />,
    );

    expect(getByText('データが選択されていません。')).toBeInTheDocument();
  });
});
