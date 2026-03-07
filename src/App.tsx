import Intro from "./components/intro/intro"
import Nav from "./components/intro/nav/nav"
import "./App.css"

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Intro />
      </div>
    </>
  )
}

export default App
