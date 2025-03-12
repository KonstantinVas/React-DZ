import './App.css';
import Headline from './components/Headline/Headline';
import Paragraph from './components/Paragraph/Paragraph';
import Button from './components/Button/Button';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
	const data = [
		{
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		}
	];

	return (
		<>
			<MainContainer>
				<Headline title={data[0].title}/>
				<Paragraph text={data[0].text}/>
				<Button/>
			</MainContainer>
		</>
	);
}

export default App;

