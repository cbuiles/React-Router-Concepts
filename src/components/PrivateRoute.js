import { Redirect, Route } from "react-router";

// const PrivateRoute = (props) => {
//   return (
//     <Route exact={props.exact} path={props.path} component={props.component} />
//   );
// };

// const PrivateRoute = (props) => {
//   return <Route {...props} />;
// };

// Simular Autenticacion
let auth;
auth = null;
auth = true;

// Darle un alias al componente para poder renderizar  y lo reconozca
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;
