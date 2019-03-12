import { configure, addDecorator } from '@storybook/react'
import { configureViewport } from '@storybook/addon-viewport'
import { withOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'
import { withPropsTable } from 'storybook-addon-react-docgen'
import { asset, ja } from '../src/app/assets'

function loadStories() {
  asset.setContents(ja)
  const req = require.context('../src', true, /\.story\.tsx?$/)
  req.keys().forEach(story => req(story))
}

addDecorator(withKnobs({ escapeHTML: false }))

addDecorator(
  withOptions({
    addonPanelInRight: true
  })
)

addDecorator(withPropsTable({}))

addDecorator(withPropsTable({}))

configure(loadStories, module)
configureViewport({
  defaultViewport: 'iphone6p'
})
