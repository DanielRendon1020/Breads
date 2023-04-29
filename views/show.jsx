const React = require("react");
const Default = require("./layouts/default");

function show({ bread, index, title }) {
  console.log(bread.name);
  return (
    <Default title={title}>
      <main>
        <div id="show-title">
          <h2>{bread.name}</h2>
          <h5 id="gluten-marker">
            {bread.hasGluten ? (
              <span>
                <i
                  id="gluten-icon"
                  className="fa-solid fa-wheat-awn-circle-exclamation fa-lg"
                ></i>
              </span>
            ) : (
              <span id="no-gluten">
                <i id="wheat" className="fa-solid fa-wheat-awn fa-lg"></i>
                <i id="slash" className="fa-solid fa-slash fa-lg"></i>
              </span>
            )}
          </h5>
        </div>
        <hr />
        <img src={bread.image} alt={bread.name} />
        <p>Baked by: <strong>{bread.baker}</strong></p>
        <a href={`/breads/${bread.id}/edit`}>
          <button>Edit</button>
        </a>
        <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
          <input id="delete-button" type="submit" value="DELETE" />
        </form>
        <div className="backButton">
          <a href="/breads">
            <button>Go back to bread list</button>
          </a>
        </div>
      </main>
    </Default>
  );
}

module.exports = show;
