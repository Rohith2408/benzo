import styles from "./Tokenomics.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section1/bg.png'
import image1 from '../images/Tokenomics/1.gif'
import image2 from '../images/Tokenomics/2.gif'
import image3 from '../images/Tokenomics/3.gif'
import image4 from '../images/Tokenomics/4.gif'
import image5 from '../images/memes/5.jpeg'
import title_image from '../images/Tokenomics/title.png'
import cloud1 from '../images/Section1/cloud1.png'
// import icon from '../images/Tokenomics/icon.png'
// import banner from '../images/banner.gif'

const Tokenomics=()=>{

    const images=useRef([image1,image2,image3,image4]).current;
    const data=useRef([
        {title:"69m",subTitle:"Token Supply",image:image1},
        {title:"0%",subTitle:"Token Distribution",image:image2},
        {title:"LP Burnt",subTitle:"Contract Renounced",image:image3},
        {title:"0%",subTitle:"Buy/Sell Tax",image:image4},
    ]).current
    const [bannerHeight,setBannerHeight]=useState(0)

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <img src={cloud1} className={styles.cloud1}/>
                <div className={styles.body}>
                    {/* <img className={styles.banner} src={banner}/> */}
                    {/* <p className={styles.title}>Tokenomics</p> */}
                    <img src={title_image} className={styles.title}/>
                    <div className={styles.imageswrapper}>
                        <div className={styles.imagewrapper}>
                            <div className={styles.text_wrapper}>
                                <p className={styles.image_title}>{data[0].title}</p>
                                <p className={styles.image_subtitle}>{data[0].subTitle}</p>
                            </div>
                            <img className={styles.image} src={data[0].image}/>
                        </div>
                        <div className={styles.imagewrapper}>
                            <div className={styles.text_wrapper}>
                                <p className={styles.image_title}>{data[1].title}</p>
                                <p className={styles.image_subtitle}>{data[1].subTitle}</p>
                            </div>
                            <img className={styles.image} src={data[1].image}/>
                        </div>
                        <div className={styles.imagewrapper}>
                            <div className={styles.text_wrapper}>
                                {/* <img className={styles.TD_icon} src={icon}/> */}
                                <p className={styles.image_subtitle}>{data[2].subTitle}</p>
                            </div>
                            <img className={styles.image} src={data[2].image}/>
                        </div>
                        <div className={styles.imagewrapper}>
                            <div className={styles.text_wrapper}>
                                <p className={styles.image_subtitle}>{data[3].title}</p>
                                <p className={styles.image_subtitle}>{data[3].subTitle}</p>
                            </div>
                            <img className={styles.image} src={data[3].image}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tokenomics