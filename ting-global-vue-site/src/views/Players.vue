<template>
  <Page title="Players" name="players">
    <WhiteSection class="players">
      <div class="players__wrap">
        <Player v-for="player in players" :key="player.name" :card="player" />
      </div>
    </WhiteSection>
  </Page>
</template>

<script>
import Player from "../components/UI/Player";

export default {
  components: { Player },
  data() {
    return {
      players: [
        {
          imgSrc: "https://i.imgur.com/MIwbEJr.jpg",
          name: "Nadia Hassona",
          state: "Israel",
          school: "Eroni Yud-Bet",
          score: 1239,
        },
        {
          imgSrc: "https://i.imgur.com/y1AcFjw.jpg",
          name: "Mariam Abu rhima",
          state: "Israel",
          school: "Eroni Yud-Bet",
          score: 5569,
        },
        {
          imgSrc: "https://i.imgur.com/tgGlgsM.jpg",
          name: "Fernanda_Matsuoka",
          state: "Brazil",
          school: "Brazil - Young Climate Leaders",
          score: 4523,
        },
        {
          imgSrc: "https://i.imgur.com/l0tyiBX.jpg",
          name: "Amal Tartir",
          state: "Nepal",
          school: "Nepal Premier School",
          score: 3561,
        },
        {
          imgSrc:
            "https://i1.wp.com/ting.global/wp-content/uploads/2021/04/1232.jpg?fit=500%2C585&ssl=1",
          name: "Ashni Rungta",
          state: "New York",
          school: "N.Y Professional School",
          score: 1234,
        },
        {
          imgSrc:
            "https://i2.wp.com/ting.global/wp-content/uploads/2021/04/Inessa-Kraft-fit.jpg?fit=500%2C585&ssl=1",
          name: "Inessa Kraft",
          state: "Portugal",
          school: "Portugal School",
          score: 1200,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.players__wrap {
  max-width: 114rem;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}
</style>
