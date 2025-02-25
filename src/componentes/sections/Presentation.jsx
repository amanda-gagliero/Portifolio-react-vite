import styles from './Presentation.module.css'
import Button from '../elements/Button'
import { useEffect, useState } from 'react'

function Presentation() {

    const [text, setText] = useState('');
    const toRotate = ['Amanda Gagliero!', 'Desenvolvedora Web Full-Stack!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 300;
    const [delta, setDelta] = useState(300);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1)
        }
    }

    return (
        <div id="Presentation" className={styles.presentation}>
            <h1>Olá, eu sou {text}</h1>
            <p>
                Mulheres extraordinárias abriram caminho para que chegássemos até aqui. <br>
                </br> Agora, somos os próximos elos dessa corrente. Meu desejo é não apenas dar continuidade a esse legado,<br>
                </br> mas também inspirar e ser inspirada, pois sei que o impacto de ver outras mulheres no topo pode transformar<br></br>
                nossa percepção do que é possível💜<br /><br />
                Atualmente, estou ampliando meus conhecimentos na área de tecnologia e realizando os seguintes cursos:<br/>
                <ul>
                    <li>Graduanda em Sistemas para Internet - FATEC.</li>
                    <li>Pós-graduanda em Engenharia de Software - USP Esalq.</li>
                    <li>Graduada em Gestão da Tecnologia da Informação - FATEC.</li>
                </ul>
            </p>
            <br />
            <Button link='https://github.com/amanda-gagliero' text='Saiba mais' />
        </div>
    )
}

export default Presentation