import styles from "./Buynow.module.css";
import image from '../images/buynow/buynow.gif'
import banner from '../images/banner.gif'

const Buynow=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <img className={styles.banner} src={banner}/>
            </div>
        </section>
    )
}

export default Buynow