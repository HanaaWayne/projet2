import "./Dogs.css"
import { Img, Title, Paragraph } from "../../components"
import batman from "../../assets/batman.jpg"

const Dogs = () => {

    return(
        <>
            <div className="card">
                <img className="card-image" src={batman}></img>
                <div className="card-content">
                    <Title title="Lola" levelTitle={3} />
                    <Title title="Jack Russell Terrier" levelTitle={5} />
                    <Paragraph>2.5 miles</Paragraph>
                </div>
            </div>
        </>
    )
}

export default Dogs