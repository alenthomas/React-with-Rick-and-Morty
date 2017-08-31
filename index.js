// data part starts here
const urls = {
  'rick': 'http://rickandmorty.wikia.com/wiki/Rick_Sanchez',
  'morty': 'http://rickandmorty.wikia.com/wiki/Morty_Smith',
  'summer': 'http://rickandmorty.wikia.com/wiki/Summer_Smith'
}

const imgs = {
  'rick': 'https://vignette3.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/scale-to-width-down/376?cb=20160923150728',
  'morty': 'https://vignette4.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest/scale-to-width-down/301?cb=20170217193441',
  'summer': 'https://vignette1.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest/scale-to-width-down/315?cb=20160919183158'
}

const quotes = [
  `"The outside world is our enemy, Morty! We're the only fehh-friends we got, Morty! It's just Rick and Morty! Ruh-ick and Morty and their adventures, Morty! Rick and Morty forever and forever, 100 years, Rick and Morty's things! Me and Rick and Morty running around and... Rick and Morty time! All day long, forever... all- a hundred days! Rick and Morty forever a hundred times! Over and over.."`
]

const desc = {
  'rick': 'Rick C-137',
  'morty': 'Morty C-137',
  'summer': 'Summer C-137',
  'beth': 'Beth C-137'
}

const characters = [
  { 'id': 1,
    'name': 'Rick Sanchez',
    'url': urls['rick'],
    'pic': imgs['rick'],
    'desc': desc['rick']
  },
  {
    'id': 2,
    'name': 'Morty Smith',
    'url': urls['morty'],
    'pic': imgs['morty'],
    'desc': desc['morty']
  },
  {
    'id': 4,
    'name': 'Beth Smith',
    'url': urls['beth'],
    'pic': imgs['beth'],
    'desc': desc['beth']
  },
  {
    'id': 3,
    'name': 'Summer Smith',
    'url': urls['summer'],
    'pic': imgs['summer'],
    'desc': desc['summer']
  }
]

//const newCharacterObj = { name: "", pic: "", url: "", desc: ""}

// data part ends here

// react part starts here
const CharacterItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    pic: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('li', { className: 'CharacterItem'},
        React.createElement('h3', { className: 'CharacterItem-name'}, this.props.name),
        React.createElement('img', { src: this.props.pic}),
        React.createElement('br'),
        React.createElement('a', { href: this.props.url}, this.props.desc)
      )
    )
  }
})

const CharacterForm = React.createClass({
  propTypes: {
    profile: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'CharacterForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Mr. Smith',
          value: this.props.profile.name
        }),
        React.createElement('br'),
        React.createElement('input', {
          type: 'text',
          placeholder: 'full url to profile/page',
          value: this.props.profile.url
        }),
        React.createElement('br'),
        React.createElement('input', {
          type: 'text',
          placeholder: 'full url to img.png/jpeg',
          value: this.props.profile.pic
        }),
        React.createElement('br'),
        React.createElement('input', {
          type: 'text',
          placeholder: 'C-137 Mr.Smith',
          value: this.props.profile.desc
        }),
        React.createElement('br'),
        React.createElement('button', { type: 'submit'}, 'Add Character')
      )
    )
  }
})

const CharacterView = React.createClass({
  propTypes: {
    characters: React.PropTypes.array.isRequired,
    newCharacter: React.PropTypes.object.isRequired
  },

  render: function() {
    const characterItems = this.props.characters
      .filter(function(character) { return character.url })
      .map(function(character) { return React.createElement(CharacterItem, character) })

    return (
      React.createElement('div', { className: 'Character-div'},
        React.createElement('h1', { className: 'Character-title'}, 'Rick and Morty !!'),
        React.createElement('p', { className: 'quote-character'}, 'Rick: '),
        React.createElement('p', { className: 'quote'}, quotes[0]),
        React.createElement('ul', { className: 'Character-list'}, characterItems),
        React.createElement(CharacterForm, { profile: this.props.newCharacter})
      )
    )
  }
})

ReactDOM.render(
  React.createElement(CharacterView,
    {
      characters: characters,
      newCharacter: {}//newCharacterObj
    }
  ),
  document.getElementById('react-app')
)