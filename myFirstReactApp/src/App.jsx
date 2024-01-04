import { Header } from './components/header/Header.jsx'
import { Main } from './components/main/Main.jsx'
import './App.scss'
import { PageTitle } from './components/pagetitle/pageTitle.jsx'
import { Name } from './components/nameProps/name.jsx'

function App() {

  return (
    <div>
        <Header></Header>
        <Main></Main>
        <PageTitle PageTitle= "Velkommen til min oste butik"></PageTitle>
        <Name Name="Robert"></Name>
    </div>
  )
}

export default App
