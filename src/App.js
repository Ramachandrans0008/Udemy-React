import Navbar from "./components/navbar";
import Categories from "./components/categories";
import Popular from "./components/popular";
import Recommended from "./components/recommended";
import Saleimage from "./components/saleimage";
import Topic from "./components/topic";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <Saleimage></Saleimage>
      <Recommended></Recommended>
      <Topic></Topic>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  );
}

export default App;
