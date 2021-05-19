<template>
  <header :class="{ header: true, active: navOpen }">
    <Logo />
    <NavToggle />
    <nav class="header__navigation">
      <NavItem link="/">Home</NavItem>
      <NavItem link="/what-we-do" reverse>What We Do</NavItem>
      <NavItem link="/about">About</NavItem>
      <NavItem link="/blog" reverse>Blog</NavItem>
      <NavItem link="/scores">Scores</NavItem>
      <NavItem link="/players" reverse>Players</NavItem>
      <NavItem link="/contact">Contact</NavItem>
      <NavItem link="/register" reverse>Register</NavItem>
    </nav>
  </header>
</template>

<script>
import Logo from "../UI/Logo";
import NavToggle from "../UI/NavToggle";
import NavItem from "../UI/NavItem";

export default {
  components: { Logo, NavToggle, NavItem },
  data() {
    return {
      navOpen: false,
    };
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
  created() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100 && this.navOpen) {
        this.navOpen = false;
      }
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
  padding: 2rem $padding-sides-desktop;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include respond(mobile) {
    padding: 1.5rem $padding-sides-mobile;
  }

  &__navigation {
    display: flex;
  }

  &__nav-item {
    list-style: none;
    // text-transform: uppercase;
    font-size: 1.6rem;
    // letter-spacing: 0.15rem;
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
        margin-right: 4.5rem;
      }
    }
    a {
      color: inherit;
      transition: all 0.5s;
      &:hover,
      &.active {
        color: $color-gold-1;
      }
    }
  }
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
      font-size: 1.4rem;
      transform: translateX(-70vw);
      transition: all 0.5s;
      &.reverse {
        transform: translateX(70vw);
      }
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 3.5rem;
      }
    }
    &.active &__nav-item {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
