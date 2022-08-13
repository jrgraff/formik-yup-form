import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
  return (
      <div className="flex flex-col font-sans antialiased bg-grey-lightest">
        <Header />
        <Form />
        <Footer />
      </div>
  );
}

export default App;
