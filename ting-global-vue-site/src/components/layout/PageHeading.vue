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
    height: 40rem;
  }

  &#scores {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.85),
        rgba(#4189bd, 0.85)
      ),
      url(../../assets/scores-bg.jpg);
  }

  &#what-we-do {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.8),
        rgba(#4189bd, 0.8)
      ),
      url(../../assets/what-we-do-bg.jpg);
  }

  &#about {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.8),
        rgba(#4189bd, 0.8)
      ),
      url(../../assets/about-bg.jpg);
  }

  &#blog {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.85),
        rgba(#4189bd, 0.85)
      ),
      url(../../assets/blog-2-bg.jpg);
  }

  &#blogpost {
    background-image: linear-gradient(
        130deg,
        rgba(#0700dd, 0.8) 0%,
        rgba(#00f2ff, 0.8) 89%
      ),
      url(../../assets/blogpost-bg.png);
  }

  &#players {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.85),
        rgba(#4189bd, 0.85)
      ),
      url(../../assets/players-bg.jpg);
  }

  &#contact {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.8),
        rgba(#4189bd, 0.8)
      ),
      url(../../assets/contact-bg.jpg);
    background-position-y: bottom;
  }

  &#login {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.8),
        rgba(#4189bd, 0.8)
      ),
      url(../../assets/login-bg.jpg);
  }

  &#register {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.8),
        rgba(#4189bd, 0.8)
      ),
      url(../../assets/register-bg.jpg);
  }

  &#membership {
    background-image: linear-gradient(
        to right,
        rgba(#4189bd, 0.8),
        rgba(#4189bd, 0.8)
      ),
      url(../../assets/membership-bg.jpg);
  }

  &__heading {
    font-size: 6rem;
    color: #fff;
    font-weight: 800;
    position: absolute;
    top: 46%;
    left: 50%;
    width: 100%;
    max-width: 90rem;
    padding: 0 $padding-sides-desktop;
    transform: translate(-50%, -50%);
    text-align: center;

    @include respond(mobile) {
      font-size: 4rem;
      top: 50%;
      padding: 0 $padding-sides-mobile;
    }
  }

  &#blogpost &__heading {
    font-size: 4.8rem;
    max-width: 100rem;

    @include respond(tablet) {
      font-size: 4rem;
    }

    @include respond(mobile) {
      font-size: 3.5rem;
    }
  }
}
</style>
