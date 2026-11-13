import React from "react";
import padsData from "./pads"
import Pad from "./components/Pad";

export default function App() {
    const [ pads, setPads ] = React.useState(padsData);

    function toggle(id) {
        setPads(prevPads => prevPads.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
        }))
    }

    const buttonElement = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} />
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElement}
            </div>
        </main>
    )
}