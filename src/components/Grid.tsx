import { Component } from 'solid-js';
import { BaseProps } from '../types';
import { cn } from '../utils/cn';

export interface ContainerProps extends BaseProps {}

export const Container: Component<ContainerProps> = (props) => {
  return (
    <div class={cn('container', props.class)}>
      {props.children}
    </div>
  );
};

export interface RowProps extends BaseProps {}

export const Row: Component<RowProps> = (props) => {
  return (
    <div class={cn('row', props.class)}>
      {props.children}
    </div>
  );
};

export interface ColProps extends BaseProps {
  s?: number;
  m?: number;
  l?: number;
  offsetS?: number;
  offsetM?: number;
  offsetL?: number;
}

export const Col: Component<ColProps> = (props) => {
  const classes = [
    'col',
    props.s && `s${props.s}`,
    props.m && `m${props.m}`,
    props.l && `l${props.l}`,
    props.offsetS && `offset-s${props.offsetS}`,
    props.offsetM && `offset-m${props.offsetM}`,
    props.offsetL && `offset-l${props.offsetL}`,
  ].filter(Boolean);
  
  return (
    <div class={cn(classes, props.class)}>
      {props.children}
    </div>
  );
};