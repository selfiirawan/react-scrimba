import chefIcon from "../assets/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefIcon} alt="chef icon" />
            <p>Chef Gemini</p>
        </header>
    )
}