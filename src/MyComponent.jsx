import { useState, useEffect } from 'react'

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    addEventListener('resize', handleResize); // callback of handleResize will be called when window is resized
    console.log('Event Listener Added');

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    )
}

export default MyComponent