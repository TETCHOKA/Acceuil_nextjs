import Commencer from "./components/home/commencer";
import Hero from "./components/home/hero";
import Services from "./components/home/service";
import Solutions from "./components/home/solution";
import Statistiques from "./components/home/statistique";
import Temoignages from "./components/home/temoignages";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";

export default function Acceuil(){


  return(

    <>
        <Header/>
        <Hero/>
        <Solutions/>
        <Services/>
        <Statistiques/>
        <Temoignages/>
        <Commencer/>
        <Footer/>
    </>
  )
}
