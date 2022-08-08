import Navbar from "./Navbar"
import Home from "./pages/Home"
import Todo from "./pages/Todo"
import Weather from "./pages/Weather"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </>
  )
}

export default App
