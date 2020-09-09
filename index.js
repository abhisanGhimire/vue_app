var app = new Vue({
	el: "#app",
	data: {
		product: "Socks",
		image: "./greenSocks.jpg",
		inStock: false,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 1,
				variantColor: "green",
				variantImage: "./greenSocks.jpg",
			},
			{
				variantId: 2,
				variantColor: "blue",
				variantImage: "./blueSocks.jpg",
			},
		],
		cart: 0,
	},
	methods: {
		addToCart() {
			this.cart += 1;
		},
		updateProduct(variantImage) {
			this.image = variantImage;
		},
	},
});
