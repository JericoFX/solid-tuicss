import { Component, Show } from 'solid-js';
import { RadioProps } from '../types';
import { cn } from '../utils/cn';

export const Radio: Component<RadioProps> = (props) => {
  return (
    <label class={cn('tui-radio', props.class)}>
      <Show when={props.label}>
        {props.label}
      </Show>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={(e) => props.onChange?.(e.currentTarget.checked)}
        disabled={props.disabled}
      />
      <span></span>
      {props.children}
    </label>
  );
};