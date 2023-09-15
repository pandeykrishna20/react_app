import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component{
    constructor(){
        super();
        //Creating the state object 
        this.state = {
            movies : [
                {
                    id: 1,
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  stars: 0,
                  fav: false,
                  isInCart: false                  
                },
                {
                    id :2 ,
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  stars: 0,            
                  fav: false,
                  isInCart: false                  
                },
                {
                    id : 3,
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony starsk creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  star: 0,            
                  fav: false,
                  isInCart: false                  
                }]
        } 
  }

  handleAddStars = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(movies[movieId].stars <5){
        movies[movieId].stars += 0.5
    }

    this.setState({
        movies
    });
  }

  handleDecStars = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(movies[movieId].stars > 0){
        movies[movieId].stars -= 0.5;
    }

    this.setState({
        movies
    })
 
  }

  handleToggleFav = (movie)=> {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
        movies
    })
  }

  handleAddtocart = (movie)=> {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;

    this.setState({
        movies
    })
  }
    render(){
        const {movies} =  this.state;
          
        return(
            <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                        //    key = {index}
                           onIncStars = {this.handleAddStars}
                            onDecStars = {this.handleDecStars}
                            onClickFav = {this.handleToggleFav}
                            onClickAddtocart = {this.handleAddtocart}
                            key = {movie.id}/>

            ))}              
            </div>
        )
    }
}

export default MovieList;

// import React, { Component } from "react";
// import Moviecard from "./Moviecard";

// class MovieList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             movies: [
//                 {
//                     title: "The Avengers",
//                     plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop",
//                     poster: "https://image.tmdb.org/t/p/original/ifdNNg3rpOgitwSpgeLOu1HY6r7.jpg",
//                     rating: 8.9,
//                     price: 199,
//                     stars: 0,
//                     fav: false,
//                     cart: false,
//                 },
//                 {
//                     title: "The Dark Knight",
//                     plot: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos",
//                     poster: "https://th.bing.com/th/id/OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//                     rating: 7.9,
//                     price: 299,
//                     stars: 0,
//                     fav: false,
//                     cart: false,
//                 },
//                 {
//                     title: "The Jurassic World",
//                     plot: "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur",
//                     poster: "https://th.bing.com/th/id/OIP.guPIPHqaSPZeTd7T4pWEegHaDt?w=348&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//                     rating: 8.9,
//                     price: 499,
//                     stars: 0,
//                     fav: false,
//                     cart: false,
//                 },
//             ],
//         };
//     }

//     render() {
//         const { movies } = this.state;

//         return (
//             <>
//                 {movies.map((movie, index) => (
//                     <Moviecard key={index} movie={movie} />
//                 ))}
//             </>
//         );
//     }
// }

// export default MovieList;
