import styles from "./Memes.module.css";
import { useEffect, useRef, useState } from "react";
import image1 from '../images/memes/1.png'
import image2 from '../images/memes/2.png'
import image3 from '../images/memes/3.png'
import image4 from '../images/memes/4.png'
import image5 from '../images/memes/5.png'
import image6 from '../images/memes/6.png'
import image7 from '../images/memes/7.png'
import image8 from '../images/memes/8.png'
import image9 from '../images/memes/9.png'
import banner from '../images/banner.gif'
import title_image from '../images/memes/title.png'
import frame from '../images/Section1/frame.png'
import frame2 from '../images/Section1/frame_horizontal.png'
import bg from '../images/Section1/bg.png'
import cloud1 from '../images/Section1/cloud1.png'
import cloud2 from '../images/Section1/cloud2.png'

const Memes=()=>{

    const images=useRef([image1,image2,image3,image4,image5,image6,image7,image8,image9]).current;
    const [bannerHeight,setBannerHeight]=useState(0)

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <img src={bg} className={styles.bg}/>
                <img src={cloud1} className={styles.cloud1}/>
                <img src={cloud2} className={styles.cloud2}/>
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