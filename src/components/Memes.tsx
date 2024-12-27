import styles from "./Memes.module.css";
import { useEffect, useRef, useState } from "react";
import image1 from '../images/memes/1.png'
import image2 from '../images/memes/2.png'
import image3 from '../images/memes/3.png'
import image4 from '../images/memes/4.png'
import image5 from '../images/memes/5.png'
import banner from '../images/banner.gif'
import title_image from '../images/memes/title.png'
import frame from '../images/Section1/frame.png'
import frame2 from '../images/Section1/frame_horizontal.png'

const Memes=()=>{

    const images=useRef([image1,image2,image3,image4,image5]).current;
    const [bannerHeight,setBannerHeight]=useState(0)

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                {/* <img src={frame} style={{height:"100%",width:"auto",objectFit:"contain",position:"absolute",left:0}}/>
                <img src={frame} style={{height:"100%",width:"auto",objectFit:"contain",position:"absolute",right:0}}/>
                <img src={frame2} style={{width:"100%",height:"auto",objectFit:"contain",position:"absolute",top:0}}/>
                <img src={frame2} style={{width:"100%",height:"auto",objectFit:"contain",position:"absolute",bottom:0}}/> */}
                <div className={styles.body}>
                    {/* <img className={styles.banner} src={banner}/> */}
                    <img src={title_image} className={styles.title}/>
                    {/* <p className={styles.title}>Memes</p> */}
                    <div className={styles.imageswrapper}>
                    {
                        images.map((img)=>
                        <img src={img} className={styles.image}></img>
                        )
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Memes