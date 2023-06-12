import * as B from './Button.styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant: 'primary' | 'secondary' | 'danger' | 'alert' 
  varianthover?: 'primary' | 'secondary' | 'danger' | 'alert' 
}

export default function Button({ label, variant, varianthover, ...props }: ButtonProps) {
  return <B.Wrapper
    {...props}
    variant={variant}
    varianthover={varianthover}
  >
    {label}
  </B.Wrapper>
}

