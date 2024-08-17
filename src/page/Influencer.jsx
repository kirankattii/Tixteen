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

const Influencer = () => {
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
						<div>
							<h3>Nano</h3>
							<p>
								{"<"}
								<span>20</span>K
							</p>
						</div>
						<div>
							<h3>Micro</h3>
							<p>
								{"<"}
								<span>100</span>K
							</p>
						</div>
						<div>
							<h3>Macro</h3>
							<p>
								{"<"}
								<span>500</span>K
							</p>
						</div>
						<div>
							<h3>Mega</h3>
							<p>
								{"<"}
								<span>1</span>M
							</p>
						</div>{" "}
						<div>
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
							<p>3</p>
							<p>10</p>
							<p>25</p>
							<div>
								<span>Popular</span>
								<p>50</p>
							</div>
							<p>100</p>
						</div>
						<h2 className={styles.nanoInfluencers}>NANO influencers</h2>
						<span className={styles.followers}>Less then 20K followers</span>
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
									<p>3 X 4,000</p>
								</div>
								<div className={styles.pricingValues}>
									<div>
										<img
											src={assects.doller_icon}
											alt=""
										/>
										<p>Value</p>
									</div>
									<p>12,000</p>
								</div>
								<div className={styles.pricingValues}>
									<div>
										<img
											src={assects.discount_icon}
											alt=""
										/>
										<p>
											{" "}
											Discount <span>15%</span>
										</p>
									</div>
									<p className={styles.totalGreen}>1,800</p>
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
									<p>1,800</p>
								</div>
								<div className={styles.totalPriceValue2}>
									<p>Per Video</p>
									<p>3,400</p>
								</div>
							</div>
						</div>
						<h3 className={styles.savings}>
							You Saved <span>$1,800</span> with this plan
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
