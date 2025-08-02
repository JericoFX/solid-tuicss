import { Component } from 'solid-js';
import { BaseProps } from '../types';
import { cn } from '../utils/cn';

export interface ChartProps extends BaseProps {
  type?: 'horizontal' | 'vertical';
  data: Array<{ label: string; value: number; color?: string; }>;
  max?: number;
}

export const Chart: Component<ChartProps> = (props) => {
  const maxValue = props.max || Math.max(...props.data.map(item => item.value));
  
  return (
    <div class={cn(
      'tui-chart',
      props.type === 'vertical' && 'tui-chart-vertical',
      props.class
    )}>
      {props.data.map((item) => (
        <div class="tui-chart-item">
          <div class="tui-chart-label">{item.label}</div>
          <div class="tui-chart-bar-container">
            <div 
              class={cn('tui-chart-bar', item.color && `${item.color}-bg`)}
              style={props.type === 'vertical' 
                ? `height: ${(item.value / maxValue) * 100}%`
                : `width: ${(item.value / maxValue) * 100}%`
              }
            />
          </div>
          <div class="tui-chart-value">{item.value}</div>
        </div>
      ))}
    </div>
  );
};