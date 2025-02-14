import React from 'react';
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming';

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();

  const dom = React.createElement(BaseContainer, {
      context: {
        ...context,
        parameters: {
          ...context.parameters,
          docs: {
            // This is where the magic happens.
            theme: dark ? themes.dark : themes.light
          },
        },
      }
  }, children)

  return dom;
}