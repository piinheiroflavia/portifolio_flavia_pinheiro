import { Helmet } from "react-helmet";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import data1 from '../../projetos.json'



function Card() {
  return (
    <>
      <Helmet>
        <style>{`
          #root {
            display: flex;
            justify-content: flex-start;
          }
        `}</style>
      </Helmet>

      
        <div  className="container-fluid">
          <div className="pb-8 d-flex flex-column align-items-center align-items-lg-start justify-content-center flex-lg-row"> 

           {data1.map((item) => (
              <div  key={item.id}className="flex justify-start">
                <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
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
                  </Carousel>
                  <div className="d-flex flex-column justify-content-between col-12 col-md-10 col-lg-6 col-xl-6 col-xxl-7 ps-lg-3 mt-3 mt-xl-0">
                    <h5 className="font-semibold text-neutral-900 dark:text-neutral-50 md:max-xl md:flex-row">
                      {item.Titulo}
                    </h5>
                    <p className="text-base text-neutral-500 dark:text-neutral-200">
                      {item.sinopse}
                    </p>
                  
                  </div>
                </div>
              </div>
          ))}
          </div>
        </div>
    </>
  );
}

export default Card;
