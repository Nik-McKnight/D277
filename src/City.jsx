import React from "react";

export default function City({
  name,
  image,
  population,
  yearInc,
  region,
  classif,
  income,
  blurb,
}) {
  return (
    <div className="Page">
      <h2>{name}</h2>
      <div className="Content">
        <section className="cityContent">{blurb}</section>
        {image}
        <aside className="cityAside">
          <p>Population: {population}</p>
          <p>Year Incorporated: {yearInc}</p>
          <p>Region: {region}</p>
          <p>Classification: {classif}</p>
          <p>Per capita income (county): {income} / 99</p>
        </aside>
      </div>
    </div>
  );
}
