import React from "react";
import padsData from "./pads"
import Pad from "./components/Pad";

export default function App() {
    const [ pads, setPads ] = React.useState(padsData);

    const buttonElement = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} />
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElement}
            </div>
        </main>
    )
}