import { Component, Show } from 'solid-js';
import { PanelProps } from '../types';
import { cn } from '../utils/cn';

export const Panel: Component<PanelProps> = (props) => {
  return (
    <div class={cn('tui-panel', props.class)}>
      <Show when={props.title}>
        <div class="tui-panel-header">
          {props.title}
        </div>
      </Show>
      <div class="tui-panel-content">
        {props.children}
      </div>
    </div>
  );
};