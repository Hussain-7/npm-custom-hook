<!-- Readme for use custom hook -->

# useViewportHook

A custom viewport hook for React.

## 🚀 Getting Started

- `yarn add use-viewport-hook` or `npm install use-viewport-hook`

## Code Example

```
import {useViewport} from 'use-viewport-hook'

const { width, height } = useViewport()

    const App = () => {
    	return (
    		<div>
    			<h1>Current Width: {width}</h1>
    			<h1>Current Height: {height}</h1>
    		</div>
    	)
    }

```

## Output

![use-viewport-hook](./public/output.png)
