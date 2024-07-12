import { useRouteError } from "react-router-dom"
import { Title, Paragraph } from "../../components"
import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {

    const error = useRouteError()

    return(
        <div>
            <Title title="Erreur 404" levelTitle={2}/>
            <Paragraph>
                La ressource demandée est introuvable...
            </Paragraph>
            
            {error?.statusText || error?.message && 
            (<Paragraph>
                <small>Erreur: {error?.statusText || error?.message && `Erreur : ${error?.statusText} || error`}</small>
            </Paragraph>)}

            <Link to="/">Retourner vers la page {"d'accueil"}</Link>
        </div>
    )
}

export default NotFound