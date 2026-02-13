import api from '../../services/api'
import { Background } from './styles'
import {useState} from 'react'

function Home(){

    const [movie, setMovie] = useState()

    async function getMovies(){
        const data = await api.get('/movie/popular')
        setMovie(data.data.results[1])
        console.log(data)
    }

    getMovies()
    return (

        <>
        {movie && ( 
        <Background img="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg">
            <h1>Home</h1>
            <p>Essa é a Home</p>
        </Background>
        )}
        </>
    )
}
export default Home