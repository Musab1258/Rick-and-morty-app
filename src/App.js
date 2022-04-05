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
        <h1 className="text-purple-900 text-center font-black">Rick and Morty GraphQL App</h1>
      </header>
      <div className="bg-black m-auto mb-16 grid gap-y-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {data?.characters?.results.map(character =>
          <Card character={character} key={character.id} />
        )}
      </div>
      </div>
    </>

  )
}

export default App
