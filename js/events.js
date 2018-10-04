//define functions here

$(document).ready(function(){
  mocha.run()
  getIt()
  frameIt()
  pressIt()
//   submitIt()

});

function getIt() {
  $('p').on('clear click', (event) => {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', () => {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $(document).on('keydown', (key) => {
    console.log(key.key)
    console.log(key.which);
  })
}

// function submitIt() {
//   $('form').on('submit', () => {
//       alert('Your form is going to be submitted now.')
//       // return
//   })
// }
