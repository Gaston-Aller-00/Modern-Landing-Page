import Clients from "./components/Clients"
import Header from "./components/Header"
import  Hero  from "./components/Hero"
import Services from "./components/Services"
import Works from "./components/Works"

function App() {

  return (
    <>
      <div >
        <Header/>
        <Hero/>
        <Clients/> 
        <Works/>
        <Services/>
      </div>
      
    </>
  )
}

export default App
