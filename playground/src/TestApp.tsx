import { Component } from 'solid-js';
// import 'tuicss/dist/tuicss.min.css';

const TestApp: Component = () => {
  return (
    <div style="padding: 20px;">
      <h1>TuiCSS Test - Minimal</h1>
      
      {/* Basic Window */}
      <div class="tui-window" style="margin: 20px 0;">
        <fieldset class="tui-fieldset">
          <legend>Test Window</legend>
          <p>This should look like an MS-DOS window.</p>
        </fieldset>
      </div>

      {/* Basic Button */}
      <div style="margin: 20px 0;">
        <button class="tui-button">Default Button</button>
        <button class="tui-button red-168 white-text">Red Button</button>
      </div>

      {/* Basic Input */}
      <div style="margin: 20px 0;">
        <input class="tui-input" type="text" placeholder="Test input" />
      </div>

      {/* Progress Bar */}
      <div class="tui-progress-bar" style="margin: 20px 0;">
        <span class="tui-progress" style="width: 50%"></span>
      </div>

      {/* Debug Info */}
      <div style="margin: 20px 0; font-family: monospace; font-size: 12px; background: #f0f0f0; padding: 10px;">
        <div>Font Family: {getComputedStyle(document.body).fontFamily}</div>
        <div>Button computed style: <span id="button-debug"></span></div>
      </div>
    </div>
  );
};

export default TestApp;