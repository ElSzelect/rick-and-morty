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
  const [favCharacters, setFavCharacters] = useState([]);
  const [favPage, setFavPage] = useState(false);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  function login(userData) {
    if (userData.password && userData.username) {
      setUserData(userData);
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

  const onSearch = (characterId) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        const repeated = characters.find((card) => card.name === data.name);
        if (repeated) {
          return alert("Esa Carta ya existe");
        } else {
          if (data.name) {
            return setCharacters((oldChards) => [...oldChards, data]);
          } else {
            return window.alert("No hay personajes con ese ID");
          }
        }
      });
  };

  function onClose(id) {
    setCharacters((characters) => characters.filter((char) => char.id !== id));
  }

  function favCharacterHandler(charData) {
    if (favCharacters.find((char) => char.id === charData.id)) {
      return setFavCharacters((favCharacters) =>
        favCharacters.filter((char) => char.id !== charData.id)
      );
    }
    setFavCharacters((oldChards) => [...oldChards, charData]);
  }

  function switchToFavs() {
    setFavPage((status) => !status);
  }

  return (
    <div>
      {location.pathname === "/" ? null : (
        <Nav
          onSearch={onSearch}
          username={userData.username}
          logOut={logOut}
          access={access}
        />
      )}
      <Footer />
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <Cards
              onClose={onClose}
              characters={characters}
              favCharacters={favCharacters}
              favCharacterHandler={favCharacterHandler}
              switchToFavs={switchToFavs}
              favPage={favPage}
            />
          }
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
