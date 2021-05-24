<template>
  <footer class="footer">
    <WavePatternTop />
    <div class="footer__column">
      <h3 class="footer__heading">About Us</h3>
      <p class="footer__text">
        Ting Global is the international body that conducts the 18 official
        pre-tournament challenge competitions, and the tournament.
      </p>
    </div>
    <div class="footer__column">
      <h3 class="footer__heading">Recent Posts</h3>
      <ul class="footer__text footer__list">
        <li v-for="post in recentPosts" :key="post.id">
          <RouterLink class="footer__link" :to="`/blog/${post.id}`">
            {{ post.title }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="footer__column">
      <h3 class="footer__heading">
        <RouterLink class="footer__link" to="/contact">Contact Us</RouterLink>
      </h3>
      <div class="footer__contact">
        <p class="footer__text"><strong>Tel:</strong> +972-559721123</p>
        <p class="footer__text">
          <strong>Email: </strong>
          <a class="footer__link" href="mailto:support@ting.global"
            >support@ting.global</a
          >
        </p>
      </div>
      <img
        class="footer__logo"
        src="../../assets/cropped-new-logo-with-300x122.png"
        alt="Ting Global"
      />
    </div>
  </footer>
</template>

<script>
import posts from "../../data/blog";

export default {
  data() {
    return {
      posts,
    };
  },
  computed: {
    recentPosts() {
      return [
        { title: "18 Days of Climate Action" },
        { title: "Can A.I. Humanoid Teach Us How To Be More Human" },
        { title: "Impact Economy & Challenge 18" },
        { title: "Get challenged by little Sophia and Prof. Einstein" },
      ];
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.footer {
  background-color: $color-blue-2;
  color: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 16rem $padding-sides-desktop 7rem;

  @include respond(tablet) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @include respond(mobile) {
    padding: 11rem $padding-sides-mobile 5rem;
  }

  &__column {
    max-width: 30rem;
    display: flex;
    flex-direction: column;

    @include respond(mobile) {
      max-width: initial;
    }

    &:not(:last-child) {
      margin-right: 4rem;

      @include respond(tablet) {
        margin-right: 0;
        margin-bottom: 5rem;
      }
    }
  }

  &__heading {
    font-size: 2.2rem;
    color: $color-gold-4;
    margin-bottom: 1.5rem;
    font-weight: 600;

    @include respond(mobile) {
      font-size: 2rem;
    }
  }

  &__text {
    font-size: 1.55rem;
    line-height: 1.6;

    @include respond(mobile) {
      font-size: 1.45rem;
    }
  }

  &__list {
    @include respond(tablet) {
      list-style: none;
    }

    li {
      &:not(:last-child) {
        margin-bottom: 0.8rem;
      }
    }
  }

  &__contact {
    p {
      &:not(:last-child) {
        margin-bottom: 0.8rem;
      }
    }
  }

  &__link {
    transition: color 0.5s;

    &:hover {
      color: $color-azure;
    }
  }

  &__logo {
    margin-top: 6rem;
    width: 25rem;

    @include respond(mobile) {
      margin-top: 4rem;
    }
  }
}
</style>
