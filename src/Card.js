const Card = ( { character } ) => {
  return (
    <div className="bg-purple-900 border-solid text-white w-64 h-80 rounded-lg shadow-md">
      <img className="w-32 h-32 rounded-full mx-auto mt-7" src={character.image} alt="character" />
      <div className="text-center mt-5 p-4">
        <div className="flex">
          <h6 className="mr-2">Name:</h6>
          <p className="mr-2">{character.name}</p>
        </div>
        <div className="flex">
          <h6 className="mr-2">Status:</h6>
          <p className="mr-2">{character.status}</p>
        </div>
        <div className="flex">
          <h6 className="mr-2">Specie:</h6>
          <p className="mr-2">{character.species}</p>
        </div>
        <div className="flex">
          <h6 className="mr-2">Last known location:</h6>
          <p className="mr-2">{character.location.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
