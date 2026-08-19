# Button Component – React Application

A React application demonstrating a reusable button component with JSX, a click event handler, and state management.

## How to Run Locally

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

- `src/App.jsx` — root component; manages click-count state and passes handler to button
- `src/components/ClickButton.jsx` — reusable button component with visible "Click Me" text
- `src/App.css` — minimal styles

## What It Does

- Clicking **Click Me** increments a counter displayed on screen (visible state change)
- Each click also logs `"Button clicked"` to the browser console
