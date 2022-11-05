import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/kodola-maryna/"
            rel="noreferrer"
            target="_blank"
          >
            Maryna Kodola
          </a>{" "}
          and is
          <a
            href="https://github.com/Maryna-ua/react-week-5"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
