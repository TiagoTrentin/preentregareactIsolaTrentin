import { CartWidget } from "./components/CartWidget"
import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Automart" />
    </>
  )
}
