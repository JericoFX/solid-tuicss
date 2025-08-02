import { Component, Show, createSignal } from 'solid-js';
import { DropdownProps } from '../types';
import { cn } from '../utils/cn';

export const Dropdown: Component<DropdownProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(props.open || false);

  const toggleOpen = () => {
    const newState = !isOpen();
    setIsOpen(newState);
    props.onOpenChange?.(newState);
  };

  return (
    <div class={cn('tui-dropdown', props.class)}>
      <div 
        class="tui-dropdown-trigger"
        onClick={toggleOpen}
      >
        {props.trigger}
      </div>
      <Show when={isOpen()}>
        <div class="tui-dropdown-content">
          {props.children}
        </div>
      </Show>
    </div>
  );
};