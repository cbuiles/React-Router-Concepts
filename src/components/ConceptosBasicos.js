import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  HashRouter,
  Link,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
import PrivateRoute from "./PrivateRoute";

// const ConceptosBasicos = () => {
//   return (
//     <div>
//       <h2>Conceptos Basicos</h2>
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             <h3>Home</h3>
//             <p>Bienvinid@s al tema de las Rutas en React.</p>
//           </Route>
//           <Route exact path="/acerca">
//             <Acerca />
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               Voluptas, nesciunt quisquam culpa deserunt sapiente facilis amet
//               ab veritatis minima eos ut eius, ad aut inventore totam voluptatem
//               laudantium, eum soluta?
//             </p>
//           </Route>
//           {/* <Route exact path="/contacto" component={Contacto} /> */}
//           <Route
//             exact
//             path="/contacto"
//             children={
//               <>
//                 <Contacto />
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
//                   cupiditate asperiores minus ducimus nostrum ipsum, eius rerum?
//                   Quidem, laborum possimus asperiores quis ducimus consectetur,
//                   dicta eos est veritatis maiores itaque!
//                 </p>
//               </>
//             }
//           />
//         </Switch>
//       </Router>
//     </div>
//   );
// };

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <MenuConceptos />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/usuario/:username" component={Usuario} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/about">
            <Redirect to="/acerca" />
          </Route>
          <Route exact path="/contact">
            <Redirect to="/contacto" />
          </Route>
          {/* Cuadno se trabaja con una ruta que genera subrrutas debe omitirse el exact ya que se van a tomar variables dinamicamente */}
          <Route path="/react" component={ReactTopics} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
      <hr />
      <h2>Conceptos Basicos</h2>
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/usuario/:username" component={Usuario} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/about">
            <Redirect to="/acerca" />
          </Route>
          <Route exact path="/contact">
            <Redirect to="/contacto" />
          </Route>
          {/* Cuadno se trabaja con una ruta que genera subrrutas debe omitirse el exact ya que se van a tomar variables dinamicamente */}
          <Route path="/react" component={ReactTopics} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={Error404} />
          <Usuario />
        </Switch>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
