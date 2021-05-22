<template>
  <header :class="{ header: true, active: navOpen, sticky }">
    <LoginIcon />
    <Logo />
    <NavToggle />
    <nav class="header__navigation">
      <NavItem
        v-for="(item, index) in navigationItems"
        :key="item.link"
        :link="item.link"
        :reverse="index % 2 !== 0"
        :button="item.button"
      >
        {{ item.text }}
      </NavItem>
    </nav>
  </header>
</template>

<script>
import Logo from "../UI/Logo";
import NavToggle from "../UI/NavToggle";
import LoginIcon from "../UI/LoginIcon";
import NavItem from "../UI/NavItem";

export default {
  components: { Logo, NavToggle, LoginIcon, NavItem },
  data() {
    return {
      navOpen: false,
      sticky: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    },
    navigationItems() {
      const items = [
        { link: "/", text: "Home" },
        { link: "/what-we-do", text: "What We Do" },
        { link: "/about", text: "About" },
        { link: "/blog", text: "Blog" },
        { link: "/scores", text: "Scores" },
        { link: "/players", text: "Players" },
        { link: "/contact", text: "Contact" },
        { link: "/login", text: "Login", button: true, hide: this.isLoggedIn },
      ];
      return items.filter((item) => !item.hide);
    },
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
    closeNav() {
      this.navOpen = false;
    },
  },
  watch: {
    navOpen(value) {
      document.querySelector("body").style.overflow = value ? "hidden" : null;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100 && this.navOpen) {
        this.navOpen = false;
      }
    });
    window.addEventListener("scroll", () => {
      this.sticky = window.scrollY > 0 && !this.active;
    });
  },
  beforeDestroy() {
    document.querySelector("body").style.overflow = null;
  },
  provide() {
    return {
      toggleNav: this.toggleNav,
      closeNav: this.closeNav,
    };
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem $padding-sides-desktop;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;

  @include respond(mobile) {
    padding: 1rem $padding-sides-mobile;
  }

  &.sticky {
    position: fixed;
    background-color: rgba(#fff, 0.9);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 13px 1px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  &__navigation {
    display: flex;
    align-items: center;
  }

  &__nav-item {
    list-style: none;
    font-size: 1.55rem;
    font-weight: 500;
    display: block;
    color: #fff;

    &:first-child {
      display: none;
      @include respond(tablet) {
        display: block;
      }
    }

    &:not(:last-child) {
      margin-right: 5rem;
      @include respond(tablet-land) {
        margin-right: 4rem;
      }
    }
    a {
      color: inherit;
      transition: all 0.5s;
      &:hover,
      &.active {
        color: $color-gold-3;
      }
    }

    .button {
      width: auto;
      letter-spacing: initial;
      text-transform: none;
      color: #000 !important;
      font-weight: 500;
      font-size: inherit;
      padding: 1rem 4rem;

      &:hover {
        color: $color-azure !important;
      }
    }
  }
  &.sticky &__nav-item {
    color: #000;
    @include respond(tablet) {
      color: #fff;
    }
  }
  // &.sticky:not(.active) &__nav-item a {
  //   &:hover,
  //   &.active {
  //     color: $color-blue-3;
  //   }
  // }

  @include respond(tablet) {
    &::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color-blue-2, 0.95);
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s;
      z-index: -1;
    }
    &.active::after {
      opacity: 1;
      visibility: visible;
    }
    &__navigation {
      position: absolute;
      top: 50vh;
      left: 50%;
      transform: translate(-50%, -45%);
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      min-height: 8rem;
      text-align: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s;
    }
    &.active &__navigation {
      opacity: 1;
      visibility: visible;
    }
    &__nav-item {
      opacity: 0;
      font-size: 1.6rem;
      transform: translateX(-70vw);
      transition: all 0.5s;
      &.reverse {
        transform: translateX(70vw);
      }
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 3.5rem;
      }
      .button {
        background-color: $color-gold-4;
        color: #000;
        font-weight: 600;
        width: 20rem;
      }
    }
    &.active &__nav-item {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
