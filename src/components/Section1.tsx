import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section1/bg.png'
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import coingecko_icon from '../images/Section1/coingecko.png'
// import sunswap_icon from '../images/Section1/sunswap.jpeg'
import dextools_icon from '../images/Section1/dextools.png'
import copy_icon from '../images/Section1/copy.png'
import title_image from '../images/Section1/title.png'
import bull from '../images/Section1/bull.gif'
import prop from '../images/Section1/prop.png'
import { getAllWebsites } from "../firebaseconfig";

const Section1=()=>{

    const [socialIcons,setSocialIcons]= useState<{ src: string, link: string }[]>([
        // { src: telegram_icon, link: "" },
        // { src: twitter_icon, link: "" },
        // { src:dex_icon, link: "" },
        // { src: dextools_icon, link: "" },
        // { src:coingecko_icon, link: "" },
        // { src:insta_icon, link: "" }
    ])
    const [currentbg,setCurrentBg]=useState(0)
    const interval=useRef<any>()
    const [ca,setCa]=useState("TBA")
    const [loading,setLoading]=useState(true)
    

    useEffect(()=>{
        getAllWebsites().then((docs)=>{
            let current=docs.find((doc)=>doc.data.name=="wagyu")
            let socials=[];
            if(current)
            {
                setCa(current.data.ca?current.data.ca:"TBA")
                if(current.data.sociallinks?.dexscreener)
                {
                    socials.push({ src:dex_icon, link: current.data.sociallinks.dexscreener})
                }
                if(current.data.sociallinks?.telegram)
                {
                    socials.push({ src: telegram_icon, link: current.data.sociallinks.telegram})
                }
                if(current.data.sociallinks?.x)
                {
                    socials.push({ src: twitter_icon, link: current.data.sociallinks.x})
                }
                if(current.data.sociallinks?.dextools)
                {
                    socials.push({ src: dextools_icon, link:current.data.sociallinks.dextools})
                }
                setSocialIcons(socials);
            }
            setLoading(false);
        })
    },[])

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <img src={prop} className={styles.prop}/>
                <div className={styles.body}>
                    <div className={styles.left}>
                        <img src={title_image} className={styles.title}/>
                        <p className={styles.subtitle}>“Chopping losses, stacking profits!”</p>
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
                            <p className={styles.ca} >{loading?"loading":ca}</p>
                            <button className={styles.copyWrapper} onClick={()=>{alert("CA has been copied");navigator.clipboard.writeText(ca)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                        </div>
                    </div>
                    <div className={styles.right}><img src={bull} className={styles.bull}/></div>
                </div>
            </div>
        </section>
    )
}

export default Section1