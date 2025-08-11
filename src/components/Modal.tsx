import { Component, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import { ModalProps } from '../types';
import { cn } from '../utils/cn';

export const Modal: Component<ModalProps> = (props) => {
  return (
    <Show when={props.open}>
      <Portal>
        {/* Overlap layer */}
        <div class="tui-overlap active" onClick={props.onClose}></div>
        
        {/* Modal window */}
        <div 
          id={props.id}
          class={cn('tui-modal active', props.class)}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            'z-index': '1001',
            'max-width': '90vw',
            'max-height': '90vh',
            display: 'block'
          }}
        >
          <div class={cn('tui-window', props.color)}>
            <fieldset class="tui-fieldset">
              <Show when={props.title}>
                <legend class={props.titleColor}>{props.title}</legend>
              </Show>
              {props.children}
              <Show when={props.onClose}>
                <button 
                  class="tui-button tui-modal-close-button right"
                  data-modal={props.id}
                  onClick={props.onClose}
                  type="button"
                >
                  close
                </button>
              </Show>
            </fieldset>
          </div>
        </div>
      </Portal>
    </Show>
  );
};