
import { Header } from './components/header/Header.jsx'
import { Main } from './components/main/Main.jsx'
import './App.scss'
import { PageTitle } from './components/pagetitle/pageTitle.jsx'
import { Name } from './components/nameProps/name.jsx'
import WaterFall from '../src/assets/images/waterfall.jpg'
import { Image } from './components/Image/Image.jsx'
import { ContentWrapper } from './components/ContentWrapper/ContentWrapper.jsx'
import { Home } from './pages/Home/Home.jsx';
import {Routes, Route} from 'react-router-dom';
import { About } from './pages/About/About.jsx'





function App() {

  return (
    <div>
        <Header></Header>
        <Main></Main>
        <PageTitle PageTitle= "Velkommen til min oste butik"></PageTitle>
        <Name Name="Robert"></Name>
        <Image file={WaterFall} alt='vandfald' />




      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
