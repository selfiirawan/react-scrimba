import React from "react";
import padsData from "./pads"

export default function App() {
    const [ pads, setPads ] = React.useState(padsData);

    const buttonElement = pads.map(pad => (
        <button key={pad.id}></button>
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElement}
            </div>
        </main>
    )
}