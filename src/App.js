import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <Quiz />
      <Footer/>
    </>
  );
}

export default App;