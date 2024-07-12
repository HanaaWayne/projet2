import { Article, Paragraph, Title } from "@/components";
import { useEffect, useState } from "react";
import * as LocalDatas from "@/utils/LocalDatas/LocalDatas";
import "./Futurama.css";

const Futurama = () => {

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [charactersList, setCharactersList] = useState(null)

  const returnRandomCharacter = (actualArray) => {
    return actualArray[Math.floor(Math.random() * actualArray.length)]
  }

  const fetchCharacter = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.sampleapis.com/futurama/characters"
      );
      if (!response.ok) {
        throw new Error("La réponse de l'Api n'est pas OK")
      }
      const data = await response.json()
      setCharactersList(data)
      LocalDatas.setData("futuramaCharacterList", JSON.stringify(data))
      const randomCharacter = returnRandomCharacter(data)
      setCharacter(randomCharacter);
      setLoading(false);
    } catch (error) {
      setError("Erreur lors de la récupération du personnage")
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    const futuramaLocalDatas = LocalDatas.getData("futuramaCharacterList")
    if(futuramaLocalDatas){
        setCharactersList(JSON.parse(futuramaLocalDatas))
    }
    if(!charactersList){
        fetchCharacter()
    }
  }, [charactersList]);

  return (
    <>
      <p>test</p>
      {loading && (
        <Article>
          <Title title="Chargement des données" levelTitle="h2" />
          <Paragraph>Les données sont en cours de récupération....</Paragraph>
        </Article>
      )}
      {error && (
        <Article>
          <Title title="Erreur" levelTitle="h2" />
          <Paragraph>
            Une erreur a été rencontrée lors de la récupération des données.
          </Paragraph>
          <Paragraph>Détails : {error}</Paragraph>
        </Article>
      )}
      {character && (
        <Article>
          <button onClick={() => !charactersList ? fetchCharacter() : setCharacter(returnRandomCharacter(charactersList))}>Nouveau personnage</button>
          <Title
            title={`${character.name.first} ${character.name.middle} ${character.name.last}`}
            levelTitle={2}
          />
          <img src={character.images.main} alt={character.name.first} />
          <Paragraph>
            <strong>Age</strong> :
            {character.age.toLowerCase() !== "unknown" ? character.age : "Inconnu"}
          </Paragraph>
          <Paragraph>
            <strong>Genre</strong> : {character.gender}
          </Paragraph>
          <Paragraph>
            <strong>Espèce</strong> : {character.species}
          </Paragraph>
          {character.homePlanet && (
            <Paragraph>
                <strong>Planète d'habitation</strong> : {character.homePlanet}
            </Paragraph>
          )}
          <Paragraph>
            <strong>Occupation</strong> : {character.occupation}
          </Paragraph>
          <Paragraph>
            <strong>Expression</strong> : {character.sayings[Math.floor(Math.random() * character.sayings.length)]}
          </Paragraph>
          <ul>
            {character.sayings.map((saying, index) => (
                <li key={index}>{saying}</li>
            ))}
          </ul>
        </Article>
      )}
    </>
  );
};

export default Futurama;
