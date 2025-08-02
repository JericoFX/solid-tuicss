import { Component, Show } from 'solid-js';
import { CheckboxProps } from '../types';
import { cn } from '../utils/cn';

export const Checkbox: Component<CheckboxProps> = (props) => {
  return (
    <label class={cn('tui-checkbox', props.class)}>
      <Show when={props.label}>
        {props.label}
      </Show>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={(e) => props.onChange?.(e.currentTarget.checked)}
        disabled={props.disabled}
      />
      <span></span>
      {props.children}
    </label>
  );
};