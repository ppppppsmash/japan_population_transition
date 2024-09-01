import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Heading } from '../../src/components/ui//heading/Heading';

describe('Heading', () => {
  test('見出しが正しく表示されること', () => {
    render(<Heading level={1}>見出しh1</Heading>);
    expect(screen.getByText('見出しh1')).toBeInTheDocument();
  });

  test('見出しが正しく表示されること', () => {
    render(<Heading level={2}>見出しh2</Heading>);
    expect(screen.getByText('見出しh2')).toBeInTheDocument();
  });

  test('見出しが正しく表示されること', () => {
    render(<Heading level={3}>見出しh3</Heading>);
    expect(screen.getByText('見出しh3')).toBeInTheDocument();
  });

  test('見出しが正しく表示されること', () => {
    render(<Heading level={4}>見出しh4</Heading>);
    expect(screen.getByText('見出しh4')).toBeInTheDocument();
  });

  test('見出しが正しく表示されること', () => {
    render(<Heading level={5}>見出しh5</Heading>);
    expect(screen.getByText('見出しh5')).toBeInTheDocument();
  });

  test('見出しが正しく表示されること', () => {
    render(<Heading level={6}>見出しh6</Heading>);
    expect(screen.getByText('見出しh6')).toBeInTheDocument();
  });

  test('見出しが正しく表示されること', () => {
    render(
      <Heading level={1} align="center" titlePattern={true}>
        見出しh1
      </Heading>,
    );
    expect(screen.getByText('見出しh1')).toBeInTheDocument();
  });
});
