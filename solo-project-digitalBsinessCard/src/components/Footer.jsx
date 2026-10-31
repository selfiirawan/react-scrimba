import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import github from "../assets/github.svg"

export default function Footer() {
    return (
        <footer>
            <img src={ twitter } alt="twitter" />
            <img src={ facebook } alt="facebook" />
            <img src={ instagram } alt="instagram" />
            <img src={ github } alt="github" />
        </footer>
    )
}