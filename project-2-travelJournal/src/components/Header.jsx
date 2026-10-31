import globeIcon from "../assets/globe.png"

export default function Header() {
    return (
        <header>
            <img src={ globeIcon } alt="globe icon" />
            <span>my travel journal.</span>
        </header>
    )
}