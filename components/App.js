import { h } from 'hyperapp'

export default (state, actions) => h('main', { class: 'main' },
  h('div', { class: 'content' }, [
    h('h1', { class: 'hello' }, 'hello'),
    h('p', {}, 'My name is Jonas.'),
    h('p', {}, [
      ' I\'m a developer at ',
      h('a', { href: 'https://www.jayway.com/' }, 'Jayway'),
      ' in Malmö, Sweden.'
    ]),
    h('div', {}, [
      h('ul', {}, [
        h('li', {}, h('a', { href: 'https://github.com/jonasstenberg' }, 'github')),
        h('li', {}, h('a', { href: 'https://www.linkedin.com/in/jonasstenberg/' }, 'linkedin'))
      ])
    ])
  ]))
