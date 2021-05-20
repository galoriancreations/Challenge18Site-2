<template>
  <WhiteSection class="recent-results">
    <SectionHeading>Recent Results</SectionHeading>
    <BaseSpinner v-if="loading" />
    <vue-good-table
      v-else
      class="recent-results__table"
      :columns="columns"
      :rows="rows"
    />
  </WhiteSection>
</template>

<script>
import socket from "socket.io-client";

const listUsers = (users) => {
  const usersArr = [];
  for (let name in users) {
    usersArr.push(`${name} (${users[name]})`);
  }
  return usersArr.join(", ");
};

const challengesArray = (challenges) => {
  const data = [];
  for (let key in challenges) {
    const { total, day, template } = challenges[key];
    data.push({
      id: key,
      users: listUsers(challenges[key].users),
      total,
      day,
      template,
    });
  }
  return data;
};

export default {
  data() {
    return {
      io: socket("http://193.46.199.76:8087"),
      loading: true,
      columns: [
        {
          label: "Users",
          field: "users",
        },
        {
          label: "Total Score",
          field: "total",
        },
        {
          label: "Day",
          field: "day",
        },
        {
          label: "Template",
          field: "template",
        },
      ],
      rows: [],
    };
  },
  methods: {
    initSocket() {
      this.io.on("allBoards", ({ challenges }) => {
        this.rows = challengesArray(challenges);
        this.loading = false;
      });
    },
  },
  created() {
    this.initSocket();
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.recent-results {
  &__table {
    max-width: 90rem;
    margin: auto;
  }
}
</style>
