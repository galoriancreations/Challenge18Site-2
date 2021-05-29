<template>
  <li :class="classes" @click="clickHandler">
    <RouterLink
      v-if="link"
      :to="link"
      activeClass="active"
      exact
      :class="linkClasses"
    >
      {{ text }}
      <i v-if="dropdown" class="fas fa-chevron-down" />
    </RouterLink>
    <span v-else :class="linkClasses">
      {{ text }}
      <i v-if="dropdown" class="fas fa-chevron-down" />
    </span>
    <nav
      v-if="dropdown"
      class="header__nav-dropdown"
      :style="{ maxHeight: dropdownMaxHeight }"
      ref="dropdown"
    >
      <ul class="header__nav-dropdown-list">
        <li
          v-for="item in dropdown"
          :key="item.link"
          class="header__nav-subitem"
          @click="closeNav"
        >
          <RouterLink :to="item.link" activeClass="active" exact>
            {{ item.text }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </li>
</template>

<script>
export default {
  props: {
    link: String,
    text: String,
    reverse: Boolean,
    button: Boolean,
    dropdown: Array,
  },
  inject: ["closeNav"],
  data() {
    return {
      dropdownOpenMobile: false,
      dropdownMaxHeight: 0,
    };
  },
  computed: {
    classes() {
      return {
        "header__nav-item": true,
        reverse: this.reverse,
        open: this.dropdownOpenMobile,
      };
    },
    linkClasses() {
      return this.button ? "button button--gold" : null;
    },
  },
  methods: {
    clickHandler() {
      if (this.dropdown) {
        this.dropdownOpenMobile = !this.dropdownOpenMobile;
      } else {
        this.closeNav();
      }
    },
  },
  watch: {
    dropdownOpenMobile(value) {
      if (window.innerWidth <= 1100) {
        this.dropdownMaxHeight = value
          ? `${this.$refs.dropdown.scrollHeight}px`
          : 0;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) {
        this.dropdownMaxHeight = null;
      }
    });
  },
};
</script>
