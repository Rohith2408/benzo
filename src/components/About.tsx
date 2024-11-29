import styles from "./About.module.css";
import knife from '../images/about/knife.png'
import banner from '../images/banner.gif'
import title_image from '../images/about/title.png'

const About=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <img className={styles.banner} src={banner}/>
                <div className={styles.image_wrapper}><img src={knife} className={styles.image}/></div>
                <div className={styles.body_wrapper}>
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