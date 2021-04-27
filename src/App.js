import "./App.css";
import data from "./Componentes/Json/data.json";
import Encuesta from "./Componentes/Encuesta/Encuesta";
import NoDisponible from "./Componentes/NoDisponible/NoDisponible";
import Prueba from "./Componentes/Prueba";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {data.disponible ? <Encuesta /> : <NoDisponible />}
        {
          //<Prueba />
        }
      </header>
    </div>
  );
}

export default App;
