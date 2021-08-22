import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TopAbout from "./components/TopAbout";
import { AppColors } from "./assets/AppColors";
import ContactMe from "./components/ContactMe";

function App() {
	return (
		<div
			style={{
				backgroundColor: AppColors.tempColor,
			}}
			className="App"
		>
			<Navbar />
			<TopAbout />
			<ContactMe />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
