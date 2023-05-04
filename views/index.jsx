const React = require("react");
const Default = require("./layouts/default");

function Index({ breads, bakers, title }) {
  return (
    <Default title={title}>
      <div id="index-page">
        <div id="bread-list">
          <h2>Breads</h2>
          <ul>
            {breads.map((bread, id) => {
              return (
                <main>
                  <li key={breads._id} id="bread-item">
                    <a href={`/breads/${bread._id}`}>{bread.name}</a>
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
        </div>
        <div id="baker-list">
          <h2>Bakers</h2>
          <ul>
            {bakers.map((baker) => {
              return (
                <main>
                  <li key={bakers._id} id="baker-item">
                    <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                  </li>
                </main>
              );
            })}
          </ul>
        </div>
      </div>
    </Default>
  );
}

module.exports = Index;
