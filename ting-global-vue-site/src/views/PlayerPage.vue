<template>
  <div class="main__wrapper">
    <div class="info__wrapper">
      <div class="figure">
        <img
          data-v-518008fc=""
          src="https://i.imgur.com/MIwbEJr.jpg"
          alt="Nadia Hassona"
        />
        <div class="caption-tittle">Nadia Hassona</div>
      </div>
      <div class="info-text__container">
        <p><strong>State:</strong> Israel</p>
        <p><strong>Club:</strong> Eroni Yud-Bet</p>
        <p><strong>Score:</strong> 1239</p>
      </div>
    </div>
    <div class="skills__body__wrapper">
      <div class="skills__tittle">Tittle</div>
      <div class="text__container">
        <div><strong>Technologist: </strong><span>skill</span></div>
        <div><strong>Influencer: </strong><span>skill</span></div>
        <div><strong>Mentor: </strong><span>skill</span></div>
        <div><strong>Referee: </strong><span>skill</span></div>
        <div><strong>Ideator: </strong><span>skill</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// @import "../../sass/base.scss";

.main__wrapper {
  display: flex;
}

.skills__wrapper {
  background-color: red;
}
.info__wrapper {
  display: flex;
  flex-direction: column;
}
.caption-tittle {
  width: 100%;
  background-color: rgb(0, 12, 102);
  color: #fff;
  font-size: 2.3rem;
  font-family: "Spartan", sans-serif;
  font-weight: 600;
  padding: 1.3rem 1rem 0.9rem;
  text-align: center;
}

info-text__container {
  display: flex;
  flex-direction: column;
}

.skills__body__wrapper {
  display: flex;
  flex-direction: column;
}
.text__container {
  display: flex;
  flex-direction: column;
}

.skills__tittle {
  width: 100%;
  background-color: rgb(0, 12, 102);
  color: #fff;
  font-size: 2.3rem;
  font-family: "Spartan", sans-serif;
  font-weight: 600;
  /*   padding: 1.3rem 1rem 0.9rem; */
  text-align: center;
}
</style>
