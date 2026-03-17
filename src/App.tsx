import Intro from "./components/intro/intro"
import Nav from "./components/intro/nav/nav"
import "./App.css"
import AboutMe from "./components/aboutMe/aboutMe"
import { LanguageProvider } from "./context/LanguageContext"
import FeaturedProject from "./components/FeaturedProjects/featuredProject"

function App() {
  return (
    <LanguageProvider>
      <div className="container">
        <Nav />
        <Intro />
        <AboutMe />
        <FeaturedProject />
      </div>
    </LanguageProvider>
  )
}

export default App
