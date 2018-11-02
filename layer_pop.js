var ly = document.getElementById('layer-option');
var npop = document.getElementById('layer-pop');

function disappear() {
    npop.style.display = "none";
}

function popshow() {
	npop.style.display="block";
	countdown = setTimeout("disappear()", 3000);
}

function pophang() {
	clearTimeout(countdown);
	npop.style.display = "block";
}
