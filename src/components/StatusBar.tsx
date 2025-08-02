import { Component } from 'solid-js';
import { BaseProps } from '../types';
import { cn } from '../utils/cn';

export interface StatusBarProps extends BaseProps {
  position?: 'top' | 'bottom';
}

export const StatusBar: Component<StatusBarProps> = (props) => {
  return (
    <div class={cn(
      'tui-status-bar',
      props.position === 'top' && 'tui-status-bar-top',
      props.class
    )}>
      {props.children}
    </div>
  );
};