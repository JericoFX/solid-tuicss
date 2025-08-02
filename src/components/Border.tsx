import { Component } from 'solid-js';
import { BorderProps } from '../types';
import { cn } from '../utils/cn';

export const Border: Component<BorderProps> = (props) => {
  return (
    <div class={cn(
      'tui-border',
      props.style && `tui-border-${props.style}`,
      props.class
    )}>
      {props.children}
    </div>
  );
};