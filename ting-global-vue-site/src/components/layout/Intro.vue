<template>
  <section class="intro">
    <div class="intro__content">
      <img
        class="intro__img"
        src="../../assets/challenge-intro.gif"
        alt="Challenge 18"
      />
      <p class="intro__text">
        <strong>Challenge 18</strong> is the most important sustainability and
        leadership games tournament in the world, in which clubs from all over
        the world collaborate in acheving the SDG’s. At the end of the
        tournament a trophy is awarded to the winning clubs.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
@import "../../sass/base.scss";

.intro {
  //   min-height: 70rem;
  background-image: url(../../assets/intro-bg.jpg);
  background-position: center;
  background-size: cover;
  padding: 17rem $padding-sides-desktop;
  color: #fff;

  @include respond(tablet) {
    padding: 14rem $padding-sides-desktop;
  }

  @include respond(mobile) {
    padding: 12rem $padding-sides-mobile;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 95rem;
    margin: auto;

    @include respond(tablet) {
      flex-direction: column;
      text-align: center;
    }
  }

  &__img {
    width: 100%;
    max-width: 35rem;
    margin-right: 10rem;

    @include respond(tablet) {
      margin-right: 0;
      margin-bottom: 5rem;
    }
  }

  &__text {
    width: 37.5vw;
    max-width: 54rem;
    min-width: 50rem;
    font-size: 2.1rem;
    line-height: 1.6;

    @include respond(tablet) {
      width: 100%;
      min-width: 0;
    }

    @include respond(mobile) {
      font-size: 1.9rem;
    }
  }
}
</style>
