import { PrimaryDecoratorIcon, PrimaryDecoratorComponent } from './components'

export const blockTypeStyles = [
  { title: 'Normal', value: 'normal' },
  { title: 'H1', value: 'h1' },
  { title: 'H2', value: 'h2' },
  { title: 'H3', value: 'h3' },
  { title: 'H4', value: 'h4' },
  { title: 'H5', value: 'h5' },
  { title: 'H6', value: 'h6' },
  { title: 'Quote', value: 'blockquote' },
  { title: 'No style', value: 'no-style' },
]

export const blockTypeDecorators = [
  { title: 'Strong', value: 'strong' },
  { title: 'Emphasis', value: 'em' },
  { title: 'Code', value: 'code' },
  { title: 'Underline', value: 'underline' },
  { title: 'Strike', value: 'strike-through' },
  {
    title: 'Primary',
    value: 'primary',
    icon: PrimaryDecoratorIcon,
    component: PrimaryDecoratorComponent,
  },
]
