import * as ReactDOM from "react-dom";

function Navbar() {
  return (
    <nav>
      <h1>Digital Artisans</h1>
      <ul>
        <li>Home</li>
        <li>Developers</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
}

const value = <Navbar/>;

console.log(value);

ReactDOM.render(value, document.getElementById('root'));

