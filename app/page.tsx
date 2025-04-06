import Body from "./composants/body"
import Body1 from "./composants/body1"
import Footer from "./composants/footer"
import Header from "./composants/header"
import IntroSection from "./composants/introsection"
export default function Maquette(){
  return(
    <div>
      <Header/>
      <IntroSection/>
      <Body1/>
      <Body/>
      <Footer/>
    </div>
  )
} 