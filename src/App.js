import { useQuery } from '@apollo/client'
import { GET_ALL_CHARACTERS } from './queries'
import Card from './Card'

import {useEffect, useState} from 'react'

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1 }
  })
  
  const [characters, setCharacters] = useState()
  const [filterQuery, setFilterQuery] = useState()
  
  useEffect(() => {
    if (!filterQuery) {
      setCharacters(data?.characters?.results)
    } else {
      const queryString = filterQuery.toLowerCase()
      const filteredData = data?.characters?.results?.filter(character => {
        const name = `${character.name}`

        // if it's just one letter, return all names that start with it
        if (queryString.length === 1) {
          const firstLetter = name.charAt(0).toLowerCase()
          return firstLetter === queryString
        }
        else {
          return name.toLowerCase().includes(queryString)
        }
      })
      setCharacters(filteredData)
    }
  }, [data, filterQuery])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>
  
  

  return (
    <>
      <header>
        <h1 className={"text-center m-3"}>Rick and Morty GraphQL App</h1>
      </header>
      <form>
          <input
            type={"text"}
            placeholder={"type here to filter..."}
            onChange={event => setFilterQuery(event.target.value)}
            className={"ml-20 mt-6 rounded-md p-2"}
          />
        </form>
      <div className={"bg-black m-auto grid md:grid-cols-3 gap-6 p-20"}>
        {data?.characters?.results.map(character =>
          <Card character={character} key={character.id} />
        )}
      </div>
    </>

  )
}

export default App
