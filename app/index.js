import React from 'react'
import ReactDOM from 'react-dom'

// Import the app boilerplate
import { Root, configureStore } from 'react-todo'

// Create the store
const store = configureStore({
  info: {
    contact_url: 'https://github.com/vutran/electron-webpack-boilerplate/issues',
    contact_label: 'Post on GitHub'
  }
})

// Render to the #app element
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
)
