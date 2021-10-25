import "./Body.css";

import Search from "./Search";
import Date from "./Date";
import City from "./City";
import Information from "./Information";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="project">
      <Search />
      <Date />
      <City />
      <Information />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
