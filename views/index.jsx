const React = require("react");
const Default = require("./layouts/default");

function Index({ breads, title }) {
  return (
    <Default title={title}>
      <h2>Breads</h2>
      <ul id="bread-list">
        {breads.map((bread, id) => {
          return (
            <main id>
              <li key={id} id="bread-item">
                <a href={`/breads/${bread.id}`}>{bread.name}</a>
              </li>
            </main>
          );
        })}
      </ul>{" "}
      <div id="gluten-indicators">
        <span>
          <i
            id="gluten-icon"
            className="fa-solid fa-wheat-awn-circle-exclamation fa-lg"
          ></i>{" "}
          Contains Gluten
        </span>
        <span id="no-gluten">
            <i id="wheat" className="fa-solid fa-wheat-awn fa-lg"></i>
            <i id="slash" className="fa-solid fa-slash fa-lg"></i>
          <span id="gf">Gluten Free</span>
        </span>
      </div>
      <div className="newButton">
        <a href="/breads/new">
          <button>ADD MORE BREAD</button>
        </a>
      </div>
    </Default>
  );
}

module.exports = Index;
