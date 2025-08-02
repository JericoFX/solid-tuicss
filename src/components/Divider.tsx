import { Component } from 'solid-js';
import { BaseProps } from '../types';
import { cn } from '../utils/cn';

export interface DividerProps extends BaseProps {
  orientation?: 'horizontal' | 'vertical';
}

export const Divider: Component<DividerProps> = (props) => {
  return (
    <div class={cn(
      'tui-divider',
      props.orientation === 'vertical' && 'tui-divider-vertical',
      props.class
    )}>
      {props.children}
    </div>
  );
};