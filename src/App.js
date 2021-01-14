import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import userData from "./userData";
import User from "./user";
import "./App.css";

function App() {
  const users = Object.keys(userData);
  return (
    <Router>
      <div className="root">
        <header>
          <div className="inner-wrapper">
            <nav className="header-content">
              <Link to="/">Home</Link>
              <h1>Multi-Input Test App</h1>
            </nav>
          </div>
        </header>
        <div className="inner-wrapper user-choice">
          <h2>Please choose a user</h2>
          <div style={{ width: "100%" }}>
            <ul>
              {users.map((user) => (
                <li>
                  <Link to={`/${user}`}>{user}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/:id" children={<User />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
