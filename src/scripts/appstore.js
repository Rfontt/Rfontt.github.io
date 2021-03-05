var buttonReturn = document.querySelector("#return");
var buttonNext = document.querySelector("#next");
var image = document.querySelector("img");

let index_in = 0;

const All_images = [
	{
		img: "../../images/AppStore/SplashScreen.jpg"
	},

	{
		img: "../../images/AppStore/login.jpg"
	},

	{
		img: "../../images/AppStore/recoverPassword.jpg"
	},

	{
		img: "../../images/AppStore/home.jpg"
	},

	{
		img: "../../images/AppStore/Customers.jpg"
	},

	{
		img: "../../images/AppStore/newCustomer.jpg"
	},

	{
		img: "../../images/AppStore/deleteCustomer.jpg"
	},

	{
		img: "../../images/AppStore/newPurchase.jpg"
	},

	{
		img: "../../images/AppStore/updatePurchase.jpg"
	},

	{
		img: "../../images/AppStore/Users.jpg"
	},
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
