import {useState} from 'react';
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButtons from "./components/TabButtons";

function App() {
  const [selected, useSelected] = useState('Initial State')
  
  function selectHandler(selectedBtn) {
    useSelected(selectedBtn)
    console.log(selected);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            ></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={()=> selectHandler('components')}>Components</TabButtons>
            <TabButtons onSelect={()=> selectHandler('jsx')}>JSX</TabButtons>
            <TabButtons onSelect={()=> selectHandler('props')}>Props</TabButtons>
            <TabButtons onSelect={()=> selectHandler('state')}>State</TabButtons>
          </menu>
        </section>
        <h2>{selected}</h2>
      </main>
    </div>
  );
}

export default App;
