// Get the modal
var modal = document.getElementsByClassName('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

function cuurentBlock(n){
    show(indexC = n);
}

function show(indexC){
    modal[indexC].style.display = "flex";

    span[indexC].onclick = function() {
        modal[indexC].style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal[indexC]) {
            modal[indexC].style.display = "none";
        }
    };
}