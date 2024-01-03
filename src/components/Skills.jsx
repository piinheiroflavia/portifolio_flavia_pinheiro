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
import wordpressImage from '../assets/skinHards/wordpress.png';

function Skills(){

    return(
        <>

        <div className="grid grid-cols-3 gap-12">
             
            <div className="grid grid-col gap-12">        
                <h1 className="justify-center text-2xl pt-20 pb-2 " style={{ fontFamily: 'Julius Sans One' }}>Frontend</h1>
                
            </div>
            <div className="grid grid-col gap-12">        
                <h1 className="justify-center text-2xl pt-20 pb-2 " style={{ fontFamily: 'Julius Sans One' }}>Backend</h1>
                
            </div>


            <div className="grid grid-col gap-12">        
                <h1 className="justify-center text-2xl pt-20 pb-2 " style={{ fontFamily: 'Julius Sans One' }}>Ferramentas</h1>                         
            </div>           

        </div>
        
        <div className='grid grid-cols-3 gap-12 bg'> 
            <div className="grid grid-cols-3 gap-4 pt-10 ">   
                <div><img src={cssImage} height="40" width="50" alt="" /></div>
                <div> <img src={htmlImage} height="50" width="50" alt="" /></div>
                <div><img src={jsImage} height="45" width="45" alt="" /></div>                           
            </div> 

            <div className="grid grid-cols-3 gap-4 pt-10">  
                <div><img src={nodeJsImage} height="70" width="90" alt="" /></div> 
                <div><img src={dotNet} height="40" width="60" alt="" /></div>     
                <div><img src={mysqlImage} height="60" width="60" alt="" /></div>                                                
            </div>

            <div className="grid grid-cols-3 gap-4 pt-10">  
                <div><img src={wordpressImage} height="80" width="90" alt="" /></div> 
                <div><img src={figmaImage} height="40" width="50" alt="" /></div>
                <div><img src={gitImage} height="50" width="50" alt="" /></div>
            </div>
        </div>

        <div className='grid grid-cols-3 gap-12'> 
            <div className="grid grid-cols-3 gap-4 pt-10 ">   
                <div><img src={reactImage} height="40" width="50" alt="" /></div>
                <div><img src={tailwindImage} height="50" width="60" alt="" /></div>
                <div><img src={viteJsImage} height="50" width="50" alt="" /></div>          
            </div> 

            <div className="grid grid-cols-3 gap-4 pt-10">   
                <div><img src={sqlServeImage} height="60" width="70" alt="" /></div>     
                <div><img src={mysqlImage} height="60" width="60" alt="" /></div>                                                
            </div>

         
        </div>
        
        </>

    )


}


export default Skills

