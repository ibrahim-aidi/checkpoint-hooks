import React from 'react'
import { Card , Button} from 'react-bootstrap'

const MovieCard = ({movie}) => {
  return (
   
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterUrl} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
       {movie.description}
      </Card.Text>
      <Button variant="primary">
        <a href={movie.link}>
        trailer
        </a></Button>
    </Card.Body>
  </Card>
  )
}

export default MovieCard