<template>
  <WhiteSection class="recent-results">
    <SectionHeading>Recent Results</SectionHeading>
    <BaseSpinner v-if="loading" />
    <vue-good-table
      v-else
      class="results-table"
      :columns="columns"
      :rows="rows"
      theme="polar-bear"
    />
  </WhiteSection>
</template>

<script>
import socket from "socket.io-client";

const teamsArray = (challenges) => {
  const data = [];
  for (let key in challenges) {
    const { total, day, template } = challenges[key];
    data.push({
      team: key,
      total,
      day,
      template,
    });
  }
  return data;
};

const challengesArray = (challenges) => {
  const teams = teamsArray(challenges);
  const data = [];
  for (let i = 0; i < teams.length - 1; i += 2) {
    data.push({
      id: `${teams[i].team}-${teams[i + 1].team}`,
      school1: teams[i].team,
      score1: teams[i].total,
      school2: teams[i + 1].team,
      score2: teams[i + 1].total,
      total: teams[i].total + teams[i + 1].total,
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
          label: "School/Org",
          field: "school1",
          sortable: false,
        },
        {
          label: "Score",
          field: "score1",
          sortable: false,
        },
        {
          label: "Total Score",
          field: "total",
          thClass: "total-column",
          tdClass: "total-column",
        },
        {
          label: "Score",
          field: "score2",
          sortable: false,
        },
        {
          label: "School/Org",
          field: "school2",
          sortable: false,
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
