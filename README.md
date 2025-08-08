# Solid TuiCSS

SolidJS wrapper components for TuiCSS - A Text-based User Interface CSS framework inspired by classic MS-DOS applications.

## 🚀 [Live Demo & Documentation](https://jericofx.github.io/solid-tuicss/)

Experience all components interactively with usage examples and code snippets in our comprehensive playground.

## Installation

```bash
npm install solid-tuicss
# or
bun add solid-tuicss
# or
yarn add solid-tuicss
# or  
pnpm add solid-tuicss
```

## Usage

```tsx
import { Window, Panel, Button, Input } from 'solid-tuicss';

function App() {
  return (
    <Window title="My DOS App">
      <Panel border>
        <Input placeholder="Enter text..." />
        <Button>Click me!</Button>
      </Panel>
    </Window>
  );
}
```

### CSS Import

The TuiCSS styles are automatically imported when you import the components. If you need to import just the CSS:

```tsx
import 'solid-tuicss/css';
```

## Components

### Layout Components
- `Window` - Main window container with optional title and close button
- `Panel` - Container panel with optional border
- `Navbar` - Navigation bar component
- `Border` - Decorative border wrapper

### Form Components
- `Input` - Text input field
- `TextArea` - Multi-line text input
- `Select` - Dropdown select
- `Checkbox` - Checkbox input
- `Radio` - Radio button input
- `Button` - Button component

### UI Components
- `Tabs`, `Tab`, `TabContent` - Tab navigation system
- `ProgressBar` - Progress indicator
- `Modal` - Modal dialog
- `Dropdown` - Dropdown menu

## Features

- 🎯 **Full TuiCSS Integration** - All TuiCSS components and styles
- 🚀 **SolidJS Reactive** - Built for SolidJS with full reactivity  
- 🎨 **DOS Aesthetic** - Classic MS-DOS terminal look and feel
- 📦 **TypeScript** - Full TypeScript support with exported types
- 🔧 **Modern Tooling** - Built with Vite 7.1.1 and Bun for fast development
- 🪶 **Lightweight** - TuiCSS imported as dependency, not bundled
- 📚 **Interactive Documentation** - Live playground with usage examples

## Development

### Setup

```bash
bun install
# or npm install
```

### Development Server

```bash
bun run dev
# or npm run dev
```

### Build

```bash
bun run build:lib
# or npm run build:lib
```

### Playground

The playground demonstrates all components with interactive examples:

```bash
cd playground
bun install && bun run dev
# or npm install && npm run dev
```

## GitHub Pages Deployment

You can deploy the playground to GitHub Pages to showcase your TuiCSS components. The playground provides a live demo of all available components with the classic MS-DOS aesthetic.

### Quick Setup

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

2. **Push the workflow** (included in `.github/workflows/deploy.yml`)

3. **Deploy automatically** on every push to main

### Manual Deployment

To deploy manually:

```bash
# Build the playground
cd playground
npm install
npm run build

# The built files will be in playground/dist/
# Upload these to your hosting service
```

### Live Demo

🌟 **Official Demo**: [https://jericofx.github.io/solid-tuicss/](https://jericofx.github.io/solid-tuicss/)

The playground includes:
- **Component Gallery** - All TuiCSS components with live examples
- **Usage Instructions** - Code snippets and implementation guides
- **Interactive Demos** - Working forms, modals, tabs, and more  
- **MS-DOS Theme** - Authentic retro terminal styling
- **Responsive Layout** - Adapts to different screen sizes
- **Real Documentation** - Built-in usage examples and API reference

### Deployment Scripts

Quick deployment to various platforms:

```bash
# Local preview
npm run deploy

# Deploy to different platforms
npm run deploy:github    # GitHub Pages (manual)
npm run deploy:netlify   # Netlify
npm run deploy:surge     # Surge.sh
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.