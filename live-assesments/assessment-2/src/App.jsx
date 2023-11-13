import { Product } from "./components/product";
import content from "./content";

import "./App.css";

function App() {
  return (
    <div className="App">
      {content.map((content) => (
        <Product
          name={content.name}
          avatarUrl={content.avatarUrl}
          location={content.location}
          age={content.age}
        />
      ))}
    </div>
  );
}

export default App;
