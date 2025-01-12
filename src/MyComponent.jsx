import { useState, useEffect } from 'react'

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        addEventListener('resize', handleResize); // callback of handleResize will be called when window is resized
        console.log('Event Listener Added');
        return () => {
            window.removeEventListener('resize', handleResize); // callback of handleResize will be removed when component is unmounted
            console.log('Event Listener Removed');
        }

    }, []); // empty dependency array means this effect will only run once after the first render

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`; // document title will be updated with the width of the window
    }, [width, height]); // this effect will run whenever width or height changes

    

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