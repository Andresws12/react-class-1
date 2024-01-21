import React from "react";

const Banner = ({ name, lastName, description, age }) => {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            width="960"
            alt="Placeholder"
            title="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                width="96"
                alt="Placeholder"
                title="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{name}</p>
            <p class="subtitle is-6">{lastName}</p>
          </div>
        </div>

        <div class="content">
          {description}
          <br />
          {age} years
        </div>
      </div>
    </div>
  );
};

export default Banner;
