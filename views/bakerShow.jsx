const React = require("react");
const Default = require("./layouts/default");

function Show({ baker }) {
  return (
    <Default>
      <h2 id="baker-name">{baker.name}</h2>
      <p>
        {baker.name} has been baking with us since{" "}
        <strong>{baker.startDate.getFullYear()}</strong>.
      </p>
      <p>
        About {baker.name}:<br />
        {baker.bio}
      </p>
      <h3>Breads {baker.name} has baked</h3>
      <ul>
        {baker.breads.map((bread) => {
          return <li key={bread.id}>{bread.name}</li>;
        })}
      </ul>
    </Default>
  );
}

module.exports = Show;
