var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Rick and Morty Baby !!'),
    React.createElement('ul', {},
      React.createElement('li', {},
	React.createElement('h2', {}, 'Rick Sanchez'),
        React.createElement('img', {src: 'https://vignette3.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/scale-to-width-down/376?cb=20160923150728'}),
        React.createElement('br'),
    	React.createElement('a', {href: 'http://rickandmorty.wikia.com/wiki/Rick_Sanchez'}, 'Rick C-137')
      ),
      React.createElement('li', {},
	React.createElement('h2', {}, 'Morty Smith'),
        React.createElement('img', {src: 'https://vignette4.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest/scale-to-width-down/301?cb=20170217193441'}),
        React.createElement('br'),
	React.createElement('a', {href: 'http://rickandmorty.wikia.com/wiki/Morty_Smith'}, 'Morty C-137')
      )
    )
  )

ReactDOM.render(rootElement, document.getElementById("react-app"))
