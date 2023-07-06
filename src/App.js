import { BrowserRouter, Routes, Route} from "react-router-dom"

import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { NavBar } from "./components/NavBar"

import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"
        element={<ItemListContainer greeting="Productos" />}>
        </Route>
        <Route path="/category/:id"
        element={<ItemListContainer greeting="Productos" />}>
        </Route>
        <Route path="/item/:id"
        element={<ItemDetailContainer greeting="Productos" />}>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}
