import { Component } from 'solid-js';
import { TabsProps, TabProps, TabContentProps } from '../types';
import { cn } from '../utils/cn';

export const Tabs: Component<TabsProps> = (props) => {
  return (
    <div class={cn('tui-tabs', props.class)}>
      {props.children}
    </div>
  );
};

export const Tab: Component<TabProps> = (props) => {
  return (
    <a 
      class={cn(
        'tui-tab',
        props.active && 'active',
        props.class
      )}
      data-tab-content={props.id}
      onClick={() => props.onClick?.()}
    >
      {props.title}
    </a>
  );
};

export const TabContent: Component<TabContentProps> = (props) => {
  return (
    <div 
      id={props.id}
      class={cn(
        'tui-tab-content',
        !props.active && 'hidden',
        props.class
      )}
    >
      {props.children}
    </div>
  );
};