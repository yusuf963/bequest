import {Meta} from '@storybook/react'
import {Button} from './Input'

const meta: Meta = {
  title: 'Button',
  component: Button
}

export default meta

export const Default = () => <Button variant="primary">click</Button>
export const secondary = () => <Button variant="secondary">secondary</Button>
