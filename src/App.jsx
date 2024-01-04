import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButtons from "./components/TabButtons";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, useSelectedTopic] = useState();

  function selectHandler(selectedBtn) {
    useSelectedTopic(selectedBtn);
    console.log(selectedTopic);
  }

  let topic = <h2>Please select a topic!!!</h2>;

  if (selectedTopic) {
    topic = (
      <div id="tab-content">
        <h2>{EXAMPLES[selectedTopic].title}</h2>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
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
            <TabButtons onSelect={() => selectHandler("components")}>
              Components
            </TabButtons>
            <TabButtons onSelect={() => selectHandler("jsx")}>JSX</TabButtons>
            <TabButtons onSelect={() => selectHandler("props")}>
              Props
            </TabButtons>
            <TabButtons onSelect={() => selectHandler("state")}>
              State
            </TabButtons>
          </menu>
          {topic}
        </section>
      </main>
    </div>
  );
}

export default App;
