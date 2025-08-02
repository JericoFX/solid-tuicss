import { Component, Show } from 'solid-js';
import { NavbarProps } from '../types';
import { cn } from '../utils/cn';

export const Navbar: Component<NavbarProps> = (props) => {
  return (
    <nav class={cn('tui-nav', props.class)}>
      <ul>
        <Show when={props.title}>
          <li>{props.title}</li>
        </Show>
        {props.children}
      </ul>
    </nav>
  );
};