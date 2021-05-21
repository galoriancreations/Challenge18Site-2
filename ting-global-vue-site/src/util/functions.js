export const usersArray = users => {
  const data = [];
  for (let key in users) {
    data.push({ name: key, score: users[key] });
  }
  return data;
}

export const teamsArray = challenges => {
  const data = [];
  for (let key in challenges) {
    const { total, day, template, users } = challenges[key];
    data.push({
      team: key,
      users: usersArray(users),
      total,
      day,
      template,
    });
  }
  return data;
};

export const challengesArray = challenges => {
  const teams = teamsArray(challenges);
  const data = [];
  for (let i = 0; i < teams.length - 1; i += 2) {
    data.push({
      school1: teams[i].team,
      score1: teams[i].total,
      school2: teams[i + 1].team,
      score2: teams[i + 1].total,
      total: teams[i].total + teams[i + 1].total,
    });
  }
  return data;
};