const React = require('react')
const Default = require('./layouts/default')

function show({bread}) {
    console.log(bread.name)
    return (
        <Default>
            <main>
                <h2>Show Page 🙃</h2>
                <h3>{bread.name}
                {
                    bread.hasGluten
                    ? <span> (contains Gluten)</span>
                    : <span>!</span>
                }</h3>
                <img src={bread.image} alt={bread.name}/>
                <li><a href="/breads">Home</a></li>
            </main>
        </Default>
    )
}

module.exports = show