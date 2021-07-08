import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';

import TopScroll from './components/TopScroll';
import TopScrollReset from './components/TopScrollReset';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/stories" component={Stories} />
					<Route path="/features" component={Features} />
					<Route path="/pricing" component={Pricing}></Route>
				</Switch>

				<TopScroll />
				<TopScrollReset />
			</div>
		</Router>
	);
};

export default App;
