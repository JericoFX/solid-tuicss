import { Component } from 'solid-js';
import { TextAreaProps } from '../types';
import { cn } from '../utils/cn';

export const TextArea: Component<TextAreaProps> = (props) => {
  return (
    <textarea
      class={cn('tui-input', props.class)}
      placeholder={props.placeholder}
      value={props.value}
      onInput={(e) => props.onInput?.(e.currentTarget.value)}
      rows={props.rows || 4}
      disabled={props.disabled}
    />
  );
};