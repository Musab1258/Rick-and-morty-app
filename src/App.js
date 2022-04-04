import { useQuery } from '@apollo/client'
import { GET_ALL_CHARACTERS } from './queries'
import Card from './Card'

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1 }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <>
    
      <div className="bg-black">
      <header className="p-4">
        <h1 className="text-white text-center">Rick and Morty GraphQL App</h1>
      </header>
      <div className="bg-black m-auto grid gap-6 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-2 justify-items-center">
        {data?.characters?.results.map(character =>
          <Card character={character} key={character.id} />
        )}
      </div>
      </div>
    </>

  )
}

export default App
