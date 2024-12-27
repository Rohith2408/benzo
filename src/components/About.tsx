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
                {/* <img src={frame} style={{height:"100%",width:"auto",objectFit:"contain",position:"absolute",left:0}}/>
                <img src={frame} style={{height:"100%",width:"auto",objectFit:"contain",position:"absolute",right:0}}/>
                <img src={frame2} style={{width:"100%",height:"auto",objectFit:"contain",position:"absolute",top:0}}/>
                <img src={frame2} style={{width:"100%",height:"auto",objectFit:"contain",position:"absolute",bottom:0}}/> */}
                {/* <img className={styles.banner} src={banner}/> */}
                <div className={styles.image_wrapper}><img src={knife} className={styles.image}/></div>
                <div className={styles.body_wrapper} style={{zIndex:1}}>
                    <img src={title_image} className={styles.title}/>
                    <p className={styles.text}>
                    Welcome to 2025: Year of the Snake, where crypto meets slithery memes! 🐍💸 Dive into the hilarious side of blockchain with bite-sized laughs, venomous wit, and coiled-up commentary on the wild world of cryptocurrency. Whether you're a crypto connoisseur or just along for the ride, we've got the perfect mix of fangs and fun to keep you entertained.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About