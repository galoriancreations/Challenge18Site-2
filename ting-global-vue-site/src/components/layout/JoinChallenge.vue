<template>
  <div :class="classes">
    <div class="modal__container">
      <vue-scroll>
        <div class="modal__content">
          <SectionHeading small>Join a Challenge</SectionHeading>
          <h3 class="join-challenge__subheading">Choose challenge template</h3>
        </div>
      </vue-scroll>
    </div>
    <div class="modal__backdrop" @click="$emit('closed')" />
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
  },
  data() {
    return {
      templateOptions: ["International SDG", "Family", "Songs & Values"],
    };
  },
  computed: {
    classes() {
      return {
        modal: true,
        "join-challenge": true,
        active: this.active,
      };
    },
  },
  methods: {
    submitHandler() {},
  },
  // checkUsername
  // checkPhone
};
</script>
