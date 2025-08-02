# Solid TuiCSS

SolidJS wrapper components for TuiCSS - A Text-based User Interface CSS framework inspired by classic MS-DOS applications.

## Installation

```bash
npm install solid-tuicss
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
- 📦 **TypeScript** - Full TypeScript support
- 🔧 **Customizable** - Easy to customize and theme
- 🪶 **Lightweight** - Minimal bundle size

## Development

### Setup

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build:lib
```

### Playground

The playground demonstrates all components:

```bash
cd playground
npm install
npm run dev
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.