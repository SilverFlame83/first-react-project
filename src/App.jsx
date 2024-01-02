import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import {CORE_CONCEPTS} from './data'

function App() {
  return (
    <div>
      <Header />
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
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
