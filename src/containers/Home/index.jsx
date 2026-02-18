import Button from '../../components/Button'
import api from '../../services/api'
import { Background, Poster, Info, Container, ContainerButton } from './styles'
import { useState, useEffect } from 'react'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'


function Home() {

    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()

    useEffect(() => {

        async function getMovies() {
            const { data: { results } } = await api.get('/movie/popular')
            setMovie(results[0])

        }
        async function getTopMovies() {
            const { data: { results } } = await api.get('/movie/top_rated')
            setTopMovies(results)

        }


        getMovies()
        getTopMovies()

    }, [])



    return (

        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButton>
                                <Button red={true}>Assista Agora</Button>
                                <Button red={false}>Assista o Trailer</Button>
                            </ContainerButton>
                        </Info>
                        <Poster>
                            <img alt='capa-do-filme' src={getImages(movie.backdrop_path)} />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'}/>}
        </>
    )
}
export default Home