import "./App.css";
import Card from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <h1>Hello, React!</h1>
      <Card
        id={1}
        title="Test Card"
        description="This is a simple card component."
        details="More details about the card."
      />

      <Card
        id={2}
        title="Another Card"
        description="This is another card component."
        details="More details about the second card."
      />
    </Layout>
  );
}

export default App;
