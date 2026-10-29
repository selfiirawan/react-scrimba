import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import reactLogo from './assets/react.svg'
// import App from './App.jsx'

function Header() {
  return (
    <header className='navbar'>
      <img src={reactLogo} className="logo" alt="react logo" />
      
      <nav>
        <ul className="nav-link">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main>
      <h1>Reason I am excited to learn React</h1>

      <ol>
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer if I know React</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2024 Ziroll development. All rights reserved.</small>
    </footer>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <Header />
    <MainContent />
    <Footer />

  </StrictMode>,
)
