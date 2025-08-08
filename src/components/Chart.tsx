import { Component } from 'solid-js';
import { BaseProps } from '../types';
import { cn } from '../utils/cn';

export interface ChartProps extends BaseProps {
  type?: 'horizontal' | 'vertical';
  data: Array<{ label: string; value: number; color?: string; }>;
  max?: number;
  showXAxis?: boolean;
  showYAxis?: boolean;
  xAxisLabels?: string[];
  yAxisLabels?: string[];
}

export const Chart: Component<ChartProps> = (props) => {
  const maxValue = props.max || Math.max(...props.data.map(item => item.value));
  const isVertical = props.type === 'vertical';
  const showXAxis = props.showXAxis !== false;
  const showYAxis = props.showYAxis !== false;
  
  // Generate default axis labels if not provided
  const defaultYAxisLabels = () => {
    if (props.yAxisLabels) return props.yAxisLabels;
    const steps = 5;
    const labels = [];
    for (let i = steps; i >= 0; i--) {
      labels.push(`${Math.round((maxValue / steps) * i)}`);
    }
    return labels;
  };

  const defaultXAxisLabels = () => {
    if (props.xAxisLabels) return props.xAxisLabels;
    if (isVertical) {
      return props.data.map((_, index) => `s${index + 1}`);
    } else {
      // For horizontal charts, X-axis shows percentage values
      const steps = 4;
      const labels = [];
      for (let i = 1; i <= steps; i++) {
        labels.push(`${Math.round((maxValue / steps) * i)}%`);
      }
      return labels;
    }
  };
  
  return (
    <div class={cn(
      isVertical ? 'tui-chart-vertical' : 'tui-chart-horizontal',
      props.class
    )}>
      {/* Chart Display */}
      <div class={cn(
        'tui-chart-display',
        !showXAxis && 'no-x-axis',
        !showYAxis && 'no-y-axis'
      )}>
        {props.data.map((item) => (
          <div 
            class={cn('tui-chart-value', item.color || 'red-168')}
            style={isVertical 
              ? `height: ${(item.value / maxValue) * 100}%`
              : `width: ${(item.value / maxValue) * 100}%`
            }
          >
            {isVertical ? `${item.value}%` : `${item.label}: ${item.value}%`}
          </div>
        ))}
      </div>
      
      {/* Y-Axis */}
      {showYAxis && (
        <div class="tui-chart-y-axis">
          {isVertical 
            ? defaultYAxisLabels().map((label) => (
                <div class="tui-chart-legend">{label}</div>
              ))
            : props.data.map((item) => (
                <div class="tui-chart-legend">{item.label}</div>
              ))
          }
        </div>
      )}
      
      {/* X-Axis */}
      {showXAxis && (
        <div class="tui-chart-x-axis">
          {defaultXAxisLabels().map((label) => (
            <div class="tui-chart-legend">{label}</div>
          ))}
        </div>
      )}
    </div>
  );
};