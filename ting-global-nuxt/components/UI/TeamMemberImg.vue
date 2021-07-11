<template>
  <div
    class="team-member__img"
    :src="member.image"
    :alt="member.name"
    :style="{ backgroundImage: `url(${image})` }"
  />
</template>

<script>
export default {
  inject: ["member"],
  computed: {
    image() {
      return require(`../../assets/images/teams/${this.member.image}`);
    }
  }
};
</script>
