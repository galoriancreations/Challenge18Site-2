<template>
  <section class="page-heading" :id="name">
    <h1 class="page-heading__heading">
      {{ title }}
    </h1>
    <WavePatternBottom />
  </section>
</template>

<script>
export default {
  inject: ["name", "title"],
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.page-heading {
  height: 50rem;
  position: relative;
  background-color: #4c9cd4;
  background-position: center;
  background-size: cover;
  padding: 0 $padding-sides-desktop;

  @include respond(mobile) {
    height: 45rem;
  }

  &#scores {
    background-image: linear-gradient(
        to right,
        rgba(#000, 0.2),
        rgba(#000, 0.2)
      ),
      url(../../assets/scores-bg.jpg);
  }

  &#what-we-do {
    background-image: linear-gradient(
        to right,
        rgba(#000, 0.2),
        rgba(#000, 0.2)
      ),
      url(../../assets/what-we-do-bg.jpg);
  }

  &#about {
    background-image: linear-gradient(
        to right,
        rgba(#000, 0.2),
        rgba(#000, 0.2)
      ),
      url(../../assets/about-bg.jpg);
  }

  &#blog {
    background-image: linear-gradient(
        to right,
        rgba(#000, 0.2),
        rgba(#000, 0.2)
      ),
      url(../../assets/blog-bg.jpg);
  }

  &#players {
    background-image: linear-gradient(
        to right,
        rgba(#000, 0.2),
        rgba(#000, 0.2)
      ),
      url(../../assets/players-bg.jpg);
  }

  &#contact {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.8),
        rgba(#4189bd, 0.8)
      ),
      url(../../assets/contact-2-bg.jpg);
  }

  &#login {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.8),
        rgba(#4189bd, 0.8)
      ),
      url(../../assets/contact-2-bg.jpg);
  }

  &#register {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.8),
        rgba(#4189bd, 0.8)
      ),
      url(../../assets/contact-2-bg.jpg);
  }

  &__heading {
    font-size: 6rem;
    color: #fff;
    font-weight: 800;
    margin-top: 25rem;
    text-align: center;

    @include respond(mobile) {
      font-size: 4.8rem;
      margin-top: 22rem;
    }
  }

  &#contact &__heading,
  &#login &__heading,
  &#register &__heading {
    margin-top: 19.5rem;
  }
}
</style>
