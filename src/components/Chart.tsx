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
  const isVertical = props.type === 'vertical';
  
  // Generate y-axis values
  const yAxisValues = [];
  const steps = 5;
  for (let i = steps; i >= 0; i--) {
    yAxisValues.push(Math.round((maxValue / steps) * i));
  }
  
  return (
    <div class={cn(
      'tui-chart-display',
      isVertical ? 'tui-chart-vertical' : 'tui-chart-horizontal',
      props.class
    )}>
      {/* Y-Axis */}
      <div class="tui-chart-y-axis">
        {yAxisValues.map((value) => (
          <div class="tui-chart-legend">{value}</div>
        ))}
      </div>
      
      {/* Chart Content */}
      <div class="tui-chart">
        {props.data.map((item) => (
          <div class="tui-chart-item">
            <div class="tui-chart-label">{item.label}</div>
            <div class="tui-chart-bar-container">
              <div 
                class={cn('tui-chart-bar', item.color && `${item.color}-bg`)}
                style={isVertical 
                  ? `height: ${(item.value / maxValue) * 100}%`
                  : `width: ${(item.value / maxValue) * 100}%`
                }
              />
            </div>
            <div class="tui-chart-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};