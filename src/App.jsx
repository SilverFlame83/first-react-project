import reactImg from "./assets/react-core-concepts.png";
import {CORE_CONCEPTS} from './data'
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
