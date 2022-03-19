import React from "react";
import { TestimonialsContainer } from "./style/Testimonials";
import { testimonialsDb } from "../../db";

export default function Testimonials() {
  return (
    <div className="container">
      <TestimonialsContainer>
        <h2 className="testimonials-title">
          Delivering real results for top companies. Some of our
          <span> success stories.</span>
        </h2>

        <div className="testimonials">
          {testimonialsDb.map((item) => {
            return (
              <div className="testimonial" key={item.id}>
                <p className="text">{item.text}</p>
                <h3 className="title">{item.name}</h3>
                <p className="position">{item.position}</p>
                <img src={`/assets/${item.img}`} alt={item.img} />
              </div>
            );
          })}
        </div>
      </TestimonialsContainer>
    </div>
  );
}
