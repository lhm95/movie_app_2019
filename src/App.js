import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
// import axios from "axios";
// import Movie from "./components/Moive";
// import "./App.css";

// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   console.log("Start React");
//   // }
//   // state = {
//   //   conut: 0,
//   // };

//   // add = () => {
//   //   this.setState((currnet) => ({ conut: currnet.count + 1 }));
//   // };
//   // minus = () => {
//   //   this.setState((currnet) => ({ conut: currnet.count - 1 }));
//   // };

//   // componentDidMount() {
//   //   console.log("component rendered");
//   // }
//   // componentDidUpdate() {
//   //   console.log("I just Updated");
//   state = {
//     isLoading: true,
//     movies: [],
//   };

//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies },
//       },
//     } = await axios.get(
//       "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
//     );
//     this.setState({ movies, isLoading: false });
//     // 원래는 {movies:movies} 로 써야함, ES6에서는 겹처서 하나만 쓰면됨
//   };
//   componentDidMount() {
//     this.getMovies();
//   }
//   render() {
//     // console.log("I'm rendering");
//     const { isLoading, movies } = this.state;
//     return (
//       <section className="container">
//         {isLoading ? (
//           <div className="loader">
//             <span className="loader_text">Loading...</span>
//           </div>
//         ) : (
//           <div className="movies">
//             {movies.map((movie) => (
//               <Movie
//                 key={movie.id}
//                 id={movie.id}
//                 year={movie.year}
//                 title={movie.title}
//                 summary={movie.summary}
//                 poster={movie.medium_cover_image}
//                 genres={movie.genres}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//       // <div>
//       //   <h1>The number is : {this.state.conut}</h1>
//       //   <button onClick={this.add}>Add</button>
//       //   <button onClick={this.minus}>Minus</button>
//       // </div>
//     );
//   }
// }

// // const movieILike = [
// //   {
// //     id: 1,
// //     name: "Titanic",
// //     image:
// //       "https://movie-phinf.pstatic.net/20181129_107/1543452551390CN9TW_JPEG/movie_image.jpg",
// //     rating: 5.0,
// //   },
// //   {
// //     id: 2,
// //     name: "Avengers",
// //     image:
// //       "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg",
// //     rating: 4.7,
// //   },
// //   {
// //     id: 3,
// //     name: "Iron Man",
// //     image:
// //       "https://movie-phinf.pstatic.net/20111222_37/1324501632182vbSoY_JPEG/movie_image.jpg",
// //     rating: 4.9,
// //   },
// //   {
// //     id: 4,
// //     name: "Starwars",
// //     image:
// //       "https://movie-phinf.pstatic.net/20200108_148/1578462346140MWVbW_JPEG/movie_image.jpg",
// //     rating: 3.0,
// //   },
// // ];

// // // function renderMovie(movie) {
// // //   console.log(movie);
// // //   return <Movie name={movie.name} poster={movie.image} />;
// // // }

// // function Movie({ name, poster, rating }) {
// //   return (
// //     <div style={{ textAlign: "center", marginTop: 50, marginBottom: 50 }}>
// //       <h3>I love {name}</h3>
// //       <h3>{rating}/5.0</h3>
// //       <img src={poster} alt={name} style={{ width: 300 }} />
// //     </div>
// //   );
// // }

// // Movie.propTypes = {
// //   name: PropTypes.string.isRequired,
// //   poster: PropTypes.string.isRequired,
// //   rating: PropTypes.number.isRequired,
// //   // isRequired 필수라는 뜻
// // };

// // function App() {
// //   return (
// //     <div style={{ marginTop: 100, marginBottom: 100 }}>
// //       {
// //         // movieILike.map(renderMovie)
// //         movieILike.map((movie) => (
// //           <Movie
// //             key={movie.id}
// //             name={movie.name}
// //             poster={movie.image}
// //             rating={movie.rating}
// //           />
// //         ))
// //       }
// //     </div>
// //   );
// // }

// export default App;
