import { useState } from "react";

import TabButtons from "../TabButtons";
import Section from "../Section";
import Tabs from "../Tabs";

import { EXAMPLES } from "../../data";

export default function Examples() {
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

  const [selectedBtn, useSelectedBtn] = useState();
  function handleSelect(btn) {
    if (btn == "proceed") {
      useSelectedBtn(false);
    } else {
      useSelectedBtn(true);
    }
  }

  let choosen = <button onClick={() => handleSelect("del")}>Delete</button>;

  if (selectedBtn) {
    choosen = (
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={() => handleSelect("proceed")}>Proceed</button>
      </div>
    );
  }
  return (
    <Section title="Examles" id="examples">
      <Tabs
        buttons={
          <>
            <TabButtons
              isSelected={selectedTopic === "components"}
              onClick={() => selectHandler("components")}
            >
              Components
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === "jsx"}
              onClick={() => selectHandler("jsx")}
            >
              JSX
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === "props"}
              onClick={() => selectHandler("props")}
            >
              Props
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === "state"}
              onClick={() => selectHandler("state")}
            >
              State
            </TabButtons>
          </>
        }
      >
        {topic}
      </Tabs>
      <div>{choosen}</div>
    </Section>
  );
}
