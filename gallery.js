// var img = document.querySelector('img');
var div1 = document.querySelector('#overflex');
var i = 0;
var j = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var two = 0;
var im = document.querySelectorAll('.images');

for (var index = 0; index < 7; index++) {
	im[index].addEventListener('click', function () {
		var arrow_left = document.createElement('img');
		div1.appendChild(arrow_left);
		arrow_left.setAttribute('src', 'arrow-left-01-512.png');
		arrow_left.setAttribute('class', 'left-arrow');

		var arrow_right = document.createElement('img');
		div1.appendChild(arrow_right);
		arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
		arrow_right.setAttribute('class', 'right-arrow');

		var cross = document.createElement('img');
		div1.appendChild(cross);
		cross.setAttribute('src', 'cross.jpg');
		cross.setAttribute('class', 'crosshai');
	});
}

if (i == 0) {
	document.getElementById('I0').addEventListener('click', function () {
		var i0 = document.createElement('img');
		div1.appendChild(i0);
		i0.setAttribute('src', 'GWOH.jpg');
		i0.setAttribute('id', 'i0');
		i0.setAttribute('class', 'overimg');

		img0();
	});
	i = 1000;
}

if (j == 0) {
	document.getElementById('I1').addEventListener('click', function () {
		var i1 = document.createElement('img');
		div1.appendChild(i1);
		i1.setAttribute('src', 'chicken itza.jpg');
		i1.setAttribute('id', 'i1');
		i1.setAttribute('class', 'overimg');
		img1();
	});
	j = 1000;
}

if (two == 0) {
	document.getElementById('I2').addEventListener('click', function () {
		var i2 = document.createElement('img');
		div1.appendChild(i2);
		i2.setAttribute('src', 'christ the redeemer.jpg');
		i2.setAttribute('id', 'i2');
		i2.setAttribute('class', 'overimg');
		img2();
	});
	two = 1000;
}
if (three == 0) {
	document.getElementById('I3').addEventListener('click', function () {
		var i3 = document.createElement('img');
		div1.appendChild(i3);
		i3.setAttribute('src', 'colosseum.jpg');
		i3.setAttribute('id', 'i3');
		i3.setAttribute('class', 'overimg');
		img3();
	});
	three = 1000;
}

if (four == 0) {
	document.getElementById('I4').addEventListener('click', function () {
		var i4 = document.createElement('img');
		div1.appendChild(i4);
		i4.setAttribute('src', 'machu picchu.jpg');
		i4.setAttribute('id', 'i4');
		i4.setAttribute('class', 'overimg');
		img4();
	});
	four = 1000;
}

if (five == 0) {
	document.getElementById('I5').addEventListener('click', function () {
		var i5 = document.createElement('img');
		div1.appendChild(i5);
		i5.setAttribute('src', 'petra.jpg');
		i5.setAttribute('id', 'i5');
		i5.setAttribute('class', 'overimg');
		img5();
	});
	five = 1000;
}

if (six == 0) {
	document.getElementById('I6').addEventListener('click', function () {
		var i6 = document.createElement('img');
		div1.appendChild(i6);
		i6.setAttribute('src', 'taj mahal.jpg');
		i6.setAttribute('id', 'i6');
		i6.setAttribute('class', 'overimg');
		img6();
	});
	six = 1000;
}

function img0() {
	var left0 = document.getElementsByClassName('left-arrow');
	left0[0].addEventListener('click', function () {
		i0.setAttribute('src', 'taj mahal.jpg');
		i0.setAttribute('id', 'i6');
		img6();
	});

	var right0 = document.getElementsByClassName('right-arrow');
	right0[0].addEventListener('click', function () {
		i0.setAttribute('src', 'chicken itza.jpg');
		i0.setAttribute('id', 'i1');
		img1();
	});

	var cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img1() {
	var left1 = document.getElementsByClassName('left-arrow');
	left1[0].addEventListener('click', function () {
		i1.setAttribute('src', 'GWOH.jpg');
		i1.setAttribute('id', 'i0');
		img0();
	});

	var right1 = document.getElementsByClassName('right-arrow');
	right1[0].addEventListener('click', function () {
		i1.setAttribute('src', 'christ the redeemer.jpg');
		i1.setAttribute('id', 'i2');
		img2();
	});

	var cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img2() {
	var left2 = document.getElementsByClassName('left-arrow');
	left2[0].addEventListener('click', function () {
		i2.setAttribute('src', 'chicken itza.jpg');
		i2.setAttribute('id', 'i1');
		img1();
	});

	var right2 = document.getElementsByClassName('right-arrow');
	right2[0].addEventListener('click', function () {
		i2.setAttribute('src', 'colosseum.jpg');
		i2.setAttribute('id', 'i3');
		img3();
	});

	var cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img3() {
	var left3 = document.getElementsByClassName('left-arrow');
	left3[0].addEventListener('click', function () {
		i3.setAttribute('src', 'christ the redeemer.jpg');
		i3.setAttribute('id', 'i2');
		img2();
	});

	var right3 = document.getElementsByClassName('right-arrow');
	right3[0].addEventListener('click', function () {
		i3.setAttribute('src', 'machu picchu.jpg');
		i3.setAttribute('id', 'i4');
		img4();
	});

	var cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img4() {
	var left4 = document.getElementsByClassName('left-arrow');
	left4[0].addEventListener('click', function () {
		i4.setAttribute('src', 'colosseum.jpg');
		i4.setAttribute('id', 'i3');
		img3();
	});

	var right4 = document.getElementsByClassName('right-arrow');
	right4[0].addEventListener('click', function () {
		i4.setAttribute('src', 'petra.jpg');
		i4.setAttribute('id', 'i5');
		img5();
	});

	var cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img5() {
	var left5 = document.getElementsByClassName('left-arrow');
	left5[0].addEventListener('click', function () {
		i5.setAttribute('src', 'machu picchu.jpg');
		i5.setAttribute('id', 'i4');
		img4();
	});

	var right5 = document.getElementsByClassName('right-arrow');
	right5[0].addEventListener('click', function () {
		i5.setAttribute('src', 'taj mahal.jpg');
		i5.setAttribute('id', 'i6');
		img6();
	});

	var cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img6() {
	var left6 = document.getElementsByClassName('left-arrow');
	left6[0].addEventListener('click', function () {
		i6.setAttribute('src', 'petra.jpg');
		i6.setAttribute('id', 'i5');
		img5();
	});

	var right6 = document.getElementsByClassName('right-arrow');
	right6[0].addEventListener('click', function () {
		i6.setAttribute('src', 'GWOH.jpg');
		i6.setAttribute('id', 'i1');
		img1();
	});

	var cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}
