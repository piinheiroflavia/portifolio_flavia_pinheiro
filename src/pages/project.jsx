import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { IconButton } from "@material-tailwind/react";
import { Carousel } from 'react-responsive-carousel';
//import bannerImagem1 from '../assets/consultaTelefone/paghome.png';
//import bannerImagem2 from '../assets/consultaTelefone/pagserviço.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import data1 from '../../projetos.json'
function project(){

    
    return(
        <>
        <Helmet>
            <style>{`
            body {
                background-color: #120e16;
                color: #fff;
            }           
            `}</style>
        </Helmet>
        <Header/>

      <div className=" col">
        <div>
          {/* <h1 className="justify-center text-2xl pt-10 pb-24 " style={{ fontFamily: 'Julius Sans One' }}>Projetos </h1> */}
        </div>
        <div  className="container-fluid">
            <div className="pb-8"> 
            {data1.map((item) => (
                <div  key={item.id}className="flex ">
                  <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  md:flex-row pb-14 justify-between" >
                    <div style={{width: '100%', borderRadius: '10px'}}>
                      <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}         
                      >
                        <div>
                          <img src={item.img_1} alt="Banner 1" />
                        </div>
                        <div>
                          <img src={item.img_2}  alt="Banner 2" />
                        </div>
                        <div>
                          <img src={item.img_3}  alt="Banner 3" />
                        </div>
                        <div>
                          <img src={item.img_4}  alt="Banner 4" />
                        </div>
                      </Carousel>
                    </div>
                    
                    <div className="d-flex flex-column col-12 col-md-10 col-lg-6 col-xl-6 col-xxl-7 ps-lg-3 mt-4-3 mt-xl-0 mx-4 start">
                      <div className="flex flex-col md:flex-row justify-between">
                        <h5 className="font-semibold text-start text-2xl text-neutral-900 dark:text-neutral-50 md:max-xl md:flex-row pb-5">
                          {item.Titulo}
                        </h5>
                        <a href={item.link} >
                        <IconButton className="rounded hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10 text-base">
                          <i className="fa-solid fa-code" />                 
                          </IconButton>  
                        </a>
                      </div>
                      <p className="text-start pb-6 text-neutral-500 dark:text-neutral-200">
                        {item.sinopse}
                      </p>
                      <a className="px-2 bt py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                      >{item.ferramentas.fer_1}</a>
                      <a className="px-2 bt py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                      >{item.ferramentas.fer_2}</a>
                      <a className="px-2 bt py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                      >{item.ferramentas.fer_3}</a>
                      <a className="px-2 bt py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                      >{item.ferramentas.fer_4}</a>
                      <a className="px-2 bt py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                      >{item.ferramentas.fer_5}</a>
                    </div>
                  </div>
                </div>
            ))}
            </div>
          </div>
          
        </div>
        
        </>
    )
    
}


export default project;