$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now).toLocaleString('en'));
        }
    });
});




/*function myFunction(x) {
    x.classList.toggle("change");
} */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

// Close the dropdown if the user clicks outside of it
/* window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} */

function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.zIndex = "-100";
    document.getElementById("menu").setAttribute( "onClick", "javascript: closeNav();" );
    document.getElementById("logo").style.zIndex = "10000";

    document.getElementById("myNav2").style.height = "100%";
    document.getElementById("myNav2").style.zIndex = "-100";

    document.getElementById("menu").classList.toggle("change");







}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.zIndex = "-100";
    document.getElementById("menu").setAttribute( "onClick", "javascript: openNav();" );
    document.getElementById("logo").style.zIndex = "10000";

    document.getElementById("myNav2").style.height = "0%";
    document.getElementById("myNav2").style.zIndex = "-100";

    document.getElementById("menu").classList.toggle("change");




}

