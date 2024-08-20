// export const plans = [
// 	{
// 		videos: 3,
// 		price: 4000,
// 		reach: {
// 			price: 12000,
// 			discount: 1800,
// 			finalPrice: 10200,
// 			perVideoCost: 3400,
// 		},
// 		influencers: {
// 			nano: 3400,
// 			micro: 6800,
// 			macro: 13600,
// 			mega: 34000,
// 			millionClub: 85000,
// 		},
// 	},
// 	{
// 		videos: 10,
// 		price: 4000,
// 		reach: {
// 			price: 40000,
// 			discount: 7200,
// 			finalPrice: 32800,
// 			perVideoCost: 3280,
// 		},
// 		influencers: {
// 			nano: 3280,
// 			micro: 6560,
// 			macro: 13120,
// 			mega: 32800,
// 			millionClub: 82000,
// 		},
// 	},
// 	{
// 		videos: 25,
// 		price: 4000,
// 		reach: {
// 			price: 100000,
// 			discount: 22000,
// 			finalPrice: 78000,
// 			perVideoCost: 3120,
// 		},
// 		influencers: {
// 			nano: 3120,
// 			micro: 6240,
// 			macro: 12480,
// 			mega: 31200,
// 			millionClub: 78000,
// 		},
// 	},
// 	{
// 		videos: 50,
// 		price: 4000,
// 		reach: {
// 			price: 200000,
// 			discount: 50000,
// 			finalPrice: 150000,
// 			perVideoCost: 3000,
// 		},
// 		influencers: {
// 			nano: 3000,
// 			micro: 6000,
// 			macro: 12000,
// 			mega: 30000,
// 			millionClub: 75000,
// 		},
// 	},
// 	{
// 		videos: 100,
// 		price: 4000,
// 		reach: {
// 			price: 400000,
// 			discount: 120000,
// 			finalPrice: 280000,
// 			perVideoCost: 2800,
// 		},
// 		influencers: {
// 			nano: 2800,
// 			micro: 5600,
// 			macro: 11200,
// 			mega: 28000,
// 			millionClub: 70000,
// 		},
// 	},
// ]

export const plans = [
	{
		videos: 3,
		price: 4000,
		reach: {
			price: 12000,
			discount: 1800,
			finalPrice: 10200,
			perVideoCost: 3400,
		},
		influencers: {
			nano: 3400,
			micro: 6800,
			macro: 13600,
			mega: 34000,
			millionClub: 85000,
		},
		discountPercentage: Math.round((1800 / 12000) * 100), // Calculate discount percentage
	},
	{
		videos: 10,
		price: 4000,
		reach: {
			price: 40000,
			discount: 7200,
			finalPrice: 32800,
			perVideoCost: 3280,
		},
		influencers: {
			nano: 3280,
			micro: 6560,
			macro: 13120,
			mega: 32800,
			millionClub: 82000,
		},
		discountPercentage: Math.round((7200 / 40000) * 100), // Calculate discount percentage
	},
	{
		videos: 25,
		price: 4000,
		reach: {
			price: 100000,
			discount: 22000,
			finalPrice: 78000,
			perVideoCost: 3120,
		},
		influencers: {
			nano: 3120,
			micro: 6240,
			macro: 12480,
			mega: 31200,
			millionClub: 78000,
		},
		discountPercentage: Math.round((22000 / 100000) * 100), // Calculate discount percentage
	},
	{
		videos: 50,
		price: 4000,
		reach: {
			price: 200000,
			discount: 50000,
			finalPrice: 150000,
			perVideoCost: 3000,
		},
		influencers: {
			nano: 3000,
			micro: 6000,
			macro: 12000,
			mega: 30000,
			millionClub: 75000,
		},
		discountPercentage: Math.round((50000 / 200000) * 100), // Calculate discount percentage
	},
	{
		videos: 100,
		price: 4000,
		reach: {
			price: 400000,
			discount: 120000,
			finalPrice: 280000,
			perVideoCost: 2800,
		},
		influencers: {
			nano: 2800,
			micro: 5600,
			macro: 11200,
			mega: 28000,
			millionClub: 70000,
		},
		discountPercentage: Math.round((120000 / 400000) * 100), // Calculate discount percentage
	},
]
