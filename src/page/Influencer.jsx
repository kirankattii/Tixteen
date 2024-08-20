import { useState } from "react"
import { assects, brands } from "../assets/assect"
import Navbar from "../components/Navbar"
import { plans } from "../constants/constants"
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

const Influencer = () => {
	const [selectedPlan, setSelectedPlan] = useState(3) // Default to Plan 1
	const [selectedInfluencerType, setSelectedInfluencerType] = useState("nano") // Default to Nano

	const handlePlanSelect = (planVideos) => {
		setSelectedPlan(planVideos)
	}

	const handleInfluencerTypeSelect = (type) => {
		setSelectedInfluencerType(type)
	}

	const selectedData = plans.find((plan) => plan.videos === selectedPlan)
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.mainContainer}>
					<div className={styles.steps}>
						<div>
							<h4>STEP 1</h4>
							<hr />
							<p>pick influencers type</p>
						</div>
						<div>
							<h4>STEP 2</h4>
							<hr />
							<p>pick influencers video</p>
						</div>
						<div>
							<h4>STEP 2</h4>
							<hr />
							<p>
								submit <br /> request
							</p>
						</div>
					</div>
					{/* =========Pick influencer type=============== */}
					<h2 className={styles.pickInfluencer}>Pick influencer type</h2>
					<div className={styles.pickInfluencerType}>
						<div
							className={`${styles.influencerTypeBox} ${
								selectedInfluencerType === "nano" ? styles.active1 : ""
							}`}
							onClick={() => handleInfluencerTypeSelect("nano")}
						>
							<h3>Nano</h3>
							<p>
								{"<"}
								<span>20</span>K
							</p>
						</div>
						<div
							className={`${styles.influencerTypeBox} ${
								selectedInfluencerType === "micro" ? styles.active1 : ""
							}`}
							onClick={() => handleInfluencerTypeSelect("micro")}
						>
							<h3>Micro</h3>
							<p>
								{"<"}
								<span>100</span>K
							</p>
						</div>
						<div
							className={`${styles.influencerTypeBox} ${
								selectedInfluencerType === "macro" ? styles.active1 : ""
							}`}
							onClick={() => handleInfluencerTypeSelect("macro")}
						>
							<h3>Macro</h3>
							<p>
								{"<"}
								<span>500</span>K
							</p>
						</div>
						<div
							className={`${styles.influencerTypeBox} ${
								selectedInfluencerType === "mega" ? styles.active1 : ""
							}`}
							onClick={() => handleInfluencerTypeSelect("mega")}
						>
							<h3>Mega</h3>
							<p>
								{"<"}
								<span>1</span>M
							</p>
						</div>{" "}
						<div
							className={`${styles.influencerTypeBox} ${
								selectedInfluencerType === "millionClub" ? styles.active1 : ""
							}`}
							onClick={() => handleInfluencerTypeSelect("millionClub")}
						>
							<h3>M Club</h3>
							<p>
								{">"}
								<span>1</span>M
							</p>
						</div>
					</div>
					{/* =============Total influencers Videos+============ */}
					<div className={styles.influencerContent}>
						<h2>Total influencers Videos</h2>
						<div className={styles.selectNo}>
							<p
								className={selectedPlan === 3 ? styles.active : ""}
								onClick={() => handlePlanSelect(3)}
							>
								3
							</p>
							<p
								className={selectedPlan === 10 ? styles.active : ""}
								onClick={() => handlePlanSelect(10)}
							>
								10
							</p>
							<p
								className={selectedPlan === 25 ? styles.active : ""}
								onClick={() => handlePlanSelect(25)}
							>
								25
							</p>
							<div>
								<span>Popular</span>
								<p
									className={selectedPlan === 50 ? styles.active : ""}
									onClick={() => handlePlanSelect(50)}
								>
									50
								</p>
							</div>
							<p
								className={selectedPlan === 100 ? styles.active : ""}
								onClick={() => handlePlanSelect(100)}
							>
								100
							</p>
						</div>
						<h2 className={styles.nanoInfluencers}>
							{selectedInfluencerType.toUpperCase()} influencers
						</h2>
						<span className={styles.followers}>
							{" "}
							{
								{
									nano: "Less than 20K followers",
									micro: "Less than 100K followers",
									macro: "Less than 500K followers",
									mega: "Less than 1M followers",
									millionClub: "More than 1M followers",
								}[selectedInfluencerType]
							}
						</span>
						<div className={styles.pricingList}>
							<div className={styles.calculations}>
								<div className={styles.pricingValues}>
									<div>
										<img
											src={assects.playIcon}
											alt=""
										/>
										<p>Videos</p>
									</div>
									<p>
										{selectedData.videos} X {selectedData.price}
									</p>
								</div>
								<div className={styles.pricingValues}>
									<div>
										<img
											src={assects.doller_icon}
											alt=""
										/>
										<p>Value</p>
									</div>
									<p>{selectedData.reach.price}</p>
								</div>
								<div className={styles.pricingValues}>
									<div>
										<img
											src={assects.discount_icon}
											alt="Discount"
										/>
										<p>
											Discount <span>({selectedData.discountPercentage}%)</span>
										</p>
									</div>
									<p className={styles.totalGreen}>
										{selectedData.reach.discount}
									</p>
								</div>
							</div>
							<div className={styles.totalCalculation}>
								<div className={styles.totalPriceValue}>
									<div className={styles.offeredPrice}>
										<img
											src={assects.etimateIcon}
											alt=""
										/>
										<p>Offered Price</p>
									</div>
									<p>{selectedData.reach.finalPrice}</p>
								</div>
								<div className={styles.totalPriceValue2}>
									<p>Per Video</p>
									<p>{selectedData.reach.perVideoCost}</p>
								</div>
							</div>
						</div>
						<h3 className={styles.savings}>
							You Saved <span>₹{selectedData.reach.discount}</span> with this
							plan
						</h3>
						<div className={styles.whatsapp}>
							<p> Send request via What's App</p>
							<img
								src={assects.whatsapp_icon}
								alt=""
							/>
						</div>
						<div className={styles.Gst}>
							<img
								src={assects.tixteenGif}
								alt=""
							/>
							<p>18% GST will be applied on final price</p>
						</div>
					</div>

					{/* ==================Widely recognized by=========== */}
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
