import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Heading } from '../../src/components/ui//heading/Heading';

describe('Heading', () => {
  test('見出しが正しく表示されること', () => {
    render(<Heading level={1}>見出しh1</Heading>);
    expect(screen.getByText('見出しh1')).toBeInTheDocument();
  });
});
