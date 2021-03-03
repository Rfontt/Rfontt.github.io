var buttonReturn = document.querySelector("#return");
var buttonNext = document.querySelector("#next");
var image = document.querySelector("#imageappstore");

let index_in = 0;

const All_images = [
	{
		img: "../../images/AppStore/Customers.jpg"
	},

	{
		img: "../../images/AppStore/deleteCustomer.jpg"
	}
]

function Load(index_in) {
	image.src = All_images[index_in].img;
}

Load(index_in);

function Return() {
	if (index_in > 0) {
		index_in -= 1;
		Load(index_in);
	}else {
		index_in = All_images.length;
		Load(index_in);
	}
}

function Next() {
	if (index_in < All_images.length -1) {
		index_in += 1;
		Load(index_in);
	}else {
		index_in = 0;
		Load(index_in);
	}
}

buttonReturn.addEventListener("click", Return);
buttonNext.addEventListener("click", Next);
