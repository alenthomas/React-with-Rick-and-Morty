var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Rick and Morty Baby !!'),
    React.createElement('ul', {},
      React.createElement('li', {},
	React.createElement('h2', {}, 'Rick Sanchez'),
    	React.createElement('a', {href: 'http://rickandmorty.wikia.com/wiki/Rick_Sanchez'}, 'Rick C-137')
      ),
      React.createElement('li', {},
	React.createElement('h2', {}, 'Morty Smith'),
	React.createElement('a', {href: 'http://rickandmorty.wikia.com/wiki/Morty_Smith'}, 'Morty C-137')
      )
    )
  )

ReactDOM.render(rootElement, document.getElementById("react-app"))
