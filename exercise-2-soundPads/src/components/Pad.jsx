import React from "react"

export default function Pad(props) {

    const [on, setOn] = React.useState(props.on)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    const styles = {
        backgroundColor: props.color
    }

    return (
        <button 
            style={styles}
            className={on ? "on" : ""}
            onClick={toggle}
        >
            
        </button>
    )
}