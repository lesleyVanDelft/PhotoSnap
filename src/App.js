import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Stories from './pages/Stories/Stories';
import Features from './pages/Features/Features';
import Pricing from './pages/Pricing/Pricing';

import Navbar from './components/Navbar/Navbar';
import TopScroll from './components/TopScroll';
import TopScrollReset from './components/TopScrollReset';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/stories" component={Stories} />
					<Route path="/features" component={Features} />
					<Route path="/pricing" component={Pricing} />
				</Switch>

				<TopScroll />
				<TopScrollReset />
			</div>
		</Router>
	);
};

export default App;
