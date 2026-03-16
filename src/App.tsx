import Intro from "./components/intro/intro"
import Nav from "./components/intro/nav/nav"
import "./App.css"
import AboutMe from "./components/aboutMe/aboutMe"
import { LanguageProvider } from "./context/LanguageContext"

function App() {
  return (
    <LanguageProvider>
      <div className="container">
        <Nav />
        <Intro />
        <AboutMe />
      </div>
    </LanguageProvider>
  )
}

export default App
