// import { useState } from "react"
// import { assects, brands } from "../assets/assect"
// import Navbar from "../components/Navbar"
// import styles from "./influencer.module.css"

// const steps = [
// 	{
// 		steps: "STEP 1",
// 		title: "pick influencers type",
// 	},
// 	{
// 		steps: "STEP 2",
// 		title: "pick influencers video",
// 	},
// 	{
// 		steps: "STEP 3",
// 		title: "submit request",
// 	},
// ]

// const influencerPricing = {
// 	nano: 4000,
// 	micro: 8000,
// 	macro: 16000,
// 	mega: 40000,
// 	millionClub: 100000,
// }

// const discountPlans = [
// 	{ videos: 3, discount: 0.15 },
// 	{ videos: 10, discount: 0.18 },
// 	{ videos: 25, discount: 0.22 },
// 	{ videos: 50, discount: 0.25 },
// 	{ videos: 100, discount: 0.3 },
// ]

// const Influencer = () => {
// 	const [selectedPlan, setSelectedPlan] = useState(3) // Default to Plan 1
// 	const [selectedInfluencerType, setSelectedInfluencerType] = useState("nano") // Default to Nano

// 	// Calculate the base price, discount, and final offered price
// 	const basePrice = influencerPricing[selectedInfluencerType]
// 	const selectedDiscountPlan = discountPlans.find(
// 		(plan) => plan.videos === selectedPlan
// 	)
// 	const discount = selectedDiscountPlan ? selectedDiscountPlan.discount : 0
// 	const totalValue = basePrice * selectedPlan
// 	const discountAmount = totalValue * discount
// 	const offeredPrice = totalValue - discountAmount
// 	const perVideoPrice = offeredPrice / selectedPlan

// 	return (
// 		<>
// 			<Navbar />
// 			<div className={styles.container}>
// 				<div className={styles.mainContainer}>
// 					<div className={styles.steps}>
// 						<div>
// 							<h4>STEP 1</h4>
// 							<hr />
// 							<p>pick influencers type</p>
// 						</div>
// 						<div>
// 							<h4>STEP 2</h4>
// 							<hr />
// 							<p>pick influencers video</p>
// 						</div>
// 						<div>
// 							<h4>STEP 2</h4>
// 							<hr />
// 							<p>
// 								submit <br /> request
// 							</p>
// 						</div>
// 					</div>
// 					{/* =========Pick influencer type=============== */}
// 					<h2 className={styles.pickInfluencer}>Pick influencer type</h2>
// 					<div className={styles.pickInfluencerType}>
// 						<div>
// 							<h3>Nano</h3>
// 							<p>
// 								{"<"}
// 								<span>20</span>K
// 							</p>
// 						</div>
// 						<div>
// 							<h3>Micro</h3>
// 							<p>
// 								{"<"}
// 								<span>100</span>K
// 							</p>
// 						</div>
// 						<div>
// 							<h3>Macro</h3>
// 							<p>
// 								{"<"}
// 								<span>500</span>K
// 							</p>
// 						</div>
// 						<div>
// 							<h3>Mega</h3>
// 							<p>
// 								{"<"}
// 								<span>1</span>M
// 							</p>
// 						</div>{" "}
// 						<div>
// 							<h3>M Club</h3>
// 							<p>
// 								{">"}
// 								<span>1</span>M
// 							</p>
// 						</div>
// 					</div>
// 					{/* =============Total influencers Videos+============ */}
// 					<div className={styles.influencerContent}>
// 						<h2>Total influencers Videos</h2>
// 						<div className={styles.selectNo}>
// 							<p>3</p>
// 							<p>10</p>
// 							<p>25</p>
// 							<div>
// 								<span>Popular</span>
// 								<p>50</p>
// 							</div>
// 							<p>100</p>
// 						</div>
// 						<h2 className={styles.nanoInfluencers}>
// 							{selectedInfluencerType.toUpperCase()} influencers
// 						</h2>
// 						<span className={styles.followers}>
// 							{" "}
// 							{
// 								{
// 									nano: "Less than 20K followers",
// 									micro: "Less than 100K followers",
// 									macro: "Less than 500K followers",
// 									mega: "Less than 1M followers",
// 									millionClub: "More than 1M followers",
// 								}[selectedInfluencerType]
// 							}
// 						</span>
// 						<div className={styles.pricingList}>
// 							<div className={styles.calculations}>
// 								<div className={styles.pricingValues}>
// 									<div>
// 										<img
// 											src={assects.playIcon}
// 											alt=""
// 										/>
// 										<p>Videos</p>
// 									</div>
// 									<p>3 X 4,000</p>
// 								</div>
// 								<div className={styles.pricingValues}>
// 									<div>
// 										<img
// 											src={assects.doller_icon}
// 											alt=""
// 										/>
// 										<p>Value</p>
// 									</div>
// 									<p>12,000</p>
// 								</div>
// 								<div className={styles.pricingValues}>
// 									<div>
// 										<img
// 											src={assects.discount_icon}
// 											alt="Discount"
// 										/>
// 										<p>
// 											Discount <span>(15%)</span>
// 										</p>
// 									</div>
// 									<p className={styles.totalGreen}>1,800</p>
// 								</div>
// 							</div>
// 							<div className={styles.totalCalculation}>
// 								<div className={styles.totalPriceValue}>
// 									<div className={styles.offeredPrice}>
// 										<img
// 											src={assects.etimateIcon}
// 											alt=""
// 										/>
// 										<p>Offered Price</p>
// 									</div>
// 									<p>10,200</p>
// 								</div>
// 								<div className={styles.totalPriceValue2}>
// 									<p>Per Video</p>
// 									<p>3400</p>
// 								</div>
// 							</div>
// 						</div>
// 						<h3 className={styles.savings}>
// 							You Saved <span>₹1800</span> with this plan
// 						</h3>
// 						<div className={styles.whatsapp}>
// 							<p> Send request</p>
// 							<img
// 								src={assects.whatsapp_icon}
// 								alt=""
// 							/>
// 						</div>
// 						<div className={styles.Gst}>
// 							<img
// 								src={assects.tixteenGif}
// 								alt=""
// 							/>
// 							<p>18% GST will be applied on final price</p>
// 						</div>
// 					</div>

// 					{/* ==================Widely recognized by=========== */}
// 					<div className={styles.recognization}>
// 						<h2>Widely recognized by</h2>
// 						<div>
// 							{brands.map((img, index) => (
// 								<img
// 									src={img}
// 									key={index}
// 									alt=""
// 								/>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default Influencer

// import React, { useState } from "react"
// import styles from "./influencer.module.css"

// const plans = [
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

// const Influencer = () => {
// 	const [selectedPlan, setSelectedPlan] = useState(3) // Default to Plan 1
// 	const [selectedInfluencerType, setSelectedInfluencerType] = useState("nano") // Default to Nano

// 	const handlePlanSelect = (planVideos) => {
// 		setSelectedPlan(planVideos)
// 	}

// 	const handleInfluencerTypeSelect = (type) => {
// 		setSelectedInfluencerType(type)
// 	}

// 	const selectedData = plans.find((plan) => plan.videos === selectedPlan)

// 	return (
// 		<>
// 			<div className={styles.container}>
// 				<div className={styles.mainContainer}>
// 					<h2 className={styles.pickInfluencer}>Pick influencer type</h2>
// 					<div className={styles.pickInfluencerType}>
// 						<div onClick={() => handleInfluencerTypeSelect("nano")}>
// 							<h3>Nano</h3>
// 							<p>
// 								{"<"}
// 								<span>20</span>K
// 							</p>
// 						</div>
// 						<div onClick={() => handleInfluencerTypeSelect("micro")}>
// 							<h3>Micro</h3>
// 							<p>
// 								{"<"}
// 								<span>100</span>K
// 							</p>
// 						</div>
// 						<div onClick={() => handleInfluencerTypeSelect("macro")}>
// 							<h3>Macro</h3>
// 							<p>
// 								{"<"}
// 								<span>500</span>K
// 							</p>
// 						</div>
// 						<div onClick={() => handleInfluencerTypeSelect("mega")}>
// 							<h3>Mega</h3>
// 							<p>
// 								{"<"}
// 								<span>1</span>M
// 							</p>
// 						</div>
// 						<div onClick={() => handleInfluencerTypeSelect("millionClub")}>
// 							<h3>M Club</h3>
// 							<p>
// 								{">"}
// 								<span>1</span>M
// 							</p>
// 						</div>
// 					</div>

// 					<h2>Total influencers Videos</h2>
// 					<div className={styles.selectNo}>
// 						<p onClick={() => handlePlanSelect(3)}>3</p>
// 						<p onClick={() => handlePlanSelect(10)}>10</p>
// 						<p onClick={() => handlePlanSelect(25)}>25</p>
// 						<div onClick={() => handlePlanSelect(50)}>
// 							<span>Popular</span>
// 							<p>50</p>
// 						</div>
// 						<p onClick={() => handlePlanSelect(100)}>100</p>
// 					</div>

// 					<h2 className={styles.nanoInfluencers}>
// 						{selectedInfluencerType.toUpperCase()} influencers
// 					</h2>
// 					<span className={styles.followers}>
// 						{
// 							{
// 								nano: "Less than 20K followers",
// 								micro: "Less than 100K followers",
// 								macro: "Less than 500K followers",
// 								mega: "Less than 1M followers",
// 								millionClub: "More than 1M followers",
// 							}[selectedInfluencerType]
// 						}
// 					</span>

// 					<div className={styles.pricingList}>
// 						<div className={styles.calculations}>
// 							<div className={styles.pricingValues}>
// 								<div>
// 									<img
// 										src="path/to/playIcon.png"
// 										alt="Videos"
// 									/>
// 									<p>Videos</p>
// 								</div>
// 								<p>
// 									{selectedData.videos} X {selectedData.price}
// 								</p>
// 							</div>
// 							<div className={styles.pricingValues}>
// 								<div>
// 									<img
// 										src="path/to/doller_icon.png"
// 										alt="Value"
// 									/>
// 									<p>Value</p>
// 								</div>
// 								<p>{selectedData.reach.price}</p>
// 							</div>
// 							<div className={styles.pricingValues}>
// 								<div>
// 									<img
// 										src="path/to/discount_icon.png"
// 										alt="Discount"
// 									/>
// 									<p>
// 										Discount <span>{selectedData.reach.discount}</span>
// 									</p>
// 								</div>
// 								<p className={styles.totalGreen}>
// 									{selectedData.reach.discount}
// 								</p>
// 							</div>
// 						</div>
// 						<div className={styles.totalCalculation}>
// 							<div className={styles.totalPriceValue}>
// 								<div className={styles.offeredPrice}>
// 									<img
// 										src="path/to/etimateIcon.png"
// 										alt="Offered Price"
// 									/>
// 									<p>Offered Price</p>
// 								</div>
// 								<p>{selectedData.reach.finalPrice}</p>
// 							</div>
// 							<div className={styles.totalPriceValue2}>
// 								<p>Per Video</p>
// 								<p>{selectedData.reach.perVideoCost}</p>
// 							</div>
// 						</div>
// 					</div>
// 					<h3 className={styles.savings}>
// 						You Saved <span>${selectedData.reach.discount}</span> with this plan
// 					</h3>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default Influencer

import { useState } from "react"
import { assects, brands } from "../assets/assect"
import Navbar from "../components/Navbar"
import styles from "./influencer.module.css"

const steps = [
	{
		steps: "STEP 1",
		title: "pick influencers type",
	},
	{
		steps: "STEP 2",
		title: "pick influencers video",
	},
	{
		steps: "STEP 3",
		title: "submit request",
	},
]

const influencerPricing = {
	nano: { price: 4000, followers: "<20K" },
	micro: { price: 8000, followers: "<100K" },
	macro: { price: 16000, followers: "<500K" },
	mega: { price: 40000, followers: "<1M" },
	millionClub: { price: 100000, followers: ">1M" },
}
const discountPlans = [
	{ videos: 3, discount: 0.15 },
	{ videos: 10, discount: 0.18 },
	{ videos: 25, discount: 0.22 },
	{ videos: 50, discount: 0.25 },
	{ videos: 100, discount: 0.3 },
]

const Influencer = () => {
	const [selectedPlan, setSelectedPlan] = useState(3) // Default to 3 videos
	const [selectedInfluencerType, setSelectedInfluencerType] = useState("nano") // Default to Nano

	// Calculate the base price, discount, and final offered price
	const basePrice = influencerPricing[selectedInfluencerType].price
	const selectedDiscountPlan = discountPlans.find(
		(plan) => plan.videos === selectedPlan
	)
	const discount = selectedDiscountPlan ? selectedDiscountPlan.discount : 0
	const totalValue = basePrice * selectedPlan
	const discountAmount = totalValue * discount
	const offeredPrice = totalValue - discountAmount
	const perVideoPrice = offeredPrice / selectedPlan

	const message = `
*Hi I am interested in this plan:*
Selected Influencer Type: ${selectedInfluencerType.toUpperCase()}
Number of Videos: ${selectedPlan}
Base Price per Video: ₹${basePrice.toLocaleString()}
Total Calculation: ₹${totalValue.toLocaleString()}
Discount: ₹${discountAmount.toLocaleString()}
Offered Price: ₹${offeredPrice.toLocaleString()}
Price Per Video: ₹${perVideoPrice.toFixed(0)}`

	const whatsappLink = `https://wa.me/919113099868?text=${encodeURIComponent(
		message
	)}`

	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.mainContainer}>
					<div className={styles.steps}>
						{steps.map((step, index) => (
							<div key={index}>
								<h4>{step.steps}</h4>
								<hr />
								<p>{step.title}</p>
							</div>
						))}
					</div>

					{/* Pick influencer type */}
					<h2 className={styles.pickInfluencer}>Pick influencer type</h2>
					<div className={styles.pickInfluencerType}>
						{Object.keys(influencerPricing).map((type) => (
							<div
								key={type}
								onClick={() => setSelectedInfluencerType(type)}
								className={`${styles.influencerTypeBox}
									${type === selectedInfluencerType ? styles.active1 : ""}
								`}
							>
								<h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
								<p>{influencerPricing[type].followers}</p>
							</div>
						))}
					</div>

					{/* Total influencers Videos */}
					<div className={styles.influencerContent}>
						<h2>Total influencers Videos</h2>
						<div className={styles.selectNo}>
							{discountPlans.map((plan) => (
								<p
									key={plan.videos}
									onClick={() => setSelectedPlan(plan.videos)}
									className={
										plan.videos === selectedPlan
											? styles.active
											: styles.inactive
									}
								>
									{" "}
									{plan.videos === 50 && (
										<h5 className={styles.popularLabel}>Popular</h5>
									)}
									<span> {plan.videos}</span>
								</p>
							))}
						</div>

						<h2 className={styles.nanoInfluencers}>
							{selectedInfluencerType.toUpperCase()} influencers
						</h2>
						<span className={styles.followers}>
							{influencerPricing[selectedInfluencerType].followers} followers
						</span>

						<div className={styles.pricingList}>
							<div className={styles.calculations}>
								<div className={styles.pricingValues}>
									<div>
										<img
											src={assects.playIcon}
											alt="Videos"
										/>
										<p>Videos</p>
									</div>
									<p>{`${selectedPlan} X ${basePrice}`}</p>
								</div>
								<div className={styles.pricingValues}>
									<div>
										<img
											src={assects.doller_icon}
											alt="Value"
										/>
										<p>Value</p>
									</div>
									<p>{`₹${totalValue.toLocaleString()}`}</p>
								</div>
								<div className={styles.pricingValues}>
									<div>
										<img
											src={assects.discount_icon}
											alt="Discount"
										/>
										<p>
											Discount <span>({(discount * 100).toFixed(0)}%)</span>
										</p>
									</div>
									<p
										className={styles.totalGreen}
									>{`₹${discountAmount.toLocaleString()}`}</p>
								</div>
							</div>
							<div className={styles.totalCalculation}>
								<div className={styles.totalPriceValue}>
									<div className={styles.offeredPrice}>
										<img
											src={assects.etimateIcon}
											alt="Offered Price"
										/>
										<p>Offered Price</p>
									</div>
									<p>{`₹${offeredPrice.toLocaleString()}`}</p>
								</div>
								<div className={styles.totalPriceValue2}>
									<p>Per Video</p>
									<p>{`₹${perVideoPrice.toFixed(0)}`}</p>
								</div>
							</div>
						</div>

						<h3 className={styles.savings}>
							You Saved <span>{`₹${discountAmount.toLocaleString()}`}</span>{" "}
							with this plan
						</h3>
						<a
							href={whatsappLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className={styles.whatsapp}>
								<p>Send request</p>
								<img
									src={assects.whatsapp_icon}
									alt="WhatsApp"
								/>
							</div>
						</a>
						<div className={styles.Gst}>
							<img
								src={assects.tixteenGif}
								alt="GST"
							/>
							<p>18% GST will be applied on final price</p>
						</div>
					</div>

					{/* Widely recognized by */}
					<div className={styles.recognization}>
						<h2>Widely recognized by</h2>
						<div>
							{brands.map((img, index) => (
								<img
									src={img}
									key={index}
									alt=""
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Influencer
