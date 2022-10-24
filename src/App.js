import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <>
      <div className="App">
        {/*Header */}
        <Header />
        {/*Home */}
        <Home />
        {/*Footer */}
        <Footer />
        {/* <Route path="/login">
        <Login />
      </Route> */}
      </div>
    </>
  );
}

export default App;
