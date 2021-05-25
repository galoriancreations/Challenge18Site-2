<template>
  <div class="card__container">
    <div class="card__body">
      <div class="image__container">
        <div class="elementor-widget-container">
          <figure class="wp-caption">
            <img :src="card.imgSrc" class="" alt="" loading="eager" />
            <figcaption class="caption-tittle">
              {{ card.name }}
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="text__wrapper">
        <div class="text__container">
          <p>State: {{ card.state }}</p>
          <p>School: {{ card.school }}</p>
          <p>Score: {{ card.score }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style lang="scss">
@import "../../sass/base.scss";
.card__container {
  padding: 37.328px;
  width: 350px;
  height: auto;
  flex-grow: 1;
}
// .card__container:last-child {
//   flex-grow: 10;
// }

img {
  width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}
.wp-caption {
  margin-bottom: 20px;
  --font-headings-default: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  --font-base-default: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #333;
  text-align: center;
  box-sizing: border-box;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s,
    -webkit-border-radius 0.3s, -webkit-box-shadow 0.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
}
.caption-tittle {
  width: 100%;
  height: 42px;
  text-align: center;
  background-color: rgb(248, 200, 5);
  font-size: 28px;
}

p {
  margin-bottom: 2px;
  margin-left: 4px;
}
</style>
