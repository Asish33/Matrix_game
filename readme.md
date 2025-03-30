
# Matrix Color Game

A simple and interactive web game built with React and TypeScript that demonstrates state management and animation sequencing.

## Overview

The Matrix Color Game presents a 3x3 grid of clickable boxes. The goal is to click all nine boxes, after which the game replays your clicks in the same sequence with a different color.

## How It Works

1. **Initial State**: All boxes start as white squares arranged in a 3x3 grid.
2. **Interaction**: Click on any box to change its color to green.
3. **Tracking**: The game records the order in which you click the boxes.
4. **Completion**: Once all nine boxes have been clicked, the game automatically:
   - Resets all boxes to white
   - Replays your exact click sequence, turning each box orange in the order you originally clicked them
   - Returns to the initial state after the replay finishes

## Technical Implementation

The game is built using:
- **React**: For UI components and state management
- **TypeScript**: For type safety and improved developer experience
- **Tailwind CSS**: For styling and responsive design

### Key Components

- **MatrixGame**: The main component that manages game state and controls the flow
- **MatrixBox**: Individual box component with click handling and visual feedback

### State Management

The application uses React's useState hook to track:
- Which boxes have been clicked (and in what order)
- Whether the game is currently in replay mode

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone this repository
```
git clone <YOUR_REPOSITORY_URL>
```

2. Navigate to the project directory
```
cd matrix-color-game
```

3. Install dependencies
```
npm install
```

4. Start the development server
```
npm run dev
```

5. Open your browser and visit `http://localhost:8080`


