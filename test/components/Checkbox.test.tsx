import React from 'react';

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { Checkbox } from '../../src/components/ui/checkbox/Checkbox';

describe('Checkbox', () => {
  test('ラベルとチェックボックスが正しく表示されること', () => {
    const testOnChange = jest.fn();
    render(<Checkbox index={0} label="テスト" onChange={testOnChange} />);

    const checkbox = screen.getByLabelText('テスト');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('クリックするとonChangeが呼ばれること', () => {
    const testOnChange = jest.fn();
    render(<Checkbox index={0} label="テスト" onChange={testOnChange} />);

    const checkbox = screen.getByLabelText('テスト');
    fireEvent.click(checkbox);
    expect(testOnChange).toHaveBeenCalledTimes(1);
  });
});
