import { Section, Article, Title, Paragraph } from "../../components"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext"
import "./Home.css"

const Home = () => {

    const {darkMode, switchDarkMode} = useContext(ThemeContext);

    return(
        <Section sectionTitle="Mon application React">
            <Article>
                <Title title="Mon premier article" levelTitle={3}/>
                <Paragraph>
                    Voici le premier article sur le projet2 de la formation {"\"Approfondir ses connaissances en React\""}
                </Paragraph>
            </Article>

            <button onClick={() => switchDarkMode()}> 
            {darkMode ? "☀️" : "🌙"}
            </button>
        </Section>
    )
}

export default Home

