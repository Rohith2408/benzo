import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import dextools_icon from '../images/Section1/dextools.png'
import copy_icon from '../images/Section1/copy.png'
import horns from '../images/footer/horns.png'
import bg from '../images/footer/bg.png'
import { getAllWebsites } from "../firebaseconfig";
import cloud2 from '../images/Section1/cloud1.png'
import beno_gif from '../images/$BENO-1.gif'

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {

  const social=useRef([
    {title:"TikTok",url:""},
    {title:"Memes",url:""},
    {title:"Twitter",url:""},
    {title:"Telegram",url:""},
    {title:"Instagram",url:""}
  ]).current
  const [ca,setCa]=useState("TBA")
  const [buyLink,setBuyLink]=useState("")
  const [socialIcons,setSocialIcons]=useState([
    { src: telegram_icon, link: "" },
    { src: twitter_icon, link: "" },
    { src:dex_icon, link: "" },
    { src: dextools_icon, link: "" }
]);

  const onHomeButtonClick = useCallback(() => {
    document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(()=>{
    getAllWebsites().then((doc)=>{
        let currentWebsite=doc.find((website)=>website.data.name=="beno")
        console.log(currentWebsite);
        if(currentWebsite)
        {
            setSocialIcons([
                { src: telegram_icon, link: currentWebsite?.data?.sociallinks?.telegram },
                { src: twitter_icon, link: currentWebsite?.data?.sociallinks?.x},
                { src:dex_icon, link: currentWebsite?.data?.sociallinks?.dexscreener},
                { src: dextools_icon, link: currentWebsite?.data?.sociallinks?.dextools},
                // { src:coingecko_icon, link: "" },
            ]);
            setCa(currentWebsite.data.ca);
            setBuyLink(currentWebsite.data.buylink)
        }
    })
},[])

  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="footer" data-scroll-to="footer">
      <div className={[styles.subwrapper, className].join(" ")}>
      <img src={bg} style={{width:"100%",height:"auto",objectFit:"contain",position:"absolute",top:0}}/>
        <img src={cloud2} className={styles.cloud2}/>
        <img src={beno_gif} className={styles.beno}/>
        <div className={[styles.line, className].join(" ")}></div>
        <div className={[styles.body, className].join(" ")} style={{zIndex:1}}>
          <div className={[styles.description2wrapper, className].join(" ")}>
            <div className={[styles.contractaddwrapper, className].join(" ")}>
              <p className={[styles.contractadd, className].join(" ")}>CA: {ca.substring(0,30)+"..."}</p>
              <button onClick={()=>{alert("CA has been copied");navigator.clipboard.writeText(ca)}} className={[styles.copyiconwrapper, className].join(" ")}>
                <img style={{height:"auto",width:"100%"}} src={copy_icon}></img>
              </button>
            </div>
          </div>
          <div className={styles.socialWrapper}>
          {
            socialIcons.map((icon) => (
              <a className={styles.socialicons_wrapper} key={icon.src} href={icon.link} target="_blank" rel="noopener noreferrer" >
                <img
                  className={styles.socialicons}
                  loading="lazy"
                  alt=""
                  src={icon.src}
                />
              </a>
          ))}
          </div>
          <div className={[styles.description3wrapper, className].join(" ")}>
          </div>
        </div>
      </div>
    </section>     
  );
};

export default Footer;


