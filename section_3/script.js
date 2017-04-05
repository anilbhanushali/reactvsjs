console.log(React)
console.log(ReactDOM)

const render = () => {
  const jsContainer = document.getElementById('js')
  jsContainer.innerHTML = `<div class="demo">
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
angular.module('myApp', [])
    .run(function () {

    })
    .directive('angularContainer', function () {
      return {
        restrict: 'E',
        scope: {},
        controller: function ($scope, $element, $interval) {
          $scope.now = new Date()
          $interval(function () {
            $scope.now = new Date()
          }, 1000)
        },
        template: `<div class="demo">
    Hello Angular
    <input/>
    <p>{{now.toString()}}</p>
  </div>`,
        replace: true
      }
    })
