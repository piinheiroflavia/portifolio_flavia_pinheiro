import { Helmet } from "react-helmet";
import dotNet from '../assets/skinHards/.net.png'
import cssImage from '../assets/skinHards/css.png'
import figmaImage from '../assets/skinHards/figma.png';
import gitImage from '../assets/skinHards/git.png';
import htmlImage from '../assets/skinHards/html.png';
import jsImage from '../assets/skinHards/js.png';
import mysqlImage from '../assets/skinHards/mysql.png';
import reactImage from '../assets/skinHards/React-icon.png';
import sqlServeImage from '../assets/skinHards/sqlserver.png';
import tailwindImage from '../assets/skinHards/tailwind.png';
import viteJsImage from '../assets/skinHards/Vitejs-logo.png';
import nodeJsImage from '../assets/skinHards/nodejs.png';

function Carousel() {
    return (
        <>
            <Helmet>
                <style>{`
                :root {
                    --animation-speed: 30s;
                }
                
                /* Animation */
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-250px * 7)); 
                    }
                }
                .slider {
                    height: 100px;
                    margin: 20px;
                    overflow: hidden;
                    position: relative;
                    width: auto;
                
                    &::before,
                    &::after {
                        content: "";
                        height: 100px;
                        position: absolute;
                        width: 200px;
                        z-index: 2;
                    }
                
                    &::before {
                        left: 0;
                        top: 0;
                   
                    }
                
                    &::after {
                        right: 0;
                        top: 0;
                      
                        transform: rotateZ(180deg);
                    }
                
                    .slide-track {
                        animation: scroll var(--animation-speed) linear infinite;
                        display: flex;
                       // width: calc(250px * 14); 
                    }
                
                    .slide {
                        margin: 20px 0px;
                        height: 100px;
                        width: 150px;
                    }
                }
                `}</style>
            </Helmet>
            <div className="slider">
        <div className="slide-track">
            <div className="slide">
                <img src={cssImage} height="70" width="70" alt="" />
            </div>
            <div className="slide">
                <img src={figmaImage} height="50" width="50" alt="" />
            </div>
            <div className="slide">
                <img src={gitImage} height="50" width="50" alt="" />
            </div>
            <div className="slide">
                <img src={htmlImage} height="50" width="60" alt="" />
            </div>
            <div className="slide">
                <img src={jsImage} height="50" width="50" alt="" />
            </div>
            <div className="slide">
                <img src={mysqlImage} height="60" width="60" alt="" />
            </div>
            <div className="slide">
                <img src={reactImage} height="60" width="70" alt="" />
            </div>
            <div className="slide">
                <img src={sqlServeImage} height="60" width="70" alt="" />
            </div>
            <div className="slide">
                <img src={tailwindImage} height="70" width="70" alt="" />
            </div>
            <div className="slide">
                <img src={viteJsImage} height="50" width="60" alt="" />
            </div>
            <div className="slide">
                <img src={nodeJsImage} height="90" width="90" alt="" />
            </div>
            <div className="slide">
                <img src={dotNet} height="40" width="60" alt="" />
            </div>
           
        </div>
    </div>
        </>
    );
}

export default Carousel;
