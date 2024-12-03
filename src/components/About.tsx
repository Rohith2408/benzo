import styles from "./About.module.css";
import knife from '../images/about/knife.png'
import banner from '../images/banner.gif'
import title_image from '../images/about/title.png'
import frame from '../images/Section1/frame.png'
import frame2 from '../images/Section1/frame_horizontal.png'

const About=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <img src={frame} style={{height:"100%",width:"auto",objectFit:"contain",position:"absolute",left:0}}/>
                <img src={frame} style={{height:"100%",width:"auto",objectFit:"contain",position:"absolute",right:0}}/>
                <img src={frame2} style={{width:"100%",height:"auto",objectFit:"contain",position:"absolute",top:0}}/>
                <img src={frame2} style={{width:"100%",height:"auto",objectFit:"contain",position:"absolute",bottom:0}}/>
                <img className={styles.banner} src={banner}/>
                <div className={styles.image_wrapper}><img src={knife} className={styles.image}/></div>
                <div className={styles.body_wrapper} style={{zIndex:1}}>
                    <img src={title_image} className={styles.title}/>
                    <p className={styles.text}>
                    A relentless, bull-headed crypto warrior slicing through market volatility with precision. Draped in a samurai-style robe and gripping a bloodied cleaver, he symbolizes the unstoppable force of bullish momentum. Known for his tagline, "Cutting losses, carving gains," this meme character embodies the spirit of crypto traders battling the bears and thriving in the chaos of the blockchain battlefield
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About