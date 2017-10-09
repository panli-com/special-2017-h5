//main  
// ;
(function() {
  // Create an instance of Notyf
  // var notyf = new Notyf();

  window.onload = function() {

    FastClick.attach(document.body);

    var oneSrc = document.getElementById("one-src").src + '?v'
    var time = new Date().getTime()
   
    var oneBox = document.getElementById("one-box")
    var src = oneSrc + time 
    var str = '<img src="'+ src +'" />'

    oneBox.innerHTML = str
  }
})()