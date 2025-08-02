import { Component, For, Show } from 'solid-js';
import { SelectProps } from '../types';
import { cn } from '../utils/cn';

export const Select: Component<SelectProps> = (props) => {
  return (
    <select
      class={cn('tui-input', props.class)}
      value={props.value}
      onChange={(e) => props.onChange?.(e.currentTarget.value)}
      disabled={props.disabled}
    >
      <Show when={props.placeholder}>
        <option value="">{props.placeholder}</option>
      </Show>
      <For each={props.options || []}>
        {(option) => (
          <option value={option.value}>
            {option.label}
          </option>
        )}
      </For>
      {props.children}
    </select>
  );
};