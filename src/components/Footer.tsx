import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import dextools_icon from '../images/Section1/dextools.png'
import copy_icon from '../images/Section1/copy.png'
import horns from '../images/footer/horns.png'
import { getAllWebsites } from "../firebaseconfig";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {

  // const social=useRef([
  //   {title:"TikTok",url:""},
  //   {title:"Memes",url:""},
  //   {title:"Twitter",url:""},
  //   {title:"Telegram",url:""},
  //   {title:"Instagram",url:""}
  // ]).current
  // const contractAddress=useRef("").current
  // const buyLink=useRef("").current

  const [socialIcons,setSocialIcons]= useState<{ src: string, link: string }[]>([
    // { src: telegram_icon, link: "" },
    // { src: twitter_icon, link: "" },
    // { src:dex_icon, link: "" },
    // { src: dextools_icon, link: "" },
    // { src:coingecko_icon, link: "" },
    // { src:insta_icon, link: "" }
])
const [buylink,setBuylink]=useState("");
const [ca,setCa]=useState("TBA");
const [loading,setLoading]=useState(true)

  const onHomeButtonClick = useCallback(() => {
    document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

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
            setBuylink(current.data.buylink?current.data.buylink:"")
        }
        setLoading(false);
    })
},[])

  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="footer" data-scroll-to="footer">
      <div className={[styles.subwrapper, className].join(" ")}>
        <img className={styles.prop}/>
        <img className={styles.horns} src={horns}></img>
        <div className={[styles.line, className].join(" ")}></div>
        <div className={[styles.body, className].join(" ")}>
          <div className={[styles.description2wrapper, className].join(" ")}>
            <div className={[styles.buymarv, className].join(" ")}><a style={{color:"#6F0000",textDecoration:"none"}} href={buylink} target="_blank">Buy $WAGYU</a></div>
            <div className={[styles.contractaddwrapper, className].join(" ")}>
              <p className={[styles.contractadd, className].join(" ")}>CA: {!loading?ca:"loading"}</p>
              <button onClick={()=>{alert("Contract Address Copied");navigator.clipboard.writeText(ca)}} className={[styles.copyiconwrapper, className].join(" ")}>
                <img style={{height:"auto",width:"100%"}} src={copy_icon}></img>
              </button>
            </div>
          </div>
          <div className={[styles.description3wrapper, className].join(" ")}>
          </div>
        </div>
      </div>
    </section>     
  );
};

export default Footer;


