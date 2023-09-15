import React from "react";
// import './styles.css';

class MovieCard extends React.Component{

    render(){
        
        const {movies, onIncStars, onClickFav, onClickAddtocart, onDecStars} =  this.props
        const {title, plot, poster, price, rating,stars,fav,isInCart} =  this.props.movies;
        
          
        return(
            //Movie Card
            <div className="movie-card">

                {/**Left section of Movie Card */}
                <div className="left">
                    <img alt="poster" src={poster} />
                </div>
                
                {/**Right section Movie Card */}
                <div className="right">

                    {/**Title, plot, price of the movie */}
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>

                    {/**Footer starts here with ratings, stars and buttons */}
                    <div className="footer">
                        <div className="rating">{rating}</div>

                        {/**Star image with increase and decrease buttons and star count */}
                        <div className="star-dis">
                            <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={() => onDecStars(movies)}
                            />
                            <img className="stars" 
                                    alt="stars" 
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                            />
                            <img className="str-btn" 
                                alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                // No binding required as addStars() is an arrow function
                                onClick={() => onIncStars(movies)}
                            />
                            <span className="starCount">{stars}</span>
                        </div>

                        {/**conditional rendering on Favourite button */}
                        <button className={fav?"unfavourite-btn":"favourite-btn"}  
                                onClick={() => onClickFav(movies)}> 
                                    
                                    {fav ? "Un-favourite":"Favourite"}

                        </button>
                            
                        {/**Conditional Rendering on Add to Cart Button */}
                        <button className={isInCart?"remove-btn":"cart-btn"}  
                                onClick={() => onClickAddtocart(movies)}>
                                    
                                        {isInCart ? "Remove from Cart":"Add to Cart"}

                        </button>
                        
                    </div>
                </div>

            </div>
          
        )
    }
}

export default MovieCard;









// import React, { Component } from "react";
// import './styles.css';

// class MovieCard extends Component {

//     addStars = () => {
//         if (this.state.stars >= 5) {
//             return;
//         }
//         this.setState((prevState) => ({ stars: prevState.stars + 0.5 }));
//     }

//     decStars = () => {
//         if (this.state.stars <= 0) {
//             return;
//         }
//         this.setState({
//             stars: this.state.stars - 0.5
//         })
//     }

//     handleFav = () => {
//         this.setState({
//             fav: !this.state.fav
//         })
//     }

//     handleCart = () => {
//         this.setState({
//             cart: !this.state.cart
//         })
//     }

//     render() {
//         const { movies: data } = this.props;
//         const { title, plot, price, rating, stars, fav, cart } = data;

//         return (
//             <div className="main">
//                 <div className="movie-card">
//                     <div className="left">
//                         <img alt="poster" src="https://th.bing.com/th/id/OIP.zNDZbJ1vd_HW_D_3F1zaYgHaLH?pid=ImgDet&w=2000&h=3000&rs=1" />
//                     </div>
//                     <div className="right">
//                         <div className="title">{title}</div>
//                         <div className="plot">{plot}</div>
//                         <div className="price">Rs. {price}</div>

//                         <div className="footer">
//                             <div className="rating">{rating}</div>
//                             <div className="star-dis">
//                                 <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" onClick={this.decStars.bind(this)} />
//                                 <img alt="star" src="https://cdn-icons-png.flaticon.com/128/11520/11520084.png" className="stars" />
//                                 <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/32/32563.png" onClick={this.addStars.bind(this)} />
//                                 <span className="starCount">{stars}</span>
//                             </div>
//                             <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFav}>{fav ? "Un-favourite" : "Favourite"}</button>
//                             {cart ? <button className="cart-btn" onClick={this.handleCart}>Add to cart</button> : <button className="remove-btn" onClick={this.handleCart}>Remove from cart</button>}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default MovieCard;
