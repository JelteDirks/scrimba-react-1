import ReactDOM from "react-dom";

function Header() {
  return (
    <header>
      <nav>
        <img src="https://placehold.co/200x200" alt=""/>
        <h1>Digital Artisans</h1>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>This is karma.</footer>
  )
}

function Main() {
  return (
    <>
      <ul>
        <li>It's high quality</li>
        <li>It's high value</li>
        <li>It's still, just two people developing with humor</li>
      </ul>
    </>
  )
}

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

