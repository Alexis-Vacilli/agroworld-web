import React, { useState } from "react";
import Card from "./Card"; 
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    post: "Product Manager",
    title: "Great people and vacation time",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem at voluptates voluptas veniam, eius culpa atque incidunt beatae, expedita recusandae ut officiis sed dolor laudantium? Doloremque sunt quod aliquid!",
    picture: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Alexis Vacilli",
    post: "Product Manager",
    title: "Very good and great support system",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem at voluptates voluptas veniam, eius culpa atque incidunt beatae, expedita recusandae ut officiis sed dolor laudantium? Doloremque sunt quod aliquid!",
    picture: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Jane Doe",
    post: "Product Manager",
    title: "Very good and great support system",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem at voluptates voluptas veniam, eius culpa atque incidunt beatae, expedita recusandae ut officiis sed dolor laudantium? Doloremque sunt quod aliquid!",
    picture: "https://via.placeholder.com/150",
  },
  // Add more testimonials here
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const index = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="p-6">
      <small className="uppercase text-[#008932] text-base font-normal">Testimonials</small>
      <p className="py-6 text-5xl font-semibold">Customer stories</p>
      <div className="flex space-x-5 overflow-visible">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            testimonial={testimonial.testimonial}
            title={testimonial.title}
            name={testimonial.name}
            post={testimonial.post}
            currentIndex={currentIndex}
            index={index}
          />
        ))}
      </div>
      <div className="flex justify-start mt-10">
        <button className="mx-2 bg-gray-100 text-[#008932] p-4 text-2xl" onClick={previousSlide}>
          <BsArrowLeftShort />
        </button>
        <button className="mx-2 bg-gray-100 text-[#008932] p-4 text-2xl" onClick={nextSlide}>
        <BsArrowRightShort />
        </button>
      </div>
    </div>
  );
};

export default Slider;
