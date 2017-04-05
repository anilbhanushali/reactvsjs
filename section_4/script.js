console.log(React)
console.log(ReactDOM)
const list = ['apple', 'banana', 'mango'];
let add = true;

setInterval(function(){
  if(add){
    list.push('orange')
  }else{
    list.pop()
  }
  add = !add
},1000);

const render = () => {
  const jsContainer = document.getElementById('js')
  const listMarkup = `<ul>
      ${list.map(item => `<li>
        ${item}
        </li>`).join('')}
    </ul>`

  jsContainer.innerHTML = `<div class="demo">
    Hello JS
    <input/>
    <p>${new Date()}</p>
    ${listMarkup}
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
        $scope.list = list
        $interval(function () {
          $scope.now = new Date()
        }, 1000)
      },
      template: `<div class="demo">
    Hello Angular
    <input/>
    <p>{{now.toString()}}</p>
    <ul><li ng-repeat="item in list">{{item}}</li></ul>
  </div>`,
      replace: true
    }
  })
