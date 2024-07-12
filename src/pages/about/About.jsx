import { Section, Article, Title, Paragraph } from "../../components"
import "./About.css"
import { Link } from "react-router-dom";

const About = () => {

    return(
        <Section sectionTitle="A propos de l'application">
            <Article>
                <Title title="Développeur d'Application" levelTitle={3}/>
            </Article>
            <Paragraph>
                Nom du Développeur: Hanaa Wayne
            </Paragraph>
            <Paragraph>
                Hala Madrid
            </Paragraph>
            <Paragraph>
                Visca Real Madrid
            </Paragraph>
            <Link to="/">
                <button>Retour</button>
            </Link>
        </Section>
    )
}

export default About