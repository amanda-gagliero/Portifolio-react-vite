
import Card from '../elements/Card'
import styles from './Projects.module.css'
import landingPageGTA from "../../Image/landingPageGTA.jpg";
import lpdnc from '../../Image/lpdnc.svg'
import portfolio from '../../Image/portfolio.jpg'
import jordan from '../../Image/jordan.jpeg'


function Projects() {
    return(
        
        <container className={styles.title}>

            <h1>Projetos</h1>

            <div id="Projects" className={styles.projects}>
            <div>
                <Card
                img={landingPageGTA}
                title="Landing Page GTA" 
                description="Desenvolvimento de uma landing page GTA" 
                repo="https://github.com/amanda-gagliero/projeto-lp-gta"
                site="https://projeto-gta-lp.netlify.app/"
                />
                <Card
                img={lpdnc}
                title="Landing Page DNC" 
                description="Desenvolvimento de uma landing page da escola DNC" 
                repo="https://github.com/amanda-gagliero/DNC-landing-page"
                site="https://pagina-dnc.netlify.app/"
                />
            </div>
            <div>
                <Card
                img={portfolio}
                title="Portfólio React" 
                description="Construção de um Portfólio utilizando React e Vite" 
                repo=""
                site=""
                />
                <Card
                img={jordan}
                title="Jordan Shoes" 
                description="E-commerce especializado na venda de tênis da linha Jordan." 
                repo="https://github.com/amanda-gagliero/Jordan-Shoes"
                site="https://jordanshoes-jordan.netlify.app/"
                />
            </div>
        
        </div>



        </container>

    )
}

export default Projects