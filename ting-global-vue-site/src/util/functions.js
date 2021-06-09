import store from "../store";

export const usersArray = users => {
  const data = [];
  for (let key in users) {
    data.push({ name: key, score: users[key] });
  }
  return data;
};

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

export const initialOptions = options => {
  const initialOptions = { ...options };
  for (let day in options) {
    initialOptions[day] = { ...options[day] };
    for (let task in options[day].tasks) {
      initialOptions[day].tasks[task] = { ...options[day].tasks[task] };
      initialOptions[day].tasks[task].other = "";
    }
  }
  return initialOptions;
}

export const initialSelections = options => {
  const initialSelections = {};
  for (let day in options) {
    initialSelections[day] = {};
    for (let task in options[day].tasks) {
      initialSelections[day][task] = options[day].tasks[task].options[0];
    }
  }
  return initialSelections;
}

export const convertAsteriks = text => {
  const chars = text.split("");
  let closingTag = false;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "*") {
      chars[i] = !closingTag ? "<strong>" : "</strong>";
      closingTag = !closingTag;
    }
  }
  return chars.join("");
}

export const textInputKeys = (labels) => {
  const keys = [];
  for (let key in labels) {
    if (key !== "language" && key !== "phone") {
      keys.push(key);
    }
  }
  return keys;
};

export const initialData = (labels) => {
  const formData = {};
  for (let key in labels) {
    formData[key] = store.getters.user[key];
  }
  return formData;
};