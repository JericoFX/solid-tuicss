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

Once deployed, your demo will be available at:
`https://yourusername.github.io/solid-tuicss/`

The playground includes:
- **Component Gallery** - All TuiCSS components with examples
- **Interactive Demos** - Working forms, modals, tabs, and more  
- **MS-DOS Theme** - Authentic retro terminal styling
- **Responsive Layout** - Adapts to different screen sizes

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

### Example Sites

Here are examples of successful deployments:

- **GitHub Pages**: `https://username.github.io/solid-tuicss/`
- **Netlify**: `https://solid-tuicss-demo.netlify.app/`
- **Surge.sh**: `https://solid-tuicss-demo.surge.sh/`

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.