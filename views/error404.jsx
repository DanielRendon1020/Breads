const React = require('react')
const Default = require('./layouts/default')

function error404() {
    return (
        <Default>
            <main>
                <h1>Oops! The baker is busy.</h1>
                <h2><a href="/breads">Get out of the kitchen</a></h2>
                <img src="https://images.baxterboo.com/global/images/article/c12fc293-5056-800a-6bfddbfb3d55cff6.jpg" alt="Backing cat" />
            </main>
        </Default>
    )
}

module.exports = error404