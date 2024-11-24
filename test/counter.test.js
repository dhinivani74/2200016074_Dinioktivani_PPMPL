import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../test/counter'; // Pastikan jalur impor ini sesuai dengan lokasi file Counter.js
import Display from '../test/display'; // Pastikan jalur impor ini sesuai dengan lokasi file Display.js

describe('Counter Component', () => {
  test('Counter default value should be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    
    // Klik tombol increment beberapa kali untuk memastikan perilaku
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1'); // Klik pertama, nilai = 1

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('2'); // Klik kedua, nilai = 2
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByTestId('decrement-button');
    
    // Klik tombol decrement beberapa kali untuk memastikan perilaku
    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1'); // Klik pertama, nilai = -1

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-2'); // Klik kedua, nilai = -2
  });
});

describe('Display Component', () => {
  test('Display has correct value', () => {
    render(<Display value="10" />);
    const displayValue = screen.getByTestId('display-value');
    expect(displayValue).toHaveTextContent('Value: 10');
  });
});
