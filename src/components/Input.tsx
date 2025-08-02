import { Component } from 'solid-js';
import { InputProps } from '../types';
import { cn } from '../utils/cn';

export const Input: Component<InputProps> = (props) => {
  return (
    <input
      class={cn('tui-input', props.class)}
      type={props.type || 'text'}
      placeholder={props.placeholder}
      value={props.value}
      onInput={(e) => props.onInput?.(e.currentTarget.value)}
      disabled={props.disabled}
    />
  );
};