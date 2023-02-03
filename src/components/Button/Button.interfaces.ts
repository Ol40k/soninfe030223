type ButtonSizes = 'wide' | 'content'
type ButtonVariants = 'primary' | 'fulfilled'

export interface ButtonProps {
  size: ButtonSizes
  variant: ButtonVariants
  content: JSX.Element | JSX.Element[] | string
  className?: string
  onClick: () => void
}
