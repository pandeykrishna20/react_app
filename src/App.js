import MovieList from "./Movielist";
import Navbar from "./Navbar";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";

function App(){
  return(
    <>
    {/* <Navbar/>
    <MovieList/> */}
    <HeadingOne/>
    <HeadingTwo/>

    </>
  )
}




/*
// props in react
import Student from "./Student";


function App() {
  return (
    <>
    
    <Student stuname = "Alexa" marks = {80}/>
    <Student stuname = "Seiri" marks = {75}/>
    <Student stuname = "Hari" marks = {79}/>
    <Student  />
    
    </>
  );
}

Student.defaultProps = {
  stuname : "Student",
  marks : "N.A"
}
 */
export default App;
