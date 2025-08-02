import { Component } from 'solid-js';
import { BaseProps } from '../types';
import { cn } from '../utils/cn';

export interface FieldsetProps extends BaseProps {
  legend?: string;
}

export const Fieldset: Component<FieldsetProps> = (props) => {
  return (
    <fieldset class={cn('tui-input-fieldset', props.class)}>
      {props.legend && <legend>{props.legend}</legend>}
      {props.children}
    </fieldset>
  );
};