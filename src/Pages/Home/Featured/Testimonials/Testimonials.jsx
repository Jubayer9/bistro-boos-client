import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaExclamation } from "react-icons/fa";
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading='What Our Clients Say'
                heading='TESTIMONIALS'
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}
                        >
                            <div className="mx-24 my-16 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <div className="flex font-bold text-6xl mt-8">
                                <FaExclamation></FaExclamation>
                                <FaExclamation></FaExclamation>
                                </div>
                                <p className="py-8">{review.details}</p>
                                <h3 className="text-2xl text-orange-400">
                                    {review.name}
                                </h3>
                            </div>
                        </SwiperSlide>

                    )
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;