import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import ResultsPage from './pages/results/ResultsPage';

function App() {
	return (
		<BrowserRouter>
			<Route path="/" exact component={LandingPage} />
			<Route path="/results" component={ResultsPage} />
		</BrowserRouter>
	);
}

export default App;
