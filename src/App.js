import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route to="/" exact component={Home}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
