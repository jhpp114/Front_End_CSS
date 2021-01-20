import Colors from './seedColors';
import Palette from './components/palette/palette.component';
import {generatePalette} from './colorHelper';

function App() {
  console.log(generatePalette(Colors[1]));
  return (
    <div className="App">
      <Palette palette={generatePalette(Colors[1])}/>
    </div>
  );
}

export default App;
