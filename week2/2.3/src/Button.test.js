import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Button from './Button';

describe('Button component', () => {
  it('increments the click count when clicked', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => {
      root.render(<Button />);
    });

    const button = container.querySelector('button');
    const counter = container.querySelector('p');

    expect(counter.textContent).toBe('Number of Clicks: 0');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(counter.textContent).toBe('Number of Clicks: 1');

    root.unmount();
    container.remove();
  });
});
