import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaGithubSquare, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      if (index < 0) {
        index = people.length - 1;
      }
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      if (index > people.length - 1) {
        index = 0;
      }
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let newIndex = Math.trunc(Math.random() * people.length);
    if (newIndex === index) {
      newIndex += 1;
    }
    setIndex(checkNumber(newIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span> 
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <div className="info">{text}</div>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Random person
      </button>
    </article>
  );
};

export default Review;
