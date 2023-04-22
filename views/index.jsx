const React = require("react");
const Default = require("./layouts/default");

function Index({ breads, title }) {
  return (
    <Default title={title}>
      <h2>Breads</h2>
      <ul>
        {breads.map((bread, index) => {
          return (
            <main>
              <li key={index}>
                <a href={`/breads/${index}`}>{bread.name}</a>
              </li>
            </main>
          );
        })}
      </ul>
      <div className="newButton">
        <a href="/breads/new">
          <button>Add a new bread</button>
        </a>
      </div>
    </Default>
  );
}

module.exports = Index;
