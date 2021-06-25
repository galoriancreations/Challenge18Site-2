<template>
  <div
    class="team-member__img"
    :src="member.image"
    :alt="member.name"
    :style="{ backgroundImage: `url(${member.image})` }"
  />
</template>

<script>
export default {
  inject: ["member"],
};
</script>
