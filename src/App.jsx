import { BrowserRouter, Route, Routes } from "react-router-dom"
import PropertyDetails from "./pages/PropertyDetails"
import Home from "./pages/Home"
import Saved from "./pages/Saved"
import Admin from "./pages/Admin"

function App() {

  return (
    <BrowserRouter>
    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/propertydetails" element={<PropertyDetails />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App