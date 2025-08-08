import { Component, createSignal } from 'solid-js';

const CompleteApp: Component = () => {
  const [inputValue, setInputValue] = createSignal('Sample text');
  const [checkboxValue, setCheckboxValue] = createSignal(true);
  const [radioValue, setRadioValue] = createSignal('first');
  const [selectValue, setSelectValue] = createSignal('second');
  const [progress, setProgress] = createSignal(75);
  const [, setModalOpen] = createSignal(false);
  const [activeTab, setActiveTab] = createSignal('forms');

  // Demo data para tabla
  const tableData = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York', status: 'Active' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'London', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', age: 35, city: 'Tokyo', status: 'Active' },
    { id: 4, name: 'Alice Brown', age: 28, city: 'Paris', status: 'Active' }
  ];

  const openModal = () => {
    setModalOpen(true);
    document.querySelector('.tui-overlap')?.classList.add('active');
    document.querySelector('.tui-modal')?.classList.add('active');
  };

  const closeModal = () => {
    setModalOpen(false);
    document.querySelector('.tui-overlap')?.classList.remove('active');
    document.querySelector('.tui-modal')?.classList.remove('active');
  };

  return (
    <div style="padding: 20px; min-height: 100vh;">
        
        {/* Main Application Window */}
        <div class="tui-window" style="width: 90%; max-width: 1200px; margin: 0 auto;">
          <fieldset class="tui-fieldset">
            <legend class="yellow-255 white-255-text">🖥️ Solid TuiCSS - Complete Demo Application</legend>
            
            {/* Navigation Bar */}
            <nav class="tui-nav" style="position: relative; margin-bottom: 20px;">
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
                  <span class="tui-datetime" data-format="h:m:s a">12:34:56 PM</span>
                </li>
              </ul>
            </nav>

            {/* Tabs System */}
            <div class="tui-tabs">
              <ul>
                <li>
                  <a class={`tui-tab ${activeTab() === 'forms' ? 'active' : ''}`} 
                     onClick={() => setActiveTab('forms')}>
                    Forms
                  </a>
                </li>
                <li>
                  <a class={`tui-tab ${activeTab() === 'components' ? 'active' : ''}`} 
                     onClick={() => setActiveTab('components')}>
                    Components
                  </a>
                </li>
                <li>
                  <a class={`tui-tab ${activeTab() === 'data' ? 'active' : ''}`} 
                     onClick={() => setActiveTab('data')}>
                    Data
                  </a>
                </li>
                <li>
                  <a class={`tui-tab ${activeTab() === 'layout' ? 'active' : ''}`} 
                     onClick={() => setActiveTab('layout')}>
                    Layout
                  </a>
                </li>
              </ul>
            </div>

            {/* Forms Tab */}
            {activeTab() === 'forms' && (
              <div class="tui-tab-content" style="display: block;">
                <h3 class="yellow-255">📝 Form Elements</h3>
                
                {/* Input Fields */}
                <div class="container">
                  <div class="row">
                    <div class="col s12 m6">
                      <fieldset class="tui-input-fieldset">
                        <legend>Text Inputs</legend>
                        
                        <div style="margin: 10px 0;">
                          Text.......: <input 
                            class="tui-input" 
                            style="width: 300px;"
                            value={inputValue()}
                            onInput={(e) => setInputValue(e.currentTarget.value)}
                          />
                        </div>
                        
                        <div style="margin: 10px 0;">
                          Disabled...: <input class="tui-input disabled" disabled value="disabled text" style="width: 300px;" />
                        </div>
                        
                        <div style="margin: 10px 0;">
                          Password...: <input class="tui-input" type="password" value="12345" style="width: 300px;" />
                        </div>
                        
                        <div style="margin: 10px 0;">
                          Email......: <input class="tui-input" type="email" placeholder="user@domain.com" style="width: 300px;" />
                        </div>
                        
                        <div style="margin: 10px 0;">
                          Number.....: <input class="tui-input" type="number" value="42" style="width: 300px;" />
                        </div>
                        
                        <div style="margin: 10px 0;">
                          Date.......: <input class="tui-input" type="date" value="2024-01-01" style="width: 300px;" />
                        </div>
                      </fieldset>
                    </div>
                    
                    <div class="col s12 m6">
                      <fieldset class="tui-input-fieldset">
                        <legend>Select & Textarea</legend>
                        
                        <div style="margin: 10px 0;">
                          Select.....: <select 
                            class="tui-input" 
                            style="width: 300px;"
                            value={selectValue()}
                            onChange={(e) => setSelectValue(e.currentTarget.value)}
                          >
                            <option value="first">First Option</option>
                            <option value="second">Second Option</option>
                            <option value="third">Third Option</option>
                            <optgroup label="Group">
                              <option value="group1">Group Option 1</option>
                              <option value="group2">Group Option 2</option>
                            </optgroup>
                          </select>
                        </div>
                        
                        <div style="margin: 10px 0;">
                          Multiple...: <select multiple class="tui-input" style="width: 300px; height: 80px;">
                            <option>Option A</option>
                            <option>Option B</option>
                            <option>Option C</option>
                            <option>Option D</option>
                          </select>
                        </div>
                        
                        <div style="margin: 10px 0;">
                          Textarea:<br/>
                          <textarea 
                            class="tui-input" 
                            style="width: 300px; height: 60px;"
                            placeholder="Enter your message..."
                          >Sample content...</textarea>
                        </div>
                      </fieldset>
                      
                      {/* Checkboxes */}
                      <fieldset class="tui-input-fieldset">
                        <legend>Checkboxes</legend>
                        <label class="tui-checkbox">
                          Subscribe to newsletter
                          <input 
                            type="checkbox" 
                            checked={checkboxValue()}
                            onChange={(e) => setCheckboxValue(e.currentTarget.checked)}
                          />
                          <span></span>
                        </label>
                        <label class="tui-checkbox">
                          Enable notifications
                          <input type="checkbox" />
                          <span></span>
                        </label>
                        <label class="tui-checkbox disabled">
                          Disabled option
                          <input type="checkbox" disabled />
                          <span></span>
                        </label>
                      </fieldset>
                      
                      {/* Radio Buttons */}
                      <fieldset class="tui-input-fieldset">
                        <legend>Radio Buttons</legend>
                        <label class="tui-radio">
                          Email notifications
                          <input 
                            type="radio" 
                            name="contact" 
                            value="first"
                            checked={radioValue() === 'first'}
                            onChange={() => setRadioValue('first')}
                          />
                          <span></span>
                        </label>
                        <label class="tui-radio">
                          SMS notifications
                          <input 
                            type="radio" 
                            name="contact" 
                            value="second"
                            checked={radioValue() === 'second'}
                            onChange={() => setRadioValue('second')}
                          />
                          <span></span>
                        </label>
                        <label class="tui-radio disabled">
                          Push notifications (disabled)
                          <input type="radio" name="contact" disabled />
                          <span></span>
                        </label>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Components Tab */}
            {activeTab() === 'components' && (
              <div class="tui-tab-content" style="display: block;">
                <h3 class="yellow-255">🎛️ UI Components</h3>
                
                <div class="container">
                  <div class="row">
                    <div class="col s12 m6">
                      {/* Buttons */}
                      <h4 class="cyan-255">Buttons</h4>
                      <div style="margin: 15px 0;">
                        <button class="tui-button">Default Button</button>&nbsp;
                        <button class="tui-button green-168 white-text">Success</button>&nbsp;
                        <button class="tui-button red-168 white-text">Danger</button>&nbsp;
                        <button class="tui-button orange-168 white-text">Warning</button><br/><br/>
                        <button class="tui-button cyan-168 black-text">Info</button>&nbsp;
                        <button class="tui-button purple-168 white-text">Purple</button>&nbsp;
                        <button class="tui-button yellow-168 black-text">Yellow</button>&nbsp;
                        <button class="tui-button disabled" disabled>Disabled</button>
                      </div>

                      {/* Progress Bars */}
                      <h4 class="cyan-255">Progress Bars</h4>
                      <div style="margin: 15px 0;">
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
                            <span class="tui-progress green-255" style="width: 85%"></span>
                          </div>
                        </div>
                        
                        <div style="margin: 10px 0;">
                          <button class="tui-button" onClick={() => setProgress(p => Math.min(p + 10, 100))}>
                            Increase
                          </button>&nbsp;
                          <button class="tui-button" onClick={() => setProgress(p => Math.max(p - 10, 0))}>
                            Decrease
                          </button>&nbsp;
                          <button class="tui-button" onClick={() => setProgress(50)}>Reset</button>
                        </div>
                      </div>
                    </div>
                    
                    <div class="col s12 m6">
                      {/* Modal */}
                      <h4 class="cyan-255">Modal Dialog</h4>
                      <div style="margin: 15px 0;">
                        <button class="tui-button tui-modal-button purple-168 white-text" onClick={openModal}>
                          ◄ Open Modal Dialog ►
                        </button>
                        <p style="font-size: 14px; color: #a8a8a8;">
                          Click the button to open a modal window with TuiCSS styling.
                        </p>
                      </div>

                      {/* Dropdown */}
                      <h4 class="cyan-255">Dropdown Menu</h4>
                      <div class="tui-dropdown" style="margin: 15px 0;">
                        <button class="tui-button">Actions ▼</button>
                        <div class="tui-dropdown-content">
                          <ul>
                            <li><a href="#!">Create New</a></li>
                            <li><a href="#!">Edit Item</a></li>
                            <li><a href="#!">Delete Item</a></li>
                            <li><a href="#!">Export Data</a></li>
                          </ul>
                        </div>
                      </div>

                      {/* Dividers */}
                      <h4 class="cyan-255">Dividers</h4>
                      <div style="margin: 15px 0;">
                        <p>Content above divider</p>
                        <div class="tui-divider"></div>
                        <p>Content below white divider</p>
                        <div class="tui-black-divider"></div>
                        <p>Content below black divider</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Data Tab */}
            {activeTab() === 'data' && (
              <div class="tui-tab-content" style="display: block;">
                <h3 class="yellow-255">📊 Data Components</h3>
                
                {/* Table */}
                <h4 class="cyan-255">Data Table</h4>
                <table class="tui-table hovered-cyan striped-blue" style="width: 100%; margin: 20px 0;">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>City</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map(row => (
                      <tr>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                        <td>{row.city}</td>
                        <td>{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Chart Examples */}
                <h4 class="cyan-255">Charts</h4>
                <div class="container">
                  <div class="row">
                    <div class="col s12 m6">
                      <div style="height: 200px; width: 100%;">
                        <Chart 
                          type="vertical"
                          data={[
                            { label: 'Q1', value: 60, color: 'cyan-168' },
                            { label: 'Q2', value: 80, color: 'green-168' },
                            { label: 'Q3', value: 40, color: 'red-168' },
                            { label: 'Q4', value: 90, color: 'yellow-168' }
                          ]}
                          max={100}
                          xAxisLabels={['Q1', 'Q2', 'Q3', 'Q4']}
                        />
                      </div>
                      <p style="text-align: center; font-size: 12px; color: #a8a8a8;">Vertical Chart</p>
                    </div>
                    
                    <div class="col s12 m6">
                      <div style="height: 200px; width: 100%;">
                        <Chart 
                          type="horizontal"
                          data={[
                            { label: 'Sales', value: 60, color: 'cyan-168' },
                            { label: 'Marketing', value: 80, color: 'green-168' },
                            { label: 'Support', value: 40, color: 'red-168' },
                            { label: 'Dev', value: 75, color: 'yellow-168' }
                          ]}
                          max={100}
                        />
                      </div>
                      <p style="text-align: center; font-size: 12px; color: #a8a8a8;">Horizontal Chart</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Layout Tab */}
            {activeTab() === 'layout' && (
              <div class="tui-tab-content" style="display: block;">
                <h3 class="yellow-255">📐 Layout System</h3>
                
                {/* Grid System */}
                <h4 class="cyan-255">Grid System</h4>
                <div class="container">
                  <div class="row">
                    <div class="col s12 m6 l4">
                      <div class="tui-panel">
                        <div class="tui-panel-header">Col 1</div>
                        <div class="tui-panel-content">s12 m6 l4</div>
                      </div>
                    </div>
                    <div class="col s12 m6 l4">
                      <div class="tui-panel green-168">
                        <div class="tui-panel-header">Col 2</div>
                        <div class="tui-panel-content">s12 m6 l4</div>
                      </div>
                    </div>
                    <div class="col s12 m12 l4">
                      <div class="tui-panel red-168">
                        <div class="tui-panel-header">Col 3</div>
                        <div class="tui-panel-content">s12 m12 l4</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col offset-l2 s12 m8 l8">
                      <div class="tui-panel purple-168">
                        <div class="tui-panel-header">Offset Column</div>
                        <div class="tui-panel-content">offset-l2 s12 m8 l8</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Windows and Panels */}
                <h4 class="cyan-255">Windows & Panels</h4>
                <div class="container">
                  <div class="row">
                    <div class="col s12 m6">
                      <div class="tui-window orange-168">
                        <fieldset class="tui-fieldset">
                          <legend>Sample Window</legend>
                          <p>This is a TUI window with a fieldset inside.</p>
                          <p>Windows are the main container components in TuiCSS.</p>
                          <button class="tui-button right">OK</button>
                        </fieldset>
                      </div>
                    </div>
                    <div class="col s12 m6">
                      <div class="tui-panel cyan-168">
                        <div class="tui-panel-header">Sample Panel</div>
                        <div class="tui-panel-content">
                          <p>This is a TUI panel component.</p>
                          <p>Panels are simpler containers without fieldsets.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Status Display */}
            <div class="tui-divider" style="margin: 30px 0 20px 0;"></div>
            <div style="font-family: monospace; font-size: 12px; background-color: #000; padding: 10px; color: #0ff;">
              <div style="margin-bottom: 5px;"><strong class="yellow-255">📊 Current Values:</strong></div>
              <div>📝 Text Input: "{inputValue()}"</div>
              <div>☑️ Checkbox: {checkboxValue() ? '✓ Checked' : '☐ Unchecked'}</div>
              <div>🔘 Radio: {radioValue()}</div>
              <div>📋 Select: {selectValue()}</div>
              <div>📊 Progress: {progress()}%</div>
              <div>📑 Active Tab: {activeTab()}</div>
            </div>
          </fieldset>
        </div>

        {/* Modal Implementation */}
        <div class="tui-overlap" onClick={closeModal}></div>
        <div id="modal" class="tui-modal">
          <div class="tui-window red-168 left-align">
            <fieldset class="tui-fieldset">
              <legend class="red-255 yellow-255-text">⚠️ Alert Dialog</legend>
              <p>This is a modal dialog window implemented with TuiCSS!</p>
              <p>It includes:</p>
              <ul style="margin-left: 20px;">
                <li>• Proper overlay background</li>
                <li>• Centered positioning</li>
                <li>• Authentic MS-DOS styling</li>
                <li>• Click outside to close</li>
              </ul>
              <br/>
              <div class="tui-divider"></div>
              <br/>
              <button 
                class="tui-button cyan-168 white-255-text tui-modal-close-button right" 
                onClick={closeModal}
              >
                close
              </button>
            </fieldset>
          </div>
        </div>

        {/* Status Bar */}
        <div class="tui-statusbar">
          <ul>
            <li>Ready</li>
            <li class="tui-statusbar-divider"></li>
            <li>Solid TuiCSS v1.0.0</li>
            <li class="tui-statusbar-divider"></li>
            <li>Components: Active</li>
            <li style="float: right;">
              <span class="tui-datetime" data-format="y-M-d h:m:s">2024-01-01 12:34:56</span>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default CompleteApp;