import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import coingecko_icon from '../images/Section1/coingecko.png'
import dextools_icon from '../images/Section1/dextools.png'
import copy_icon from '../images/Section1/copy.png'
import title_image from '../images/Section1/title.png'
import snake from '../images/Section1/snake.png'
import prop from '../images/Section1/prop.png'
import bg from '../images/Section1/bg.png'
import frame from '../images/Section1/frame.png'
import frame2 from '../images/Section1/frame_horizontal.png'
import { getAllWebsites } from "../firebaseconfig";
import cloud1 from '../images/Section1/cloud1.png'
import cloud2 from '../images/Section1/cloud2.png'

const Section1=()=>{

    const [socialIcons,setSocialIcons]=useState([
        { src: telegram_icon, link: "" },
        { src: twitter_icon, link: "" },
        { src:dex_icon, link: "" },
        { src: dextools_icon, link: "" },
        { src:coingecko_icon, link: "" },
    ]);
    const [ca,setCa]=useState("")

    useEffect(()=>{
        getAllWebsites().then((doc)=>{
            let currentWebsite=doc.find((website)=>website.data.name=="2025")
            console.log(currentWebsite);
            if(currentWebsite)
            {
                setSocialIcons([
                    { src: telegram_icon, link: currentWebsite.data.sociallinks.telegram },
                    { src: twitter_icon, link: currentWebsite.data.sociallinks.x},
                    { src:dex_icon, link: currentWebsite.data.sociallinks.dexscreener},
                    { src: dextools_icon, link: currentWebsite.data.sociallinks.dextools},
                    // { src:coingecko_icon, link: "" },
                ]);
                setCa(currentWebsite.data.ca);
            }
        })
    },[])

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <img src={cloud1} className={styles.cloud1}/>
                <img src={cloud2} className={styles.cloud2}/>
                <img src={bg} className={styles.bg}/>
                {/* <img src={frame} style={{height:"100%",width:"auto",objectFit:"contain",position:"absolute",left:0}}/>
                <img src={frame} style={{height:"100%",width:"auto",objectFit:"contain",position:"absolute",right:0}}/>
                <img src={frame2} style={{width:"100%",height:"auto",objectFit:"contain",position:"absolute",top:0}}/> */}
                <div className={styles.body}>
                    <div className={styles.left}>
                        <img src={title_image} className={styles.title}/>
                        <p className={styles.subtitle}>“2025-Year of the Snake!”</p>
                        <div className={styles.socialWrapper}>
                        {
                            socialIcons.map((icon) => (
                                <a key={icon.src} href={icon.link} target="_blank" rel="noopener noreferrer" >
                                    <img
                                        className={styles.socialicons}
                                        loading="lazy"
                                        alt=""
                                        src={icon.src}
                                    />
                                </a>
                        ))}
                        </div>
                        <div className={styles.cawrapper}>
                            <p className={styles.caHeading}>CA</p>
                            <p className={styles.ca} >{ca?ca:"TBA"}</p>
                            <button className={styles.copyWrapper} onClick={()=>{alert("CA has been copied");navigator.clipboard.writeText(ca)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                        </div>
                    </div>
                    <div className={styles.right}><img src={snake} className={styles.bull}/></div>
                </div>
            </div>
        </section>
    )
}

export default Section1