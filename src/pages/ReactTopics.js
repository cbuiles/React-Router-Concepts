import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus
        dignissimos ipsam, similique impedit sapiente adipisci minima incidunt
        quas dolorem illum aliquam quis labore sint nam libero dicta voluptate?
        Est?
      </p>
    </div>
  );
};

const ReactTopics = () => {
  // let match = useRouteMatch();
  // console.log(match);

  // 'path' nos permite construir rutas relativas <Route>, mientras que 'url' nos permite construir enlaces relativos <Link> o <NavLink>

  let { path, url } = useRouteMatch();

  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componente</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore at
            ducimus autem. Quaerat consectetur laborum vero minima enim
            cupiditate at facere earum minus quisquam autem nobis, provident
            blanditiis officia omnis!
          </p>
        </Route>
        {/* Si le pongo el atributo exact pierde el dinamismo topic */}
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
