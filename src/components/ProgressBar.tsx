import { Component, Show } from 'solid-js';
import { ProgressBarProps } from '../types';
import { cn } from '../utils/cn';

export const ProgressBar: Component<ProgressBarProps> = (props) => {
  const percentage = () => ((props.value / (props.max || 100)) * 100);
  
  return (
    <div class={cn('tui-progress-container', props.class)}>
      <Show when={props.label}>
        <span class="tui-progress-label">{props.label}</span>
      </Show>
      <div class="tui-progress-bar">
        <span 
          class="tui-progress"
          style={`width: ${percentage()}%`}
        />
      </div>
    </div>
  );
};