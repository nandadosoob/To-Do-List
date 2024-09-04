import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import styles from "./App.module.css"

export function App() {
  return (
    <div className={styles.App}>


      <Header />
      <Main>
      </Main>
      <Footer autor="Fernanda" />

    </div>

  )
}


