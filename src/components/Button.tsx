import { Component } from 'solid-js';
import { ButtonProps } from '../types';
import { cn } from '../utils/cn';

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      class={cn(
        'tui-button',
        props.color && `${props.color}`,
        props.textColor && `${props.textColor}-text`,
        props.disabled && 'disabled',
        props.class
      )}
      onClick={props.onClick}
      disabled={props.disabled}
      type="button"
      autofocus={props.focused}
    >
      {props.children}
    </button>
  );
};