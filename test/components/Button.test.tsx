import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { FilterButton } from '../../src/components/ui/button/Button';

describe('FilterButton', () => {
  test('ボタンが正しく表示されること', () => {
    const testOnClick = jest.fn();
    render(
      <FilterButton label="総人口" onClick={testOnClick} isSelected={false} />,
    );

    const button = screen.getByText('総人口');
    expect(button).toBeInTheDocument();
  });

  test('クリックするとonClickが呼ばれること', () => {
    const testOnClick = jest.fn();
    render(
      <FilterButton
        label="年少人口"
        onClick={testOnClick}
        isSelected={false}
      />,
    );

    const button = screen.getByText('年少人口');
    fireEvent.click(button);
    expect(testOnClick).toHaveBeenCalledTimes(1);
  });

  test('クリックするとonClickが呼ばれること', () => {
    const testOnClick = jest.fn();
    render(
      <FilterButton
        label="生産年齢人口"
        onClick={testOnClick}
        isSelected={false}
      />,
    );

    const button = screen.getByText('生産年齢人口');
    fireEvent.click(button);
    expect(testOnClick).toHaveBeenCalledTimes(1);
  });

  test('Current状態が正しく反映されること', () => {
    const testOnClick = jest.fn();
    render(
      <FilterButton label="老年人口" onClick={testOnClick} isSelected={true} />,
    );

    const button = screen.getByText('老年人口');
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('buttonSelected');
  });
});
