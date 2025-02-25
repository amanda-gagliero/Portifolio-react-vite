import TimeLine from '../elements/TimeLine';
import styles from './AboutMe.module.css';

function AboutMe() {
    return (
        <div id="AboutMe" className={styles.aboutMe}>
            <h1 className={styles.title}>Sobre mim</h1>
            <img src="/minhaFoto.jpg" alt="Minha Foto" className={styles.profileImage} />

            <TimeLine />
        </div>
    );
}

export default AboutMe;