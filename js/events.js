//define functions here

$(document).ready(function(){
//   getIt()
//   frameIt()
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
    if (key.key === 'g') {
      alert('You pressed the G key.')
    }
  })
}

// function submitIt() {
//   $('form').on('submit', () => {
//       alert('Your form is going to be submitted now.')
//       // return
//   })
// }
