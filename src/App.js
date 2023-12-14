import './App.css';
import bgcafe from './assets/bg-cafe.jpg';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <img src={bgcafe} alt="coffee background" />

      <div className="collection__container">
        <div className='collection__container-header'>

          <h1>Our Collection</h1>
          <p>Introducing our Coffee Collectio, a selection of unique coffees
            from different tyipes and origins, expertly roasted in small batches
            and shipped fresh weekly.
          </p>
        </div>

        <div className="articles__container">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
