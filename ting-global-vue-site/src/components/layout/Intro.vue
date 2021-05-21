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
    <BaseButton link="/register" variant="gold">Register</BaseButton>
    <WavePatternBottom />
  </section>
</template>

<style lang="scss">
@import "../../sass/base.scss";

.intro {
  background-image: linear-gradient(to right, rgba(#000, 0.2), rgba(#000, 0.2)),
    url(../../assets/intro-bg.jpg);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 20rem $padding-sides-desktop 19rem;
  color: #fff;
  position: relative;

  @include respond(tablet) {
    padding: 18rem $padding-sides-desktop 17rem;
  }

  @include respond(mobile) {
    padding: 14rem $padding-sides-mobile 13rem;
    background-attachment: initial;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 95rem;
    margin: 0 auto 5rem;

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
      font-size: 1.7rem;
    }
  }

  .button {
    margin: auto;
    font-size: 1.9rem;
    font-weight: 600;
    width: 25rem;

    @include respond(mobile) {
      font-size: 1.5rem;
    }
  }
}
</style>
