import ReactDOM from "react-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";

function Page() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

ReactDOM.render(Page(), document.getElementById('root'));

