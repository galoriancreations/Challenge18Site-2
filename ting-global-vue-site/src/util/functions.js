import uniqid from "uniqid";
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
  const initialOptions = [...options];
  options.forEach((day, dayIndex) => {
    initialOptions[dayIndex].id = day.id || uniqid();
    day.tasks.forEach((task, taskIndex) => {
      initialOptions[dayIndex].tasks[taskIndex].id = task.id || uniqid();
      task.options.forEach((option, optionIndex) => {
        initialOptions[dayIndex].tasks[taskIndex].options[optionIndex].id = option.id || uniqid();
      });
    });
  });
  return initialOptions;
}

export const initialExtraInputs = options => {
  const inputs = [];
  options.forEach((day, dayIndex) => {
    inputs.push([]);
    day.tasks.forEach(() => {
      inputs[dayIndex].push("");
    });
  });
  return inputs;
}

export const initialSelections = options => {
  const initialSelections = [];
  options.forEach((day, dayIndex) => {
    initialSelections[dayIndex] = [];
    day.tasks.forEach((task, taskIndex) => {
      if (task.options?.length) {
        initialSelections[dayIndex][taskIndex] = task.options[0].text;
      }
    });
  });
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

export const numbersArray = n => Array.from({ length: n }, (_, i) => i + 1);