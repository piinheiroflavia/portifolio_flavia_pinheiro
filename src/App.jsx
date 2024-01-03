import './App.css'
import Header from "./components/Header";
import { IconButton } from "@material-tailwind/react";
import { Helmet } from "react-helmet";

function App() {

  return (
    <>
      <Helmet>
            <style>{`
            body {
              animation: gradient 10s ease infinite ;
              background: linear-gradient(90deg,#79b3f4,#8aa7ec,#9a9ae1, #ba83ca,#d16ba5);
              background-size: 400% 400%;
              color: #fff;
              height: 100%;
            }
            @keyframes gradient{
              0% {
                 background-position: 0% 50%;
                }
                50% {
              background-position: 100% 50%;
                }
                100% {
                  background-position: 50% 0%;
                }
            }
            `}</style>
        </Helmet>
        <Header/>

        <div  style={{ display: "flex", alignItems: "center", marginTop:'100px', justifyContent:'space-evenly' }}>
            <div style={{ flex: '1' }}>
              <h1 className='text-6xl' style={{display: "flex", alignItems: "start",justifyContent: 'start', fontFamily: 'Julius Sans One'}}>Flavia Pinheiro</h1>
              <span className='text-xl p-1 pb-3 font-semibold' style={{display: "flex", alignItems: "start",justifyContent: 'start' }}>Desenvolvedora Web</span>
                <p className='text-justify p-1  pb-10 text-lg'>
                Desenvolvedora e acadêmica de análise e desenvolvimento de sistemas Venho me especializando diariamente para entregar o melhor resultado possível em meus trabalhos e projetos. Atualmente, busco ingressar efetivamente no mercado de trabalho, aplicando minhas habilidades para oferecer resultados excepcionais.
                </p>
                <div className="flex gap-4 p-1 ">
                  <IconButton className="rounded hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                    <i className="fab fa-google text-lg" />
                  </IconButton>                
                  <IconButton className="rounded hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                    <i className="fab fa-linkedin text-lg" />
                  </IconButton>
                  <IconButton className="rounded hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                    <i className="fab fa-github text-lg" />
                  </IconButton>
                </div>
                
            </div>
            {/* Coluna Direita (Texto) */}
            <div style={{ flex: '1' }}> 
            </div>
        </div>
    </>
  )
}

export default App
