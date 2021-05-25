<template>
  <vue-good-table
    class="member-plans"
    :columns="columns"
    :rows="rows"
    theme="polar-bear"
    row-style-class="member-plans__row"
  />
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          label: "Challenge 18 Membership",
          field: "feature",
          sortable: false,
        },
        {
          label: "3 Years",
          field: "3Years",
          sortable: false,
        },
        {
          label: "2 Years",
          field: "2Years",
          sortable: false,
        },
        {
          label: "1 Year",
          field: "1Year",
          sortable: false,
        },
      ],
      rows: [
        {
          feature: "Unlimited games – alone & with other clubs",
          "3Years": "✔",
          "2Years": "✔",
          "1Year": "✔",
        },
        {
          feature: "18 free certificates per game",
          "3Years": "✔",
          "2Years": "✔",
          "1Year": "✔",
        },
        {
          feature: "Customized challenge templates",
          "3Years": "✔",
          "2Years": "✔",
          "1Year": "✔",
        },
        {
          feature: "Free courses lesson plans",
          "3Years": "✔",
          "2Years": "✔",
          "1Year": "✔",
        },
        {
          feature: "Mentorship",
          "3Years": "✔",
          "2Years": "✔",
          "1Year": "✔",
        },
        {
          feature: "Join a Think Tank",
          "3Years": "✔",
          "2Years": "✔",
          "1Year": "✔",
        },
        {
          feature: 'Free e-book: "The New Global Citizens"',
          "3Years": "✔",
          "2Years": "✔",
          "1Year": "✔",
        },
        {
          feature: "Free participation in the Challenge 18 Global Championship",
          "3Years": "✔",
          "2Years": "✔",
          "1Year": "✔",
        },
        {
          feature: "Yearly Membership Fee (USD)",
          "3Years": "$150",
          "2Years": "$250",
          "1Year": "$350",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.member-plans {
  max-width: 85rem;
  margin: auto;

  * {
    font-size: 1.6rem;
    text-align: center !important;
  }

  &__row {
    background-color: $color-gold-4;
    color: $color-blue-1;

    &:last-child {
      * {
        font-weight: 700;
        font-size: 1.8rem;
      }
    }
  }
}
</style>
