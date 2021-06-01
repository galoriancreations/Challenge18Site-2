<template>
  <Page title="Challenge Task Options" name="challenge-options">
    <WhiteSection tag="main" class="challenge-options">
      <div class="challenge-options__layout">
        <div class="challenge-options__tabs">
          <div v-for="day in days" :key="day" class="challenge-options__tab">
            <input
              type="radio"
              v-model="currentDay"
              :value="day"
              :id="`day${day}`"
            />
            <label :for="`day${day}`">Day {{ day }}</label>
          </div>
        </div>
        <section small class="challenge-options__main">
          <SectionHeading extraClass="challenge-options__title">
            Day {{ currentDay }}
          </SectionHeading>
          <div class="challenge-options__content">
            <form
              class="task-form"
              v-for="(task, taskKey) in options[dayKey]"
              :key="taskKey"
              @submit.prevent
            >
              <h3 class="task-form__title">{{ task.name }}</h3>
              <div
                v-for="(option, index) in task.options"
                :key="option"
                class="task-form__option"
              >
                <input
                  type="radio"
                  v-model="selections[dayKey][taskKey]"
                  :value="option"
                  :id="`${dayKey}-${taskKey}-option${index + 1}`"
                  class="task-form__radio-input"
                />
                <label
                  :for="`${dayKey}-${taskKey}-option${index + 1}`"
                  class="task-form__radio-label"
                >
                  <span class="task-form__radio-button" />
                </label>
                <label
                  :for="`${dayKey}-${taskKey}-option${index + 1}`"
                  class="task-form__text"
                >
                  <strong>{{ option.split(" * ")[0] }}</strong> –
                  {{ option.split(" * ")[1] }}
                </label>
              </div>
              <div class="task-form__option">
                <input
                  type="radio"
                  class="task-form__radio-input"
                  :id="`${dayKey}-${taskKey}-other`"
                  v-model="selections[dayKey][taskKey]"
                  :value="options[dayKey][taskKey].other"
                />
                <label
                  :for="`${dayKey}-${taskKey}-other`"
                  class="task-form__radio-label"
                >
                  <span class="task-form__radio-button" />
                </label>
                <div class="task-form__field">
                  <label
                    :for="`${dayKey}-${taskKey}-other`"
                    class="task-form__text"
                  >
                    Other:
                  </label>
                  <textarea
                    class="task-form__text-input"
                    :value="options[dayKey][taskKey].other"
                    @input="typeHandler($event, taskKey)"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <BaseButton
        variant="blue"
        class="challenge-options__submit-button"
        @click="submitHandler"
      >
        Save &amp; Continue
      </BaseButton>
    </WhiteSection>
  </Page>
</template>

<script>
import options from "../data/challenge-options";

const initialOptions = { ...options };
for (let day in options) {
  initialOptions[day] = { ...options[day] };
  for (let task in options[day]) {
    initialOptions[day][task] = { ...options[day][task] };
    initialOptions[day][task].other = "";
  }
}

const initialSelectedOptions = {};
for (let day in options) {
  initialSelectedOptions[day] = {};
  for (let task in options[day]) {
    initialSelectedOptions[day][task] = options[day][task].options[0];
  }
}

export default {
  data() {
    return {
      currentDay: 1,
      options: initialOptions,
      selections: initialSelectedOptions,
    };
  },
  computed: {
    dayKey() {
      return `day${this.currentDay}`;
    },
    days() {
      return Array.from({ length: 18 }, (_, i) => i + 1);
    },
  },
  methods: {
    typeHandler(event, taskKey) {
      this.options[this.dayKey][taskKey].other = event.target.value;
      this.selections[this.dayKey][taskKey] = event.target.value;
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.challenge-options {
  &__layout {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @include respond(tablet) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__tabs {
    width: 26%;
    min-width: 21rem;
    box-shadow: $boxshadow2;
    border-radius: 0.8rem;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(9, 1fr);
    overflow: hidden;
    position: relative;

    @include respond(tablet) {
      margin-bottom: 9rem;
      width: 100%;
      grid-auto-flow: row;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: initial;
    }

    @include respond(mobile-land) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include respond(mobile) {
      margin-bottom: 7rem;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width: 0.1rem;
      height: 100%;
      background-color: #ccc;

      @include respond(tablet) {
        content: initial;
      }
    }
  }

  &__tab {
    &:not(:last-child):not(:nth-child(9)) {
      border-bottom: 0.1rem solid #ccc;

      @include respond(tablet) {
        border-bottom: none;
      }
    }

    input {
      display: none;
    }

    label {
      display: block;
      cursor: pointer;
      width: 100%;
      height: 100%;
      border: 0.3rem solid transparent;
      padding: 1.5rem;
      text-align: center;
      font-weight: 600;
      font-size: 1.8rem;
      transition: all 0.5s;
      position: relative;

      @include respond(mobile) {
        font-size: 1.6rem;
      }

      &:hover {
        background-color: $color-azure-light;
        z-index: 1;
      }
    }

    &:nth-child(1) label {
      border-radius: 0.8rem 0 0 0;
    }

    &:nth-child(3) label {
      @include respond(mobile-land) {
        border-radius: 0 0.8rem 0 0;
      }
    }

    &:nth-child(6) label {
      @include respond(tablet) {
        border-radius: 0 0.8rem 0 0;
      }

      @include respond(mobile-land) {
        border-radius: 0;
      }
    }

    &:nth-child(9) label {
      border-radius: 0 0 0 0.8rem;

      @include respond(tablet) {
        border-radius: 0;
      }
    }

    &:nth-child(10) label {
      border-radius: 0 0.8rem 0 0;

      @include respond(tablet) {
        border-radius: 0;
      }
    }

    &:nth-child(13) label {
      @include respond(tablet) {
        border-radius: 0 0 0 0.8rem;
      }

      @include respond(mobile-land) {
        border-radius: 0;
      }
    }

    &:nth-child(16) label {
      @include respond(mobile-land) {
        border-radius: 0 0 0 0.8rem;
      }
    }

    &:nth-child(18) label {
      border-radius: 0 0 0.8rem 0;
    }

    input:checked + label {
      background-color: $color-azure-light;
      border-color: $color-azure;
      z-index: 1;
    }
  }

  &__main {
    width: 60%;

    @include respond(tablet) {
      width: 100%;
    }
  }

  .button {
    font-weight: 600;
    margin-top: 8rem;
    width: 100%;
    max-width: 35rem;
  }
}

.task-form {
  border-radius: 1rem;
  box-shadow: $boxshadow2;
  padding: 3.5rem 3rem;

  @include respond(mobile) {
    padding: 3rem 2rem;
  }

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  &__title {
    color: $color-blue-2;
    font-size: 2.8rem;
    margin-bottom: 2.5rem;

    @include respond(mobile) {
      font-size: 2.2rem;
      text-align: center;
    }
  }

  &__option {
    line-height: 1.6;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  &__radio-input {
    display: none;
  }

  &__radio-button {
    display: block;
    height: 2.8rem;
    width: 2.8rem;
    border: 0.4rem solid $color-azure;
    border-radius: 50%;
    cursor: pointer;
    position: relative;

    @include respond(mobile) {
      height: 2.6rem;
      width: 2.6rem;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 1.3rem;
      height: 1.3rem;
      background-color: $color-azure;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.5s;

      @include respond(mobile) {
        height: 1.1rem;
        width: 1.1rem;
      }
    }
  }

  &__radio-input:checked + &__radio-label &__radio-button::after {
    opacity: 1;
  }

  &__text {
    margin-left: 2rem;
    cursor: pointer;
    word-wrap: break-word;

    @include respond(mobile) {
      font-size: 1.45rem;
      margin-left: 1.5rem;
    }
  }

  &__field {
    display: flex;
    align-items: center;
    flex: 1;

    @include respond(tablet-sm) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  &__text-input {
    margin-left: 1.5rem;
    flex: 1;
    font: inherit;
    padding: 0.5rem 1rem;
    height: 4rem;
    outline: none;
    border: 0.1rem solid #ccc;
    transition: all 0.5s;

    @include respond(tablet-sm) {
      margin-top: 0.5rem;
    }

    &:focus {
      border-color: $color-azure;
    }
  }
}
</style>
