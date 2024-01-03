import Header from "../components/Header";
import ImgPerfil from "../assets/aboutMe.jpg";
import Skill from '../components/Skills';
import Timeline from '../components/Timeline';
import { Helmet } from "react-helmet";
import { IconButton } from "@material-tailwind/react";
// import {
//     Card,
//     CardHeader,
//     CardFooter,
//     Typography,
//     Tooltip,
//   } from "@material-tailwind/react";


function aboutMe(){

    const clickDownload = () => {
        
        const pdfFilePath = 'CurriculoFlaviaPinheiro.pdf';
        
        
        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.download = 'currículo Flavia Pinheiro.pdf';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    

    return(
        < >

        <Helmet>
            <style>{`
            body {
                background: url('../assets/bg.jpg') center/cover no-repeat fixed;
                background-color: #120e16;
                color: #fff;
                opacity: 0.1; 
            }
        
           `}</style>
        </Helmet>
        <Header/>   
            <div className="grid grid-col gap-12 mr-10">
                <div className="grid grid-cols-2 gap-12">            
                    <div className="grid grid-cols-2 gap-12">
                        <img src={ImgPerfil} className="ml-36 mt-10 w-96 rounded  border-paleta-purple3 shadow-md shadow-paleta-purple1 ring-1 ring-paleta-purple2" alt="profile-picture" />
                    </div>

                    <div>
                    <h1 className="text-start text-2xl pt-20 pb-2 " style={{ fontFamily: 'Julius Sans One' }}>Sobre mim</h1>
                        <p className="mr-12 text-justify">
                        Desenvolvedora e acadêmica de análise e desenvolvimento de sistemas Venho me especializando diariamente para entregar o melhor resultado possível em meus trabalhos e projetos. Atualmente, busco ingressar efetivamente no mercado de trabalho, aplicando minhas habilidades para oferecer resultados excepcionais.
                        </p>
                        <div className="text-start pt-12">
                        <button onClick={clickDownload}
                        type="button"
                        className="justify-start px-4 py-2 bg-paleta-purple2 rounded p-1 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-paleta-purple1 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init>                    
                            <i className="fa-solid fa-file-arrow-down pr-3"></i>                      
                        Currículo
                        </button>
                        </div>
                        
                        <div className="text-start pt-12">
                        <a href="mailto:flavia.p_17@hotmail.com" target="_blank" rel="noopener noreferrer">
                            <IconButton className="rounded-full p-2 m-1 hover:shadow-[#B900F0]/80 focus:shadow-[#B900F0]/20 active:shadow-[#B900F0]">
                            <i className="fab fa-google text-xl p-2 " />
                            </IconButton>
                        </a>
                        <a href="https://www.linkedin.com/in/piinheiroflavia/" target="_blank" rel="noopener noreferrer">
                            <IconButton className="rounded-full p-2 m-1 hover:shadow-[#B900F0]/80 focus:shadow-[#B900F0]/20 active:shadow-[#B900F0]/60 ">
                            <i className="fab fa-linkedin text-xl p-2" />
                            </IconButton>
                        </a>
                        <a href="https://github.com/piinheiroflavia17" target="_blank" rel="noopener noreferrer">
                            <IconButton className="rounded-full p-2 m-1 hover:shadow-[#B900F0]/80 focus:shadow-[#B900F0]/20 active:shadow-[#B900F0]/10">
                            <i className="fab fa-github text-xl p-2" />
                            </IconButton>
                        </a>
                        <a href="https://www.instagram.com/piinheiroflavia/"  target="_blank" rel="noopener noreferrer">
                            <IconButton className="rounded-full  p-2 m-1 hover:shadow-[#B900F0]/80 focus:shadow-[#B900F0]/20 active:shadow-[#ea4335]/10">
                            <i className="fab fa-instagram text-xl p-2"></i>
                            </IconButton>
                        </a>
                        <a href="https://drive.google.com/file/d/1HAjmmLY2FWoajIl_LgmMzIr5c1PUACBG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <IconButton className="rounded-full  p-2 m-1 hover:shadow-[#B900F0]/80 focus:shadow-[#B900F0]/20 active:shadow-[#ea4335]/10">
                            <i className="fa-solid fa-file-pdf text-xl p-2"></i>
                            </IconButton>
                        </a>
                        </div>
                    </div>
                </div>
        
                <div className="grid grid-col gap-12">
                    <h1 className="justify-center text-2xl pt-20 pb-2 " style={{ fontFamily: 'Julius Sans One' }}>Experiência</h1>
                        <div>
                            <Timeline/>
                        </div>
                   
                        <div className= "mr-20  ml-24">
                            <Skill/>

                        </div>
                    
                </div>
            </div>
        </>
    )   
}

export default aboutMe