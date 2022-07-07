import './App.css'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import Image from './Image'
import Text from './Text'

function App() {

  return (
    <>
      <Header></Header>
      <div class="page-content">
        <div class="intro">
          <Image class="profile-pic" src="./imgs/shaypessanha.jpeg"></Image>
          <Text class="intro-text" Text="Olá eu sou a Shay. Sou uma aluna da {reprograma} que a cada aula me sinto como os personagens do The Office no Episódio do incêndio. Coisas que aprendi:"></Text>
        </div>
        <div class="diario">
          <Card Title="HTML/CSS" Image="./imgs/handsup.gif" Text="HTML e CSS foram muito divertidos e faceis de aprender"></Card>
          <Card Title="Git" Image="./imgs/fineloveyou.gif" Text="Foi desesperador no começo, mas no final deu tudo certo"></Card>
          <Card Title="JavaScript" Image="./imgs/tried_and_failed.gif" Text="Estou até agora tentando entender..."></Card>
          <Card Title="React" Image="./imgs/clapping1.gif" Text="O que dizer do React que mal conheço, mas já considero pacas"></Card>
          <Card Title="Bônus: Meus entregáveis da semana" Image="./imgs/shooting_cringe.gif" Text="É tiro pra todo lado: uma hora dá certo"></Card>
        </div>
      </div>
      <Footer></Footer>
    </>

  )
}

export default App
