//import Array from "./Array";import Login  from "./Login";
//import Parent from "./parent/parent";

import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import React, { Suspense } from "react";
//import Pagina1 from "./pages/pagina1";
//import Pagina2 from "./pages/pagina2";
//import Pagina3 from "./pages/pagina3";

const Pagina1 = React.lazy(() => import('./pages/pagina1'))
const Pagina2 = React.lazy(() => import('./pages/pagina2'))
const Pagina3 = React.lazy(() => import('./pages/pagina3'))




//import FetchData from "./fetchdata.js/fetcdata";
//import Form from "./form/form";

//import Calendar from "./calendar/calendar";

//import ArrayState from "./arraystate/ArrayState";
//import Carrito from "./carrito/carrito";
//import Pizzas from "./pizzas/pizzas";
//import {PizzaContext} from "./signal/carritocontext";
//import { signal } from "./signal/signal";
//import Counter from "./counter/counter";

//import Timer from "./timer/timer";


function App() {
  //const foo = {name:'pedro'}
  /*return (
    
    <>  
      
      <PizzaContext.Provider value={signal(null)}>
        <Pizzas/>
        <Timer/>
        <ArrayState/>
        <Carrito/>
      </PizzaContext.Provider>
      
    </>
    
  );*/
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="pagina1/:id" element={<Pagina1 />} />
          <Route path="pagina2" element={<Pagina2 />} />
          <Route path="pagina3" element={<Pagina3 />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;
