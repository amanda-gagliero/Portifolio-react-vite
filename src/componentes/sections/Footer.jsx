import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa"

function Footer() {
    return(
        <container id="Footer" className={styles.footer}>
            <div>
                <ul>
                    <li>Meu Contato:<br/>19-989379577</li>
                    <li>Email:<br/>amandagagliero@gmail.com</li>
                </ul>
            </div>
            <aside>
                <ul>
                    <li><a href='https://github.com/amanda-gagliero' target='_blank'><FaGithub size={30}/></a></li>
                    <li><a href='https://www.linkedin.com/in/amanda-gagliero/' target='_blank'><FaLinkedin size={30}/></a></li>
                    <li><a href='https://www.figma.com/design/NgNr3E6JFCJJ9ZdjFuOJxr/Untitled?node-id=0-1&t=jqFZ8KmpISjoc3hk-1' target='_blank'><FaFigma size={30}/></a></li>
                </ul>
            </aside>
        </container>

    )
}

export default Footer