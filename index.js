import { app, h } from 'hyperapp'

const state = {}
const actions = {}

const component = () => h('main', { class: 'main' },
  h('div', { class: 'content' }, [
    h('h1', { class: 'title' }, 'hello'),
    h('p', {}, 'My name is Jonas.'),
    h('p', {}, [
      ' I\'m a tech lead and developer at ',
      h('a', { href: 'https://www.jayway.com/' }, 'Jayway'),
      ' in Malmö, Sweden.'
    ]),
    h('ul', {}, [
      h('li', {}, h('a', { href: 'https://github.com/jonasstenberg' }, 'github')),
      h('li', {}, h('a', { href: 'https://www.linkedin.com/in/jonasstenberg/' }, 'linkedin'))
    ])
  ]))

app(
  state,
  actions,
  component,
  document.body
)
