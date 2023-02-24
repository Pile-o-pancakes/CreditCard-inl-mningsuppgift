import { useState, useEffect } from 'react';
import './App.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./views/Home";
import AddCard from "./views/AddCard";
import ErrorPage from "./views/ErrorPage";

import cardInfo from "./cardInfo.json";

function App() {

  const [cardData, setCardData] = useState(cardInfo.cards);

  const router = createBrowserRouter([
    {
      "path": "/",
      "element": <Home cardData={ cardData } setCardData={ setCardData }/>,
      "errorElement": <ErrorPage />
    },
    {
      "path": "/addcard",
      "element": <AddCard cardData={ cardData } setCardData={ setCardData }/>,
      "errorElement": <ErrorPage />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  )
}

export default App;