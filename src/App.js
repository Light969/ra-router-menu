import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import HomePage from './react-component/HomePage';
import DriftPage from './react-component/DriftPage';
import ForzaPage from './react-component/ForzaPage';
import TimeAttackPage from './react-component/TimeAttackPage';

function Menu() {
  return (
    <nav className="menu">
      <NavLink className="menu__item" activeClassName="menu__item-active" exact to="/">Главная</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item-active" to="/drift">Дрифт-такси</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item-active" to="/timeattack">Time Attack</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item-active" to="/forza">Forza Karting</NavLink>
    </nav>
  )
}

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}
