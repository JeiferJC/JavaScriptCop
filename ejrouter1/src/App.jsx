import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import './App.css';
import CharacterDetail from  "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";

export default function App(){

    return (
        <>
          <Header/>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<CharacterList/>}></Route>
                <Route path="/character/:id" element={<CharacterDetail/>}></Route>
            </Routes>
          </BrowserRouter>
        
        
        
        
        </>
    )
}