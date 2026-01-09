# Frontend Developer Roadmap

A modern, interactive Frontend Developer Roadmap inspired by roadmap.sh.

## Tech Stack

- **Framework**: React 19 + Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Visualization**: React Flow (xyflow)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router v7

## Features

- **Interactive Canvas**: Pan and zoom support for exploring the roadmap.
- **Visual Hierarchy**: Clearly connected roadmap nodes with beginner to advanced progression.
- **Professional Dark Theme**: Near-black background with vibrant yellow accents.
- **Modular Components**: Clean architecture for easy extension.
- **Responsive Design**: Desktop-first responsive layout.

## Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Development Server**:

   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

- `src/components`: Reusable UI components (Layout, RoadmapCanvas).
- `src/pages`: Landing page and individual topic placeholders.
- `src/data`: `roadmapData.json` - Schema-driven roadmap definition.
- `src/styles`: Global styles and Tailwind configuration.
