<template>
  <Page title="About Us" name="about">
    <WhiteSection tag="main" class="about">
      <ImageWithText tag="section" class="about-main" :image="mainImg">
        <p v-for="paragraph in aboutText.split('\n')" :key="paragraph">
          {{ paragraph }}
        </p>
        <BaseButton link="/membership" variant="gold">Join Us</BaseButton>
      </ImageWithText>
      <Partners small />
      <TeamSection :team="theTeam" title="The Team" />
      <TeamSection :team="advisors" title="Advisors" />
    </WhiteSection>
  </Page>
</template>

<script>
import ImageWithText from "../components/layout/ImageWithText";
import Partners from "../components/content/Partners";
import TeamSection from "../components/content/TeamSection";
import mainImg from "../assets/about-img.jpg";
import sharon from "../assets/teams/sharon.png";
import hanson from "../assets/teams/hanson.png";
import yee from "../assets/teams/yee.png";
import lee from "../assets/teams/lee.png";
import dekel from "../assets/teams/dekel.png";

export default {
  components: { ImageWithText, Partners, TeamSection },
  data() {
    return {
      mainImg,
      aboutText:
        "Ting Global is the international body that conducts the 18 official pre-tournament challenge competitions, and the tournament. Teachers and students from across the globe have already completed the Ting Global Sustainability Challenge.\n 18 days of assignments that raise awareness of sustainability and leadership issues – Participation in the challenge solidifies students and raises awareness of the hot topics on the global agenda and allows participants to share their work and form thinking and action groups together.",
      theTeam: [
        {
          name: "Sharon Gal-Or",
          image: sharon,
          role: "Founder",
          description:
            "Israeli ambassador for USTP, a writer, author, futurist, an innovation management & gamification specialist, advisor in the fields of education, community management, entrepreneurship & sustainability.",
          link: "http://hk.linkedin.com/in/sharongalor",
        },
      ],
      advisors: [
        {
          name: "David Hanson Jr.",
          image: hanson,
          description:
            "American roboticist who is the founder and Chief Executive Officer (CEO) of Hanson Robotics, a Hong Kong-based robotics company founded in 2013.",
        },
        {
          name: "Lawrence Yee",
          image: yee,
          description:
            "Co-President (2017-), President (2015-16), Board Director and founder of Cradle Program of AAMA-PRD chapter since 2015.  He also sits on the board of BIIA (Business Information Industry Association) since its inception in 2006.",
        },
        {
          name: "Newton Lee",
          image: lee,
          description:
            "Computer scientist who is an author and administrator in the field of education and technology commercialization. He is known for his total information awareness book series.",
        },
        {
          name: "Prof. Shai Dekel",
          image: dekel,
          description:
            "Visiting associate professor at the school of mathematics, Tel-Aviv University. He also serves as a principal scientist in GE Global Research and as Angel Investor in TLVseed and as a member of Akban. His research interests are theoretical approximation theory, harmonic analysis and their applications in data science.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../sass/base.scss";
.about {
  .partners {
    margin: 10.5rem 0 8.5rem;

    @include respond(mobile) {
      margin: 7rem 0 5.5rem;
    }
  }
}

.about-main {
  .button {
    width: 20rem;
    margin-top: 2.5rem;
    font-weight: 600;

    @include respond(tablet-land) {
      margin-top: 3.5rem;
    }

    @include respond(mobile) {
      margin-top: 3rem;
    }
  }
}
</style>
