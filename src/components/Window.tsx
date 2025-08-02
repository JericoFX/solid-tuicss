import { Component, Show } from 'solid-js';
import { WindowProps } from '../types';
import { cn } from '../utils/cn';

export const Window: Component<WindowProps> = (props) => {
  return (
    <div class={cn('tui-window', props.class)}>
      <fieldset class="tui-fieldset">
        <Show when={props.title}>
          <legend>{props.title}</legend>
        </Show>
        {props.children}
        <Show when={props.closable}>
          <button 
            class="tui-button right"
            onClick={props.onClose}
            type="button"
          >
            ×
          </button>
        </Show>
      </fieldset>
    </div>
  );
};