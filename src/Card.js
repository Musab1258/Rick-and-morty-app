const Card = ( { character } ) => {
  return (
    <div className="bg-black text-white h-80 rounded-lg shadow-md">
      <img className="w-32 h-32 rounded-full mx-auto mt-7" src={character.image} alt="character" />
      <div className="text-center mt-5">
        <h5 className="mb-0">{character.name}</h5>
        <p>
          {character.status} - {character.species}
        </p>

        <h6>Last known location</h6>
        <p>{character.location.name}</p>
      </div>
    </div>
  )
}

export default Card
