import ReactDOM from "react-dom";

function Page() {
  return (
    <nav>
      <img src="https://placehold.co/200x200" alt=""/>
      <h1>Digital Artisans</h1>
      <ul>
        <li>It's high quality</li>
        <li>It's high value</li>
        <li>It's still, just two people developing with humor</li>
      </ul>
    </nav>
  );
}

ReactDOM.render(Page(), document.getElementById('root'));

