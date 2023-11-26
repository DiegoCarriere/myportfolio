import React from 'react';
import { BrowserRouter,Route , Routes} from "react-router-dom";

import Accueil from "./pages/Accueil";
import Futur from "./pages/Futur";
import Projets from "./pages/Projets";
import Contacts from "./pages/Contacts";
import Competences from "./pages/Competences";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />}></Route>
            <Route path="/Accueil" element={<Accueil />}></Route>
          <Route path="*" element={<Accueil />}></Route>

          <Route path="/Futur" element={<Futur />}></Route>
          <Route path="/Projets" element={<Projets />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
            <Route path="/Competences" element={<Competences />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
