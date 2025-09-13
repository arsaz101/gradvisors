import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ParallaxProvider } from 'react-scroll-parallax'
import DevErrorBoundary from './DevErrorBoundary'

ReactDOM.render(
    <React.StrictMode>
        <DevErrorBoundary>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </DevErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
)
