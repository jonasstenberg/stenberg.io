import { h } from 'hyperapp'

export default (state, actions) => h('main', {}, [
  h('div', {}, [
    h('h1', {}, 'Hello'),
    h('p', {}, [
      'My name is Jonas. I\'m a developer at ',
      h('a', { href: 'https://www.jayway.com/' }, 'Jayway'),
      ' in Malmö, Sweden.'
    ])
  ]),
  h('div', {}, [
    h('h3', { class: 'heading__social' }, 'Social'),
    h('ul', {}, [
      h('li', {}, h('a', { href: 'https://github.com/jonasstenberg' }, 'github')),
      h('li', {}, h('a', { href: 'https://www.linkedin.com/in/jonasstenberg/' }, 'linkedin'))
    ])
  ])
])
