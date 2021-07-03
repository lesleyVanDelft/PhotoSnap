import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/stories" component={Stories} />
					<Route path="/features" component={Features} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
