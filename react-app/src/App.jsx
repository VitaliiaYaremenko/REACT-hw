import Carousel from './components/ Carousel.jsx';
import avocado from './images/avocado.jpg';
import ficus from './images/ficus.jpg';
import plants from './images/plants.jpg';

function App() {
    const images = [avocado, ficus, plants];

    return (
        <>
            <Carousel images={images} />
        </>
    );
}

export default App;
