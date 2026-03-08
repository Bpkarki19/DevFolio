import Intro from "./components/intro/intro"
import Nav from "./components/intro/nav/nav"
import "./App.css"
import AboutMe from "./components/aboutMe/aboutMe"

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Intro />
        <AboutMe />
      </div>
    </>
  )
}

export default App
