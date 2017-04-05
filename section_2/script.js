console.log(React)
console.log(ReactDOM)

const render = () => {
  const jsContainer = document.getElementById('js')
  jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
    <input/>
    <p>${new Date()}</p>
  </div>
`

  const reactContainer = document.getElementById('react')
  ReactDOM.render(
        React.createElement(
            'div',
            { className: 'demo' },
            'Hello REACT',
            React.createElement('input'),
            React.createElement(
                'p',
                null,
                new Date().toString()
            )
        ),
        reactContainer
    )
}

setInterval(render, 1000)
