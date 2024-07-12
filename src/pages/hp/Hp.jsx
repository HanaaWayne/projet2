import "./Hp.css"
import { Paragraph, Title } from "../../components";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Hp = () =>{

    const [characters, setCharacters] = useState([]);
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);
    const [ activTab, setActivTab ] = useState(false);

    useEffect(() => {
        getCharacters();
    }, [])

    console.log(characters, "characters")

    const getCharacters = () => {
        fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => setCharacters(data))
    }

    const handlefavoriteCharacters = (character)  => {
        const newFavorite = [...favoriteCharacters, character]
        // const newFavorite = characters.push(character)
        setFavoriteCharacters(newFavorite)
    }
    console.log(favoriteCharacters, "favoris")

    const handleButtonClick = () => {
        console.log("hello")
        setActivTab(true)
    }
    
    return(
        <>
        <button onClick={() => handleButtonClick()} className="bouton-favoris">Favoris</button>
        {activTab ?  
            <>
                { favoriteCharacters.length > 0 ?
                <>
                    <div className="text-light m-3"><Title title="Mes favoris" levelTitle="h4"/></div>
                        <div className="row m-4">
                        {favoriteCharacters.map((favorite, index) => (
                            <div className="col-3 m-2" key={index} >
                            <div className="contain" >
                                <img className="image" src={favorite.image} alt={favorite.name}/>
                                <div className="text-light m-2"> 
                                    <Title title={`${favorite.name}`} levelTitle="h4" />
                                </div>
                   
                                <div className="text-light">
                                <Paragraph>{favorite.house}</Paragraph> 
                            </div>
                        </div>  
                    </div>
                        ))}
                    </div> 
                </>
        :
                <div className="text-light m-3">
                        <Paragraph>Il n'y a pas de favoris</Paragraph>
                </div>
                }
        
            </>
            : 
            <div className="row m-4">
                {characters.map((character, index) => (
                    <div className="col-3 m-2" key={index} >
                    <div className="contain" >
                        <img className="image" src={character.image} alt={character.name}/>
                        <div className="text-light m-2"> 
                        <Title title={`${character.name}`} levelTitle="h4" />
                        </div>
                       
                        <div className="text-light">
                            <Paragraph>{character.house}</Paragraph> 
                        </div>
                       
                        {/* <p className="text-light">{character.actor}</p> */}
                        <button className="bouton" onClick={() => handlefavoriteCharacters(character)}>Ajouter</button>
                    </div>  
                    </div>
                ))}
            </div>
        }
        </>
    )
}

export default Hp