import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error";
import Home from "../pages/Home";

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
      <h2>Conceptos Basicos</h2>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;