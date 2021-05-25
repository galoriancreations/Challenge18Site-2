<template>
  <section class="latest-videos">
    <SectionHeading>Latest Videos</SectionHeading>
    <div class="latest-videos__grid">
      <div v-for="videoId in videos" :key="videoId" class="latest-videos__item">
        <youtube :videoId="videoId" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        "C3QGd4tKldw",
        "GM4n9yGsUE8",
        "FVVFhAPM9Zw",
        "OQTZAGLp5Ho",
        "pI2m0z_n_ss",
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.latest-videos {
  margin-top: 10rem;

  @include respond(mobile) {
    margin-top: 7rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2.5rem;

    @include respond(tablet) {
      grid-template-columns: 1fr 1fr;
    }

    @include respond(mobile-land) {
      gap: 1.5rem;
    }

    @include respond(mobile) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  &__item {
    iframe {
      width: 100%;
      height: 16vw;
      display: block;
      border-radius: 0.8rem;

      @include respond(tablet) {
        height: 25vw;
      }

      @include respond(mobile) {
        height: 60vw;
      }
    }
  }
}
</style>
