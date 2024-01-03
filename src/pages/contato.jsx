import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { IconButton } from "@material-tailwind/react";

function Contato() {
  return (
    <>
      <Helmet>
        <style>{`
          body {
            background-color: #0B1726;
            color: #fff;
          } 
        `}</style>
      </Helmet>

      <Header />



     
      <div className="col">
      
        <h1 className="justify-center text-2xl pt-20 pb-2 " style={{ fontFamily: 'Julius Sans One' }}>Entre em Contato</h1>

        <h5 className="pb-2">Se você tiver dúvidas ou apenas gostaria de dizer olá, fique à vontade para me enviar um email.</h5>

        <div className="text-center pt-4">
          <a href="mailto:flavia.p_17@hotmail.com" target="_blank" rel="noopener noreferrer">
            <IconButton className="rounded-full p-2 m-1 hover:shadow-[#B900F0]/80 focus:shadow-[#B900F0]/20 active:shadow-[#B900F0]">
              <i className="fab fa-google text-3xl p-2 " />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/piinheiroflavia/" target="_blank" rel="noopener noreferrer">
            <IconButton className="rounded-full p-2 m-1 hover:shadow-[#B900F0]/80 focus:shadow-[#B900F0]/20 active:shadow-[#B900F0]/60 ">
              <i className="fab fa-linkedin text-3xl p-2" />
            </IconButton>
          </a>
          <a href="https://github.com/piinheiroflavia17" target="_blank" rel="noopener noreferrer">
            <IconButton className="rounded-full p-2 m-1 hover:shadow-[#B900F0]/80 focus:shadow-[#B900F0]/20 active:shadow-[#B900F0]/10">
              <i className="fab fa-github text-3xl p-2" />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/piinheiroflavia/"  target="_blank" rel="noopener noreferrer">
            <IconButton className="rounded-full  p-2 m-1 hover:shadow-[#B900F0]/80 focus:shadow-[#B900F0]/20 active:shadow-[#ea4335]/10">
              <i className="fab fa-instagram text-3xl p-2"></i>
            </IconButton>
          </a>
          <a href="https://drive.google.com/file/d/1HAjmmLY2FWoajIl_LgmMzIr5c1PUACBG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <IconButton className="rounded-full  p-2 m-1 hover:shadow-[#B900F0]/80 focus:shadow-[#B900F0]/20 active:shadow-[#ea4335]/10">
              <i className="fa-solid fa-file-pdf text-3xl p-2"></i>
            </IconButton>
          </a>
        </div>
      </div>
     
    </>
  )
}

export default Contato;
