// let img = document.querySelector('img');
let div1 = document.querySelector('#overflex');
let i = 0;
let j = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let two = 0;

let im = document.querySelectorAll('.images');

for (let index = 0; index < 7; index++) {
	im[index].addEventListener('click', function () {
		let arrow_left = document.createElement('img');
		div1.appendChild(arrow_left);
		arrow_left.setAttribute('src', 'arrow-left-01-512.png');
		arrow_left.setAttribute('class', 'left-arrow');

		let arrow_right = document.createElement('img');
		div1.appendChild(arrow_right);
		arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
		arrow_right.setAttribute('class', 'right-arrow');

		let cross = document.createElement('img');
		div1.appendChild(cross);
		cross.setAttribute('src', 'cross.jpg');
		cross.setAttribute('class', 'crosshai');
	});
}

// cross.addEventListener('click', function () {
// 	div1.innerHTML = '';
// });

// im[0].addEventListener('click', function () {
// 	let arrow_left = document.createElement('img');
// 	div1.appendChild(arrow_left);
// 	arrow_left.setAttribute('src', 'arrow-left-01-512.png');
// 	arrow_left.setAttribute('class', 'left-arrow');

// 	let arrow_right = document.createElement('img');
// 	div1.appendChild(arrow_right);
// 	arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
// 	arrow_right.setAttribute('class', 'right-arrow');
// });
// im[1].addEventListener('click', function () {
// 	let arrow_left = document.createElement('img');
// 	div1.appendChild(arrow_left);
// 	arrow_left.setAttribute('src', 'arrow-left-01-512.png');
// 	arrow_left.setAttribute('class', 'left-arrow');

// 	let arrow_right = document.createElement('img');
// 	div1.appendChild(arrow_right);
// 	arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
// 	arrow_right.setAttribute('class', 'right-arrow');
// });

// im[2].addEventListener('click', function () {
// 	let arrow_left = document.createElement('img');
// 	div1.appendChild(arrow_left);
// 	arrow_left.setAttribute('src', 'arrow-left-01-512.png');
// 	arrow_left.setAttribute('class', 'left-arrow');

// 	let arrow_right = document.createElement('img');
// 	div1.appendChild(arrow_right);
// 	arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
// 	arrow_right.setAttribute('class', 'right-arrow');
// });
// im[3].addEventListener('click', function () {
// 	let arrow_left = document.createElement('img');
// 	div1.appendChild(arrow_left);
// 	arrow_left.setAttribute('src', 'arrow-left-01-512.png');
// 	arrow_left.setAttribute('class', 'left-arrow');

// 	let arrow_right = document.createElement('img');
// 	div1.appendChild(arrow_right);
// 	arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
// 	arrow_right.setAttribute('class', 'right-arrow');
// });
// im[4].addEventListener('click', function () {
// 	let arrow_left = document.createElement('img');
// 	div1.appendChild(arrow_left);
// 	arrow_left.setAttribute('src', 'arrow-left-01-512.png');
// 	arrow_left.setAttribute('class', 'left-arrow');

// 	let arrow_right = document.createElement('img');
// 	div1.appendChild(arrow_right);
// 	arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
// 	arrow_right.setAttribute('class', 'right-arrow');
// });

// im[5].addEventListener('click', function () {
// 	let arrow_left = document.createElement('img');
// 	div1.appendChild(arrow_left);
// 	arrow_left.setAttribute('src', 'arrow-left-01-512.png');
// 	arrow_left.setAttribute('class', 'left-arrow');

// 	let arrow_right = document.createElement('img');
// 	div1.appendChild(arrow_right);
// 	arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
// 	arrow_right.setAttribute('class', 'right-arrow');
// });

// im[6].addEventListener('click', function () {
// 	let arrow_left = document.createElement('img');
// 	div1.appendChild(arrow_left);
// 	arrow_left.setAttribute('src', 'arrow-left-01-512.png');
// 	arrow_left.setAttribute('class', 'left-arrow');

// 	let arrow_right = document.createElement('img');
// 	div1.appendChild(arrow_right);
// 	arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
// 	arrow_right.setAttribute('class', 'right-arrow');
// });

// arrow_left.setAttribute('id', 'l' + index);

// for (let index = 0; index < 7; index++) {
// 	im[index].addEventListener('click', function () {
// let arrow_left = document.createElement('img');
// div1.appendChild(arrow_left);
// arrow_left.setAttribute('src', 'arrow-left-01-512.png');
// arrow_left.setAttribute('class', 'left-arrow');
// arrow_left.setAttribute('id', 'l' + index);
// console.log(arrow_left.id);
// if (index != 0) {
// 	arrow_left.setAttribute('class', '$(index - 1)');
// } else {
// 	arrow_left.setAttribute('class', '6');
// }
// let arrow_right = document.createElement('img');
// div1.appendChild(arrow_right);
// arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
// arrow_right.setAttribute('class', 'right-arrow');
// arrow_right.setAttribute('id', 'r' + index);
// if (index != 6) {
// 	arrow_right.setAttribute('class', '$(index + 1)');
// } else {
// 	arrow_right.setAttribute('class', '0');
// }
// let left = document.getElementById('l' + index);
// left.addEventListener('click', function () {
//     left.id.setAttribute('src', 'taj mahal.jpg');
//     left.id.setAttribute('id', 'i' + (index-1));
//     left.id.setAttribute('class', 'overimg');
// });
// break;
// }

if (i == 0) {
	document.getElementById('I0').addEventListener('click', function () {
		let i0 = document.createElement('img');
		div1.appendChild(i0);
		i0.setAttribute('src', 'GWOH.jpg');
		i0.setAttribute('id', 'i0');
		i0.setAttribute('class', 'overimg');

		// let arrow_left = document.createElement('img');
		// div1.appendChild(arrow_left);
		// arrow_left.setAttribute('src', 'arrow-left-01-512.png');
		// arrow_left.setAttribute('class', 'left-arrow');

		// let arrow_right = document.createElement('img');
		// div1.appendChild(arrow_right);
		// arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
		// arrow_right.setAttribute('class', 'right-arrow');
		// arrow_right.setAttribute('id', 'r' + index);
		img0();
		// i = 1;
		// let j = 1;
		// div1.innerHTML = '<img src="arrow-left-01-512.png" alt="" id="left-arrow" /> <img src="next+right+icon-1320166862802397293.png" alt="" id="right-arrow" />';
	});

	i = 1000;

	// console.log(i);
}

// document.getElementById('i0').addEventListener('mouseover', function () {
//
// })

if (j == 0) {
	document.getElementById('I1').addEventListener('click', function () {
		let i1 = document.createElement('img');
		div1.appendChild(i1);
		i1.setAttribute('src', 'chicken itza.jpg');
		i1.setAttribute('id', 'i1');
		i1.setAttribute('class', 'overimg');
		// let arrow_left = document.createElement('img');
		// div1.appendChild(arrow_left);
		// arrow_left.setAttribute('src', 'arrow-left-01-512.png');
		// arrow_left.setAttribute('class', 'left-arrow');
		// let arrow_right = document.createElement('img');
		// div1.appendChild(arrow_right);
		// arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
		// arrow_right.setAttribute('class', 'right-arrow');
		// arrow_right.setAttribute('id', 'r' + index);
		img1();

		//     leftlab1:
	});

	j = 1000;
}

if (two == 0) {
	document.getElementById('I2').addEventListener('click', function () {
		let i2 = document.createElement('img');
		div1.appendChild(i2);
		i2.setAttribute('src', 'christ the redeemer.jpg');
		i2.setAttribute('id', 'i2');
		i2.setAttribute('class', 'overimg');
		// let arrow_left = document.createElement('img');
		// div1.appendChild(arrow_left);
		// arrow_left.setAttribute('src', 'arrow-left-01-512.png');
		// arrow_left.setAttribute('class', 'left-arrow');
		// let arrow_right = document.createElement('img');
		// div1.appendChild(arrow_right);
		// arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
		// arrow_right.setAttribute('class', 'right-arrow');
		// arrow_right.setAttribute('id', 'r' + index);
		img2();
	});
	two = 1000;
}
if (three == 0) {
	document.getElementById('I3').addEventListener('click', function () {
		let i3 = document.createElement('img');
		div1.appendChild(i3);
		i3.setAttribute('src', 'colosseum.jpg');
		i3.setAttribute('id', 'i3');
		i3.setAttribute('class', 'overimg');
		// let arrow_left = document.createElement('img');
		// div1.appendChild(arrow_left);
		// arrow_left.setAttribute('src', 'arrow-left-01-512.png');
		// arrow_left.setAttribute('class', 'left-arrow');
		// let arrow_right = document.createElement('img');
		// div1.appendChild(arrow_right);
		// arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
		// arrow_right.setAttribute('class', 'right-arrow');
		// arrow_right.setAttribute('id', 'r' + index);
		img3();
	});
	three = 1000;
}

if (four == 0) {
	document.getElementById('I4').addEventListener('click', function () {
		let i4 = document.createElement('img');
		div1.appendChild(i4);
		i4.setAttribute('src', 'machu picchu.jpg');
		i4.setAttribute('id', 'i4');
		i4.setAttribute('class', 'overimg');
		// let arrow_left = document.createElement('img');
		// div1.appendChild(arrow_left);
		// arrow_left.setAttribute('src', 'arrow-left-01-512.png');
		// arrow_left.setAttribute('class', 'left-arrow');
		// let arrow_right = document.createElement('img');
		// div1.appendChild(arrow_right);
		// arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
		// arrow_right.setAttribute('class', 'right-arrow');
		// arrow_right.setAttribute('id', 'r' + index);
		img4();
	});
	four = 1000;
}

if (five == 0) {
	document.getElementById('I5').addEventListener('click', function () {
		let i5 = document.createElement('img');
		div1.appendChild(i5);
		i5.setAttribute('src', 'petra.jpg');
		i5.setAttribute('id', 'i5');
		i5.setAttribute('class', 'overimg');
		// let arrow_left = document.createElement('img');
		// div1.appendChild(arrow_left);
		// arrow_left.setAttribute('src', 'arrow-left-01-512.png');
		// arrow_left.setAttribute('class', 'left-arrow');
		// let arrow_right = document.createElement('img');
		// div1.appendChild(arrow_right);
		// arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
		// arrow_right.setAttribute('class', 'right-arrow');
		img5();
		// arrow_right.setAttribute('id', 'r' + index);
	});
	five = 1000;
}

if (six == 0) {
	document.getElementById('I6').addEventListener('click', function () {
		let i6 = document.createElement('img');
		div1.appendChild(i6);
		i6.setAttribute('src', 'taj mahal.jpg');
		i6.setAttribute('id', 'i6');
		i6.setAttribute('class', 'overimg');
		// let arrow_left = document.createElement('img');
		// div1.appendChild(arrow_left);
		img6();
		// arrow_left.setAttribute('src', 'arrow-left-01-512.png');
		// arrow_left.setAttribute('class', 'left-arrow');
		// let arrow_right = document.createElement('img');
		// div1.appendChild(arrow_right);
		// arrow_right.setAttribute('src', 'next+right+icon-1320166862802397293.png');
		// arrow_right.setAttribute('class', 'right-arrow');
		// arrow_right.setAttribute('id', 'r' + index);
	});
	six = 1000;
}

// let over = document.querySelectorAll('.overimg')

// console.log(div1);

function img0() {
	let left0 = document.getElementsByClassName('left-arrow');
	left0[0].addEventListener('click', function () {
		i0.setAttribute('src', 'taj mahal.jpg');
		i0.setAttribute('id', 'i6');
		// console.log('clicked');
		img6();
		// arrow_left.setAttribute('id', 'l6');
		// console.log(left.id);
		// let left = document.getElementById('l6');

		// break;
		// continue leftlab1
	});

	let right0 = document.getElementsByClassName('right-arrow');
	right0[0].addEventListener('click', function () {
		i0.setAttribute('src', 'chicken itza.jpg');
		i0.setAttribute('id', 'i1');
		img1();
		// right.id = 'r1';
		// arrow_right.setAttribute('id', 'r1');
		// break;
		// let right = document.getElementById('r1');
		// right.addEventListener('click', function () {
		// 	i1.setAttribute('src', 'christ the redeemer.jpg');
		// 	i1.setAttribute('id', 'i2');
	});

	let cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img1() {
	let left1 = document.getElementsByClassName('left-arrow');
	left1[0].addEventListener('click', function () {
		i1.setAttribute('src', 'GWOH.jpg');
		i1.setAttribute('id', 'i0');
		img0();
		// break;
		// left.id = 'l0';
	});

	let right1 = document.getElementsByClassName('right-arrow');
	right1[0].addEventListener('click', function () {
		i1.setAttribute('src', 'christ the redeemer.jpg');
		i1.setAttribute('id', 'i2');
		img2();
		// break;
		// right.id = '2';
	});
	let cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img2() {
	let left2 = document.getElementsByClassName('left-arrow');
	left2[0].addEventListener('click', function () {
		i2.setAttribute('src', 'chicken itza.jpg');
		i2.setAttribute('id', 'i1');
		img1();
		// break;
		// left.id = 'l0';
	});

	let right2 = document.getElementsByClassName('right-arrow');
	right2[0].addEventListener('click', function () {
		i2.setAttribute('src', 'colosseum.jpg');
		i2.setAttribute('id', 'i3');
		img3();
		// break;
		// right.id = '2';
	});
	let cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img3() {
	let left3 = document.getElementsByClassName('left-arrow');
	left3[0].addEventListener('click', function () {
		i3.setAttribute('src', 'christ the redeemer.jpg');
		i3.setAttribute('id', 'i2');
		img2();
		// break;
		// left.id = 'l0';
	});

	let right3 = document.getElementsByClassName('right-arrow');
	right3[0].addEventListener('click', function () {
		i3.setAttribute('src', 'machu picchu.jpg');
		i3.setAttribute('id', 'i4');
		img4();
		// break;
		// right.id = '2';
	});
	let cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img4() {
	let left4 = document.getElementsByClassName('left-arrow');
	left4[0].addEventListener('click', function () {
		i4.setAttribute('src', 'colosseum.jpg');
		i4.setAttribute('id', 'i3');
		img3();
		// break;
		// left.id = 'l0';
	});

	let right4 = document.getElementsByClassName('right-arrow');
	right4[0].addEventListener('click', function () {
		i4.setAttribute('src', 'petra.jpg');
		i4.setAttribute('id', 'i5');
		img5();
		// break;
		// right.id = '2';
	});
	let cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img5() {
	let left5 = document.getElementsByClassName('left-arrow');
	left5[0].addEventListener('click', function () {
		i5.setAttribute('src', 'machu picchu.jpg');
		i5.setAttribute('id', 'i4');
		img4();
		// break;
		// left.id = 'l0';
	});

	let right5 = document.getElementsByClassName('right-arrow');
	right5[0].addEventListener('click', function () {
		i5.setAttribute('src', 'taj mahal.jpg');
		i5.setAttribute('id', 'i6');
		img6();
		// break;
		// right.id = '2';
	});
	let cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}

function img6() {
	let left6 = document.getElementsByClassName('left-arrow');
	left6[0].addEventListener('click', function () {
		i6.setAttribute('src', 'petra.jpg');
		i6.setAttribute('id', 'i5');
		img5();
		// break;
		// left.id = 'l0';
	});

	let right6 = document.getElementsByClassName('right-arrow');
	right6[0].addEventListener('click', function () {
		i6.setAttribute('src', 'GWOH.jpg');
		i6.setAttribute('id', 'i1');
		img1();
		// break;
		// right.id = '2';
	});
	let cross1 = document.querySelectorAll('.crosshai');
	cross1[0].addEventListener('click', function () {
		div1.innerHTML = '';
	});
}
