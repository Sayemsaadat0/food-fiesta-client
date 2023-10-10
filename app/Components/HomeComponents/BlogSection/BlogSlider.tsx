import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";

const BlogSlider = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				freeMode={true}
				pagination={{
				  clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 30,
					},
				}}
				modules={[FreeMode, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div
						style={{
							backgroundImage:
								"url('https://i.ibb.co/zrLbRBq/img1.png')",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
						className="rounded-lg"
					>
						<div className="h-[450px] rounded-lg text-white p-2 bg-[#00000047]">
							<nav>
								<ul className="uppercase">
									<li className="flex">
										<Link className="mx-2" href="/">
											Business
										</Link>
										<Link className="mx-2" href="/">
											marchants
										</Link>
										<Link className="mx-2" href="/">
											Press
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							backgroundImage:
								"url('https://i.ibb.co/zrLbRBq/img1.png')",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
						className="rounded-lg"
					>
						<div className="h-[450px] rounded-lg text-white p-2 bg-[#00000047]">
							<nav>
								<ul className="uppercase">
									<li className="flex">
										<Link className="mx-2" href="/">
											Business
										</Link>
										<Link className="mx-2" href="/">
											marchants
										</Link>
										<Link className="mx-2" href="/">
											Press
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							backgroundImage:
								"url('https://i.ibb.co/hCH042P/img3.jpg')",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
						className="rounded-lg"
					>
						<div className="h-[450px] rounded-lg text-white p-2 bg-[#00000047]">
							<nav>
								<ul className="uppercase">
									<li className="flex">
										<Link className="mx-2" href="/">
											Business
										</Link>
										<Link className="mx-2" href="/">
											marchants
										</Link>
										<Link className="mx-2" href="/">
											Press
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							backgroundImage:
								"url('https://i.ibb.co/PxBYh1J/img4.jpg')",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
						className="rounded-lg"
					>
						<div className="h-[450px] rounded-lg text-white p-2 bg-[#00000047]">
							<nav>
								<ul className="uppercase">
									<li className="flex">
										<Link className="mx-2" href="/">
											Business
										</Link>
										<Link className="mx-2" href="/">
											marchants
										</Link>
										<Link className="mx-2" href="/">
											Press
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							backgroundImage:
								"url('https://i.ibb.co/6PXKkvZ/img5.jpg')",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
						className="rounded-lg"
					>
						<div className="h-[450px] rounded-lg text-white p-2 bg-[#00000047]">
							<nav>
								<ul className="uppercase">
									<li className="flex">
										<Link className="mx-2" href="/">
											Business
										</Link>
										<Link className="mx-2" href="/">
											marchants
										</Link>
										<Link className="mx-2" href="/">
											Press
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							backgroundImage:
								"url('https://i.ibb.co/5GqP6rk/img6.jpg')",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
						className="rounded-lg"
					>
						<div className="h-[450px] rounded-lg text-white p-2 bg-[#00000047]">
							<nav>
								<ul className="uppercase">
									<li className="flex">
										<Link className="mx-2" href="/">
											Business
										</Link>
										<Link className="mx-2" href="/">
											marchants
										</Link>
										<Link className="mx-2" href="/">
											Press
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default BlogSlider;
