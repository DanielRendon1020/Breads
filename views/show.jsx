const React = require("react");
const Default = require("./layouts/default");

function show({ bread }) {
  console.log(bread.name);
  return (
    <Default>
      <main>
        <h2>{bread.name}</h2>
        <h5>
          {bread.hasGluten ? (
            <span>
              <i class="fa-solid fa-wheat-awn-circle-exclamation fa-lg"></i>
            </span>
          ) : (
            <span></span>
          )}
        </h5>
        <img src={bread.image} alt={bread.name} />
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
