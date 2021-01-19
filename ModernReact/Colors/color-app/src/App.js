import Colors from './seedColors';
import Palette from './components/palette/palette.component';

function App() {
  return (
    <div className="App">
      <Palette {...Colors[1]}/>
    </div>
  );
}

export default App;
