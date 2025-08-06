import { Component } from 'solid-js';
import { BaseProps } from '../types';
import { cn } from '../utils/cn';

export interface TableProps extends BaseProps {
  striped?: string;
  hovered?: string;
}

export const Table: Component<TableProps> = (props) => {
  return (
    <table class={cn(
      'tui-table',
      props.striped && `striped-${props.striped}`,
      props.hovered && `hovered-${props.hovered}`,
      props.class
    )}>
      {props.children}
    </table>
  );
};

export interface TableHeaderProps extends BaseProps {}

export const TableHeader: Component<TableHeaderProps> = (props) => {
  return (
    <thead class={cn('tui-table-header', props.class)}>
      {props.children}
    </thead>
  );
};

export interface TableBodyProps extends BaseProps {}

export const TableBody: Component<TableBodyProps> = (props) => {
  return (
    <tbody class={cn('tui-table-body', props.class)}>
      {props.children}
    </tbody>
  );
};

export interface TableRowProps extends BaseProps {
  onClick?: () => void;
}

export const TableRow: Component<TableRowProps> = (props) => {
  return (
    <tr 
      class={cn('tui-table-row', props.onClick && 'clickable', props.class)}
      onClick={props.onClick}
      style={props.onClick ? { cursor: 'pointer' } : undefined}
    >
      {props.children}
    </tr>
  );
};

export interface TableCellProps extends BaseProps {
  header?: boolean;
}

export const TableCell: Component<TableCellProps> = (props) => {
  const Element = props.header ? 'th' : 'td';
  
  return (
    <Element class={cn('tui-table-cell', props.class)}>
      {props.children}
    </Element>
  );
};