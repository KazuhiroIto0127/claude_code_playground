# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React 19 application built with Vite, featuring a Japanese chat topic generator. The application uses:

- **React 19** with hooks for state management
- **Tailwind CSS** for styling with gradient backgrounds and responsive design
- **Vite** for fast development and building
- **ESLint** with React-specific rules for code quality

### Component Structure

- `App.jsx` - Main component managing topic selection and view state
  - Contains hardcoded array of 58 Japanese conversation topics
  - Handles random topic selection logic
  - Controls navigation between main view and topic list view
- `TopicList.jsx` - Component displaying all topics in a grid layout
  - Receives topics array and back navigation handler as props
  - Shows numbered list of all available topics

### Key Features

- Random topic generation from predefined Japanese conversation starters
- Topic list view showing all available topics in a responsive grid
- Gradient-based UI design with hover effects and transitions
- Japanese language interface (雑談トピックジェネレーター)

## Styling Approach

The application uses Tailwind CSS with a consistent blue/indigo gradient theme. Components follow a card-based layout pattern with rounded corners, shadows, and smooth transitions.