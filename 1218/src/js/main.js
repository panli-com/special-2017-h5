//main  
// ;
(function() {
  // Create an instance of Notyf
  // var notyf = new Notyf();

  window.onload = function() {

    FastClick.attach(document.body);

    PD(".nav-box").on("click", "li", function() {
      var navs = PD(".nav-box li").removeClass("on")
      var vm = PD(this)
      vm.addClass("on")
      var floors = PD(".floor")
      floors.hide()
      var index = PD(this).index() + 1
      console.log(index)
      PD("#floor_" + index).show()
    })
  }
})()