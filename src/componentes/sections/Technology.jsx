import styles from "./Technology.module.css"
import javaScript from '../../Image/javaScript.svg'
import html from '../../Image/html.svg'
import css from '../../Image/css.svg'
import react from '../../Image/react.svg'
import typeScript from '../../Image/typeScript.svg'

function Technology() {
    return (
        <div id='Technology'>

            <h1 className={styles.title}>Tecnologias</h1>

            <div className={styles.tech}>
                <p>Tecnologias nas quais estou me aprofundando:</p>
                <div>
                    <img src={javaScript}/>
                    <img src={html}/>
                    <img src={css}/>
                    <img src={react}/>
                    <img src={typeScript}/>
                </div>
            </div>
        </div>
        
    )
}

export default Technology