import { CSSProperties } from 'react';

import Test from './components/Test';
import './styles/reset.css';

const App = () => {
	const containerStyle: CSSProperties = {
		backgroundColor: '#e2e2e2',
		width: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	};

	return (
		<div style={containerStyle}>
			<Test />
		</div>
	);
};

export default App;
