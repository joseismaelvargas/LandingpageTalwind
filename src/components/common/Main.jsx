import img from "../../images/client-databiz.svg"
import audipclient from "../../images/client-audiophile.svg"
import milog from "../../images/client-meet.svg"
import maker from "../../images/client-maker.svg"
import primeraimg from "../../images/image-hero-mobile.png"
import segundaimg from "../../images/image-hero-desktop.png"
import "./main.css"


export const Main=()=>{
    return(
        <>
        <main className="sm:row ">
             <section >
                <div className="seccion">
                <h2>Make remote Work</h2>
                <p>
  Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.</p>
             <button className="btn-learn">Lear more</button>
             <div className=" logos-container">
                <img src={img} alt="data" />
                <img src={audipclient} alt="log" />
                <img src={maker} alt="marker" />
                <img src={milog} alt="marker" />
             </div>
             </div>
             </section>
             <picture className="imagenes-container">
              <source  srcSet={primeraimg} media="(max-width:639px)" />
              <source  srcSet={segundaimg} media="(mim-width:640px)" />
              <img src={primeraimg} alt="ss" className="img-main" />
             </picture>
        </main>
       
        </>
    )
}