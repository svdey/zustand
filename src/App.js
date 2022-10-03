import "./App.css";
import CourceList from "./components/CourceList";
import CourcesForm from "./components/CourcesForm";

function App() {
  return (
    <div className="main-container">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}> My cources</h1>
      <CourcesForm />
      <CourceList />
    </div>
  );
}

export default App;
