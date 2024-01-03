import bannerImagem1 from '../assets/consultaTelefone/paghome.png';
import bannerImagem2 from '../assets/consultaTelefone/pagserviço.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

  const BannerTelaInical = () => {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div className="">
          <img src={bannerImagem2} alt="Banner 1" />
        </div>
        <div>
          <img src={bannerImagem1} alt="Banner 2" />
        </div>

      </Carousel>
    );
  }
  
  export default BannerTelaInical;