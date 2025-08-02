import { Component, createSignal } from 'solid-js';
import 'tuicss/dist/tuicss.min.css';

const App: Component = () => {
  const [inputValue, setInputValue] = createSignal('');
  const [checkboxValue, setCheckboxValue] = createSignal(false);
  const [radioValue, setRadioValue] = createSignal('email');
  const [activeTab, setActiveTab] = createSignal('forms');
  const [modalOpen, setModalOpen] = createSignal(false);
  const [progress, setProgress] = createSignal(65);

  return (
    <div style="padding: 20px; min-height: 100vh; font-family: 'MS Sans Serif', sans-serif; background: #c0c0c0;">
      
      {/* Title */}
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #000; margin: 0;">🖥️ Solid TuiCSS - Real Components Demo</h1>
        <p style="color: #666; margin: 5px 0;">Authentic MS-DOS style components with correct TuiCSS structure</p>
      </div>
      
      {/* Main Window using correct structure */}
      <div class="tui-window">
        <fieldset class="tui-fieldset">
          <legend>Component Showcase</legend>
          
          {/* Tabs */}
          <div class="tui-tabs">
            <ul>
              <li><a class={`tui-tab ${activeTab() === 'forms' ? 'active' : ''}`} onClick={() => setActiveTab('forms')}>Form Elements</a></li>
              <li><a class={`tui-tab ${activeTab() === 'ui' ? 'active' : ''}`} onClick={() => setActiveTab('ui')}>UI Components</a></li>
              <li><a class={`tui-tab ${activeTab() === 'layout' ? 'active' : ''}`} onClick={() => setActiveTab('layout')}>Layout</a></li>
              <li><a class={`tui-tab ${activeTab() === 'data' ? 'active' : ''}`} onClick={() => setActiveTab('data')}>Data</a></li>
            </ul>
          </div>

          {/* Forms Tab */}
          {activeTab() === 'forms' && (
            <div class="tui-tab-content">
              <fieldset class="tui-fieldset">
                <legend>Input Components</legend>
                
                <div style="margin: 10px 0;">
                  <label>Text Input:</label><br/>
                  <input 
                    class="tui-input" 
                    type="text" 
                    placeholder="Enter your name..."
                    value={inputValue()}
                    onInput={(e) => setInputValue(e.currentTarget.value)}
                  />
                </div>

                <div style="margin: 10px 0;">
                  <label>Disabled Input:</label><br/>
                  <input class="tui-input disabled" type="text" value="Can't edit this" disabled />
                </div>

                <div style="margin: 10px 0;">
                  <label>Email:</label><br/>
                  <input class="tui-input" type="email" placeholder="user@domain.com" />
                </div>

                <div style="margin: 10px 0;">
                  <label>Textarea:</label><br/>
                  <textarea class="tui-input" placeholder="Enter your message..." rows={3}></textarea>
                </div>

                <div style="margin: 15px 0;">
                  <label class="tui-checkbox">
                    Subscribe to newsletter
                    <input 
                      type="checkbox" 
                      checked={checkboxValue()}
                      onChange={(e) => setCheckboxValue(e.currentTarget.checked)}
                    />
                    <span></span>
                  </label>
                </div>

                <div style="margin: 15px 0;">
                  <div style="margin-bottom: 5px;">Preferred Contact:</div>
                  <label class="tui-radio">
                    Email
                    <input 
                      type="radio" 
                      name="contact" 
                      value="email"
                      checked={radioValue() === 'email'}
                      onChange={() => setRadioValue('email')}
                    />
                    <span></span>
                  </label>
                  <br/>
                  <label class="tui-radio">
                    Phone
                    <input 
                      type="radio" 
                      name="contact" 
                      value="phone"
                      checked={radioValue() === 'phone'}
                      onChange={() => setRadioValue('phone')}
                    />
                    <span></span>
                  </label>
                </div>
              </fieldset>
            </div>
          )}

          {/* UI Components Tab */}
          {activeTab() === 'ui' && (
            <div class="tui-tab-content">
              <h3>Interactive UI Components</h3>
              
              {/* Buttons */}
              <div style="margin: 15px 0;">
                <h4>Buttons:</h4>
                <button class="tui-button">Default Button</button>&nbsp;
                <button class="tui-button orange-168 white-text">Custom Color</button>&nbsp;
                <button class="tui-button red-168 white-text disabled" disabled>Disabled</button>&nbsp;
                <button class="tui-button" autofocus>Focused</button>
              </div>

              {/* Progress Bars */}
              <div style="margin: 20px 0;">
                <h4>Progress Bars:</h4>
                
                <div style="margin: 10px 0;">
                  <div>Basic Progress ({progress()}%):</div>
                  <div class="tui-progress-bar">
                    <span class="tui-progress" style={`width: ${progress()}%`}></span>
                  </div>
                </div>

                <div style="margin: 10px 0;">
                  <div>With Label:</div>
                  <div class="tui-progress-bar">
                    <span class="tui-progress-label">{progress()}%</span>
                    <span class="tui-progress" style={`width: ${progress()}%`}></span>
                  </div>
                </div>

                <div style="margin: 10px 0;">
                  <div>Indeterminate:</div>
                  <div class="tui-progress-bar">
                    <span class="tui-indeterminate"></span>
                  </div>
                </div>

                <div style="margin: 10px 0;">
                  <div>Custom Colors:</div>
                  <div class="tui-progress-bar red-255">
                    <span class="tui-progress green-255" style="width: 75%"></span>
                  </div>
                </div>

                <div style="margin: 10px 0;">
                  <button class="tui-button" onClick={() => setProgress((p) => Math.min(p + 10, 100))}>Increase</button>&nbsp;
                  <button class="tui-button" onClick={() => setProgress((p) => Math.max(p - 10, 0))}>Decrease</button>
                </div>
              </div>

              {/* Modal */}
              <div style="margin: 20px 0;">
                <h4>Modal Dialog:</h4>
                <button class="tui-button tui-modal-button" onClick={() => setModalOpen(true)}>◄ Open Modal ►</button>
                
                {modalOpen() && (
                  <>
                    <div class="tui-overlap" onClick={() => setModalOpen(false)}></div>
                    <div class="tui-modal">
                      <div class="tui-window red-168">
                        <fieldset class="tui-fieldset">
                          <legend class="red-255 yellow-255-text">Alert Dialog</legend>
                          <p>This is a modal dialog with the correct TuiCSS structure!</p>
                          <p>It includes the overlap layer and proper window styling.</p>
                          <button 
                            class="tui-button tui-modal-close-button right" 
                            onClick={() => setModalOpen(false)}
                          >
                            close
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Dropdown */}
              <div style="margin: 20px 0;">
                <h4>Dropdown Menu:</h4>
                <div class="tui-dropdown">
                  <button class="tui-button">Menu Options ▼</button>
                  <div class="tui-dropdown-content">
                    <ul>
                      <li><a href="#!">Action 1</a></li>
                      <li><a href="#!">Action 2</a></li>
                      <li><a href="#!">Action 3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Layout Tab */}
          {activeTab() === 'layout' && (
            <div class="tui-tab-content">
              <h3>Layout Components</h3>
              
              {/* Panel */}
              <div style="margin: 20px 0;">
                <h4>Panel Component:</h4>
                <div class="tui-panel">
                  <div class="tui-panel-header">
                    Panel Header
                  </div>
                  <div class="tui-panel-content">
                    This is a panel content area. Panels are similar to windows but without fieldset.
                  </div>
                </div>
              </div>

              {/* Grid System */}
              <div style="margin: 20px 0;">
                <h4>Grid System:</h4>
                <div class="container">
                  <div class="row">
                    <div class="col s12 m6 l4">
                      <div style="background: #808080; padding: 10px; margin: 2px; color: white; text-align: center;">
                        Col 1 (s12/m6/l4)
                      </div>
                    </div>
                    <div class="col s12 m6 l4">
                      <div style="background: #606060; padding: 10px; margin: 2px; color: white; text-align: center;">
                        Col 2 (s12/m6/l4)
                      </div>
                    </div>
                    <div class="col s12 m12 l4">
                      <div style="background: #404040; padding: 10px; margin: 2px; color: white; text-align: center;">
                        Col 3 (s12/m12/l4)
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col offset-l2 s12 m8 l8">
                      <div style="background: #666; padding: 10px; margin: 2px; color: white; text-align: center;">
                        Offset Column (offset-l2)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Data Tab */}
          {activeTab() === 'data' && (
            <div class="tui-tab-content">
              <h3>Data Components</h3>
              
              {/* Table */}
              <div style="margin: 20px 0;">
                <h4>Data Table:</h4>
                <table class="tui-table hovered-cyan striped-blue">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>City</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>25</td>
                      <td>New York</td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <td>Jane Smith</td>
                      <td>30</td>
                      <td>London</td>
                      <td>Inactive</td>
                    </tr>
                    <tr>
                      <td>Bob Johnson</td>
                      <td>35</td>
                      <td>Tokyo</td>
                      <td>Active</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </fieldset>
      </div>

      {/* Status Panel */}
      <div class="tui-panel" style="margin-top: 20px;">
        <div class="tui-panel-header">
          Current Values
        </div>
        <div class="tui-panel-content">
          <div style="font-family: monospace; font-size: 12px;">
            <div>📝 Text Input: "{inputValue() || '(empty)'}"</div>
            <div>☑️ Checkbox: {checkboxValue() ? '✓ checked' : '☐ unchecked'}</div>
            <div>🔘 Radio: {radioValue()}</div>
            <div>📊 Progress: {progress()}%</div>
            <div>📑 Active Tab: {activeTab()}</div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav class="tui-nav" style="margin-top: 20px;">
        <ul>
          <li class="tui-dropdown">
            <span style="color: red;">F</span>ile
            <div class="tui-dropdown-content">
              <ul>
                <li><a href="#!"><span style="color: red;">N</span>ew</a></li>
                <li><a href="#!"><span style="color: red;">O</span>pen</a></li>
                <li><a href="#!"><span style="color: red;">S</span>ave</a></li>
                <li><a href="#!">Save <span style="color: red;">A</span>s...</a></li>
              </ul>
            </div>
          </li>
          <li class="tui-dropdown">
            <span style="color: red;">E</span>dit
            <div class="tui-dropdown-content">
              <ul>
                <li><a href="#!"><span style="color: red;">C</span>ut</a></li>
                <li><a href="#!">C<span style="color: red;">o</span>py</a></li>
                <li><a href="#!"><span style="color: red;">P</span>aste</a></li>
              </ul>
            </div>
          </li>
          <li><span style="color: red;">H</span>elp</li>
          <li style="float: right;">
            <span class="tui-datetime">12:34:56 PM</span>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div style="margin-top: 20px; text-align: center; font-size: 11px; color: #666; border-top: 1px solid #999; padding-top: 10px;">
        🎮 Built with SolidJS + TuiCSS v{"{"}2.1.2{"}"} • Authentic MS-DOS Components • 
        All components use correct TuiCSS structure and classes
      </div>
    </div>
  );
};

export default App;