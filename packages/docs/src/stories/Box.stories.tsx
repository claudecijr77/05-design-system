import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@claudeci-ignite-ui/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: ( <Text>Testando o elemento em tela</Text>),
    },
    argTypes: {
        children: {
            control: {
                disable: true
            },
        },
    },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
