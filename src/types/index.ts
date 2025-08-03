import { JSX } from 'solid-js';

// Base component props
export interface BaseProps {
  class?: string;
  children?: JSX.Element;
}

// Window component props
export interface WindowProps extends BaseProps {
  title?: string;
  closable?: boolean;
  onClose?: () => void;
}

// Panel component props
export interface PanelProps extends BaseProps {
  title?: string;
}

// Tab related props
export interface TabsProps extends BaseProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export interface TabProps extends BaseProps {
  id: string;
  title: string;
  active?: boolean;
  onClick?: () => void;
}

export interface TabContentProps extends BaseProps {
  id: string;
  active?: boolean;
}

// Form component props
export interface InputProps extends BaseProps {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onInput?: (value: string) => void;
  disabled?: boolean;
}

export interface TextAreaProps extends BaseProps {
  placeholder?: string;
  value?: string;
  onInput?: (value: string) => void;
  rows?: number;
  disabled?: boolean;
}

export interface SelectProps extends BaseProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  options?: Array<{ value: string; label: string; }>;
}

export interface CheckboxProps extends BaseProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export interface RadioProps extends BaseProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
}

// Button component props
export interface ButtonProps extends BaseProps {
  color?: string;
  textColor?: string;
  disabled?: boolean;
  focused?: boolean;
  onClick?: () => void;
}

// Progress bar props
export interface ProgressBarProps extends BaseProps {
  value: number;
  max?: number;
  label?: string;
}

// Modal props
export interface ModalProps extends BaseProps {
  id?: string;
  open: boolean;
  onClose?: () => void;
  title?: string;
  color?: string;
  titleColor?: string;
}

// Navbar props
export interface NavbarProps extends BaseProps {
  title?: string;
}

// Dropdown props
export interface DropdownProps extends BaseProps {
  trigger: JSX.Element;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// Border props
export interface BorderProps extends BaseProps {
  style?: 'single' | 'double' | 'rounded';
}

// Chart props
export interface ChartItemData {
  label: string;
  value: number;
  color?: string;
}

export interface ChartProps extends BaseProps {
  type?: 'horizontal' | 'vertical';
  data: ChartItemData[];
  max?: number;
}

// Table props
export interface TableProps extends BaseProps {
  striped?: boolean;
  bordered?: boolean;
}

export interface TableHeaderProps extends BaseProps {}
export interface TableBodyProps extends BaseProps {}
export interface TableRowProps extends BaseProps {
  onClick?: () => void;
}

export interface TableCellProps extends BaseProps {
  header?: boolean;
}

// Grid props
export interface ContainerProps extends BaseProps {}
export interface RowProps extends BaseProps {}

export interface ColProps extends BaseProps {
  s?: number;
  m?: number;
  l?: number;
  offsetS?: number;
  offsetM?: number;
  offsetL?: number;
}

// Status bar props
export interface StatusBarProps extends BaseProps {
  position?: 'top' | 'bottom';
}

// Fieldset props
export interface FieldsetProps extends BaseProps {
  legend?: string;
}

// Divider props
export interface DividerProps extends BaseProps {
  orientation?: 'horizontal' | 'vertical';
}