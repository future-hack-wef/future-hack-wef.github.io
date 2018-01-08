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


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

/* Get the element with id="defaultOpen" and click on it */
document.getElementById("defaultOpen").click();


/* Ethereum Tip Button */
/*
var tipButton = document.querySelector('.tip-button')
tipButton.addEventListener('click', function() {
  if (typeof web3 === 'undefined') {
    return renderMessage('You need to install MetaMask to use this feature.  https://metamask.io')
  }

  var user_address = web3.eth.accounts[0]
  web3.eth.sendTransaction({
    to: YOUR_ADDRESS,
    from: user_address,
    value: web3.toWei('1', 'ether'),
  }, function (err, transactionHash) {
    if (err) return renderMessage('Oh no!: ' + err.message)

    // If you get a transactionHash, you can assume it was sent,
    // or if you want to guarantee it was received, you can poll
    // for that transaction to be mined first.
    renderMessage('Thanks!')
  })
}) */

