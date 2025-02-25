import styles from './TimeLine.module.css'

function TimeLine() {
    return(
        <container>
            <div className={styles.timeline}>
                <div className={styles.checkpoint}>
                    <div>
                        <h3>Agosto-2019</h3>
                        
                    </div>
                </div>
                <div className={styles.checkpoint}>
                    <div>
                        <h3>Janeiro-2022</h3>
                        
                    </div>
                </div>
                <div className={styles.checkpoint}>
                    <div>
                        <h3>Outubro-2024</h3>
                        
                    </div>
                </div>
                <div className={styles.checkpoint}>
                    <div>
                        <h3>Janeiro-2025</h3>
                        
                    </div>
                </div>
            </div>
            <div className={styles.timelinedow}>
                <div className={styles.checkpointdow}>
                    <div>
                        
                        <p>Início da graduação em Gestão da Tecnologia da Informação - FATEC.</p>
                    </div>
                </div>
                <div className={styles.checkpointdow}>
                    <div>
                        
                        <p>Iniciei o curso Web Full Stack na escola DevQuest, reconhecida pelo MEC como Extensão Universitária.</p>
                    </div>
                </div>
                <div className={styles.checkpointdow}>
                    <div>
                        
                        <p>Iniciei uma formação profissionalizante em Engenharia de Software na escola DNC.</p>
                    </div>
                </div>
                <div className={styles.checkpointdow}>
                    <div>
                        
                        <p>Atualmente, curso graduação em Sistemas para Internet na FATEC e Pós-graduação em Engenharia de Software na USP ESALQ.</p>
                    </div>
                </div>
            </div>
        </container>

        
    )
}

export default TimeLine

