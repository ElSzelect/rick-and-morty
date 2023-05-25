import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Detail from "./components/Detail";
import About from "./components/About";
import Form from "./components/Form.jsx";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [contador, setContador] = useState(0);
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();
  const username = "ivanszelect@gmail.com";
  const password = "1Password";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  function logOut() {
    setAccess(false);
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        characters.map((carta) => {
          if (carta.name === data.name) {
            alert("Esa Carta ya existe");
            return setContador(1);
          }
        });

        if (contador > 0) {
          return (contador = 0);
        } else {
          if (data.name) {
            return setCharacters((oldChards) => [...oldChards, data]);
          } else {
            return window.alert("No hay personajes con ese ID");
          }
        }
      });
  };

  // function onClose(characterKey) {
  //   for (let i = 0; i < characters.length; i++) {
  //     if (characters[i].key == characterKey) {
  //       characters.splice(i);
  //     }
  //   }
  // }

  function onClose(id) {
    setCharacters((characters) => characters.filter((char) => char.id !== id));
  }

  // const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ? null : (
        <Nav
          onSearch={onSearch}
          username={username}
          logOut={logOut}
          access={access}
        />
      )}
      <Footer />
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId/" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
