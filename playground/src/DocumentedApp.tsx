import { Component, createSignal, For } from 'solid-js';

const DocumentedApp: Component = () => {
  const [inputValue, setInputValue] = createSignal('Sample text');
  const [checkboxValue, setCheckboxValue] = createSignal(true);
  const [radioValue, setRadioValue] = createSignal('first');
  const [selectValue, setSelectValue] = createSignal('second');
  const [progress, setProgress] = createSignal(75);
  const [activeTab, setActiveTab] = createSignal('getting-started');

  const codeExamples = {
    basicWindow: `import { Window, Panel } from 'solid-tuicss';

function MyApp() {
  return (
    <Window title="My DOS App">
      <Panel border>
        Content goes here
      </Panel>
    </Window>
  );
}`,
    
    formControls: `import { Input, Button, Checkbox } from 'solid-tuicss';
import { createSignal } from 'solid-js';

function FormExample() {
  const [name, setName] = createSignal('');
  const [agreed, setAgreed] = createSignal(false);
  
  return (
    <div>
      <Input 
        placeholder="Enter your name"
        value={name()}
        onInput={(e) => setName(e.target.value)}
      />
      <Checkbox 
        checked={agreed()}
        onChange={(checked) => setAgreed(checked)}
        label="I agree to the terms"
      />
      <Button onClick={() => console.log('Submitted!')}>
        Submit
      </Button>
    </div>
  );
}`,
    
    tabsSystem: `import { Tabs, Tab, TabContent } from 'solid-tuicss';
import { createSignal } from 'solid-js';

function TabExample() {
  const [activeTab, setActiveTab] = createSignal('tab1');
  
  return (
    <Tabs>
      <Tab 
        isActive={activeTab() === 'tab1'}
        onClick={() => setActiveTab('tab1')}
      >
        Tab 1
      </Tab>
      <Tab 
        isActive={activeTab() === 'tab2'}
        onClick={() => setActiveTab('tab2')}
      >
        Tab 2
      </Tab>
      <TabContent show={activeTab() === 'tab1'}>
        Content for Tab 1
      </TabContent>
      <TabContent show={activeTab() === 'tab2'}>
        Content for Tab 2  
      </TabContent>
    </Tabs>
  );
}`,

    gridSystem: `import { Container, Row, Col } from 'solid-tuicss';

function GridExample() {
  return (
    <Container>
      <Row>
        <Col s="12" m="6" l="4">
          Column 1
        </Col>
        <Col s="12" m="6" l="4">
          Column 2
        </Col>
        <Col s="12" m="12" l="4">
          Column 3
        </Col>
      </Row>
    </Container>
  );
}`
  };

  const installationSteps = [
    { step: '1', title: 'Install Package', code: 'bun add solid-tuicss\n# or npm install solid-tuicss' },
    { step: '2', title: 'Import Components', code: 'import { Window, Button, Input } from "solid-tuicss";' },
    { step: '3', title: 'Use Components', code: '<Window title="My App"><Button>Click me!</Button></Window>' }
  ];

  const componentCategories = {
    layout: [
      { name: 'Window', description: 'Main window container with title bar', props: 'title?: string, children: JSX' },
      { name: 'Panel', description: 'Container panel with optional border', props: 'border?: boolean, children: JSX' },
      { name: 'Container', description: 'Responsive container for grid system', props: 'children: JSX' },
      { name: 'Row', description: 'Grid row container', props: 'children: JSX' },
      { name: 'Col', description: 'Grid column with responsive breakpoints', props: 's?: string, m?: string, l?: string' }
    ],
    forms: [
      { name: 'Input', description: 'Text input field with TUI styling', props: 'value?: string, placeholder?: string, onInput?: Function' },
      { name: 'TextArea', description: 'Multi-line text input', props: 'value?: string, rows?: number, cols?: number' },
      { name: 'Button', description: 'Clickable button with TUI styling', props: 'onClick?: Function, children: JSX' },
      { name: 'Checkbox', description: 'Checkbox input with label', props: 'checked?: boolean, label?: string, onChange?: Function' },
      { name: 'Radio', description: 'Radio button input', props: 'checked?: boolean, name?: string, value?: string' },
      { name: 'Select', description: 'Dropdown select input', props: 'value?: string, options: Array, onChange?: Function' }
    ],
    ui: [
      { name: 'Tabs/Tab/TabContent', description: 'Tab navigation system', props: 'isActive?: boolean, show?: boolean' },
      { name: 'Modal', description: 'Modal dialog overlay', props: 'isOpen?: boolean, onClose?: Function' },
      { name: 'ProgressBar', description: 'Progress indicator', props: 'value?: number, max?: number' },
      { name: 'Navbar', description: 'Navigation bar with dropdowns', props: 'children: JSX' },
      { name: 'StatusBar', description: 'Status bar for bottom/top of screen', props: 'position?: "top" | "bottom"' }
    ]
  };

  const CodeBlock: Component<{ code: string; title?: string }> = (props) => (
    <div class="tui-panel" style="margin: 15px 0; background: #000080; border: 1px solid #00FFFF;">
      {props.title && <h4 class="cyan-255" style="margin-top: 5px;">{props.title}</h4>}
      <pre style="background: #000040; padding: 10px; border: 1px inset #808080; font-family: 'Perfect DOS VGA 437', monospace; color: #00FF00; white-space: pre-wrap; overflow-x: auto;">
        <code>{props.code}</code>
      </pre>
    </div>
  );

  const ComponentGrid: Component<{ components: Array<any> }> = (props) => (
    <div class="container">
      <For each={props.components}>
        {(component) => (
          <div class="row" style="margin-bottom: 15px; padding: 10px; border: 1px solid #808080;">
            <div class="col s12 m4">
              <strong class="yellow-255">{component.name}</strong>
            </div>
            <div class="col s12 m8">
              <p style="margin: 5px 0; color: #C0C0C0;">{component.description}</p>
              <small class="green-255">Props: {component.props}</small>
            </div>
          </div>
        )}
      </For>
    </div>
  );

  return (
    <div style="padding: 20px; min-height: 100vh;">
      {/* Header */}
      <div class="tui-window" style="width: 95%; max-width: 1400px; margin: 0 auto 20px;">
        <fieldset class="tui-fieldset">
          <legend class="yellow-255 white-255-text">
            🖥️ Solid TuiCSS - Interactive Documentation & Playground
          </legend>
          <div style="text-align: center; padding: 15px;">
            <h1 class="cyan-255">SolidJS + TuiCSS Component Library</h1>
            <p class="white-255">Experience the nostalgic MS-DOS aesthetic with modern SolidJS reactivity</p>
            <p class="green-255">
              <strong>GitHub:</strong> <a href="https://github.com/JericoFX/solid-tuicss" class="cyan-255" target="_blank">JericoFX/solid-tuicss</a> | 
              <strong> NPM:</strong> <span class="yellow-255">bun add solid-tuicss</span>
            </p>
          </div>
        </fieldset>
      </div>

      {/* Main Documentation Window */}
      <div class="tui-window" style="width: 95%; max-width: 1400px; margin: 0 auto;">
        <fieldset class="tui-fieldset">
          <legend class="cyan-255">📚 Documentation & Examples</legend>
          
          {/* Navigation Tabs */}
          <div class="tui-tabs">
            <ul>
              <li>
                <a class={`tui-tab ${activeTab() === 'getting-started' ? 'active' : ''}`} 
                   onClick={() => setActiveTab('getting-started')}>
                  🚀 Getting Started
                </a>
              </li>
              <li>
                <a class={`tui-tab ${activeTab() === 'components' ? 'active' : ''}`} 
                   onClick={() => setActiveTab('components')}>
                  🧩 Components API
                </a>
              </li>
              <li>
                <a class={`tui-tab ${activeTab() === 'examples' ? 'active' : ''}`} 
                   onClick={() => setActiveTab('examples')}>
                  💡 Code Examples
                </a>
              </li>
              <li>
                <a class={`tui-tab ${activeTab() === 'live-demo' ? 'active' : ''}`} 
                   onClick={() => setActiveTab('live-demo')}>
                  🎮 Live Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Tab Content */}
          <div class="tui-tab-content" style="padding: 20px; min-height: 500px;">
            
            {/* Getting Started Tab */}
            {activeTab() === 'getting-started' && (
              <div>
                <h2 class="yellow-255">🚀 Quick Start Guide</h2>
                <p class="white-255">Get up and running with Solid TuiCSS in just a few steps:</p>
                
                <For each={installationSteps}>
                  {(item) => (
                    <div style="margin: 20px 0;">
                      <h3 class="cyan-255">Step {item.step}: {item.title}</h3>
                      <CodeBlock code={item.code} />
                    </div>
                  )}
                </For>

                <div class="tui-panel" style="background: #004000; border: 2px solid #00FF00; padding: 15px; margin: 20px 0;">
                  <h4 class="green-255">✅ Features</h4>
                  <ul style="color: #C0C0C0; line-height: 1.6;">
                    <li>🎯 <strong>Full TuiCSS Integration</strong> - All components with authentic DOS styling</li>
                    <li>🚀 <strong>SolidJS Reactive</strong> - Built for SolidJS with full reactivity support</li>
                    <li>📦 <strong>TypeScript Ready</strong> - Complete type definitions included</li>
                    <li>🔧 <strong>Modern Tooling</strong> - Built with Vite 7.1.1 and Bun for fast development</li>
                    <li>🪶 <strong>Lightweight</strong> - TuiCSS imported as dependency, not bundled</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Components API Tab */}
            {activeTab() === 'components' && (
              <div>
                <h2 class="yellow-255">🧩 Component API Reference</h2>
                
                <div class="tui-tabs" style="margin: 20px 0;">
                  <h3 class="cyan-255">📐 Layout Components</h3>
                  <ComponentGrid components={componentCategories.layout} />
                  
                  <h3 class="cyan-255" style="margin-top: 30px;">📝 Form Components</h3>
                  <ComponentGrid components={componentCategories.forms} />
                  
                  <h3 class="cyan-255" style="margin-top: 30px;">🎨 UI Components</h3>
                  <ComponentGrid components={componentCategories.ui} />
                </div>
              </div>
            )}

            {/* Code Examples Tab */}
            {activeTab() === 'examples' && (
              <div>
                <h2 class="yellow-255">💡 Code Examples</h2>
                
                <CodeBlock title="🏠 Basic Window Setup" code={codeExamples.basicWindow} />
                <CodeBlock title="📝 Form Controls" code={codeExamples.formControls} />
                <CodeBlock title="📑 Tabs System" code={codeExamples.tabsSystem} />
                <CodeBlock title="📐 Grid Layout" code={codeExamples.gridSystem} />

                <div class="tui-panel" style="background: #400040; border: 2px solid #FF00FF; padding: 15px; margin: 20px 0;">
                  <h4 class="yellow-255">💡 Pro Tips</h4>
                  <ul style="color: #C0C0C0; line-height: 1.6;">
                    <li>Use <code class="green-255">createSignal</code> for reactive state management</li>
                    <li>TuiCSS styles are automatically imported when you use components</li>
                    <li>Grid system uses <code class="cyan-255">s/m/l</code> breakpoints (small/medium/large)</li>
                    <li>Modal components use Portal for proper rendering</li>
                    <li>All components support standard HTML attributes</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Live Demo Tab */}
            {activeTab() === 'live-demo' && (
              <div>
                <h2 class="yellow-255">🎮 Interactive Component Demo</h2>
                <p class="white-255">Try out the components below - they're fully functional!</p>

                <div class="container" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col s12 m6">
                      <h4 class="cyan-255">Form Controls</h4>
                      <div style="padding: 15px; border: 1px solid #808080; background: #000040;">
                        <input 
                          class="tui-input" 
                          placeholder="Type something..."
                          value={inputValue()}
                          onInput={(e) => setInputValue(e.target.value)}
                          style="width: 100%; margin-bottom: 10px;"
                        />
                        <label class="tui-checkbox">
                          <input 
                            type="checkbox" 
                            checked={checkboxValue()}
                            onChange={(e) => setCheckboxValue(e.target.checked)}
                          />
                          <span class="tui-check"></span>
                          Enable notifications
                        </label>
                        <div style="margin: 10px 0;">
                          <label class="tui-radio">
                            <input 
                              type="radio" 
                              name="demo-radio" 
                              value="first" 
                              checked={radioValue() === 'first'}
                              onChange={() => setRadioValue('first')}
                            />
                            <span class="tui-radio-check"></span>
                            Option 1
                          </label>
                          <label class="tui-radio">
                            <input 
                              type="radio" 
                              name="demo-radio" 
                              value="second" 
                              checked={radioValue() === 'second'}
                              onChange={() => setRadioValue('second')}
                            />
                            <span class="tui-radio-check"></span>
                            Option 2
                          </label>
                        </div>
                        <select 
                          class="tui-input" 
                          value={selectValue()}
                          onChange={(e) => setSelectValue(e.target.value)}
                          style="width: 100%; margin-bottom: 10px;"
                        >
                          <option value="first">First Choice</option>
                          <option value="second">Second Choice</option>
                          <option value="third">Third Choice</option>
                        </select>
                        <button class="tui-button" style="width: 100%;">
                          Submit Form
                        </button>
                      </div>
                    </div>
                    
                    <div class="col s12 m6">
                      <h4 class="cyan-255">Progress & Data</h4>
                      <div style="padding: 15px; border: 1px solid #808080; background: #000040;">
                        <p class="white-255">Progress: {progress()}%</p>
                        <div class="tui-progress-bar" style="margin: 10px 0;">
                          <div class="tui-progress" style={`width: ${progress()}%`}></div>
                        </div>
                        <div style="margin: 10px 0;">
                          <button 
                            class="tui-button" 
                            onClick={() => setProgress(Math.max(0, progress() - 10))}
                            style="margin-right: 10px;"
                          >
                            -10%
                          </button>
                          <button 
                            class="tui-button" 
                            onClick={() => setProgress(Math.min(100, progress() + 10))}
                          >
                            +10%
                          </button>
                        </div>
                        
                        <h5 class="green-255">Current Values:</h5>
                        <ul style="color: #C0C0C0; font-family: monospace; font-size: 12px;">
                          <li>Input: "{inputValue()}"</li>
                          <li>Checkbox: {checkboxValue() ? 'true' : 'false'}</li>
                          <li>Radio: "{radioValue()}"</li>
                          <li>Select: "{selectValue()}"</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </fieldset>
      </div>

      {/* Footer */}
      <div class="tui-window" style="width: 95%; max-width: 1400px; margin: 20px auto;">
        <div style="text-align: center; padding: 15px;">
          <p class="green-255">
            Made with ❤️ for the retro computing community | 
            <a href="https://github.com/JericoFX/solid-tuicss" class="cyan-255" target="_blank">Contribute on GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentedApp;