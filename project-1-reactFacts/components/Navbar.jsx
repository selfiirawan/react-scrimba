import reactLogo from "../src/assets/react.svg"

export default function Navbar() {
    return (
        <header className="header">
            <nav className="navbar">
                <img src={reactLogo} alt="react-logo" className="logo" />
                <span className="nav-title">ReactFacts</span>
            </nav>
        </header>
    )
}