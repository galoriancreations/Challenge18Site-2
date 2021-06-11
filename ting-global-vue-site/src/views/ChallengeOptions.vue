<template>
  <Page title="Challenge Options" name="challenge-options">
    <WhiteSection tag="main" class="challenge-options">
      <section class="challenge-options__top">
        <div class="challenge-options__top-field">
          <h3 class="challenge-options__top-label">Challenge name</h3>
          <h2 v-if="topInputsReadonly" class="challenge-options__name">
            {{ name }}
          </h2>
          <input
            v-else
            class="challenge-options__name"
            v-model="name"
            placeholder="Enter challenge name here"
          />
        </div>
        <div class="challenge-options__top-field">
          <h3 class="challenge-options__top-label">Challenge language</h3>
          <p v-if="topInputsReadonly" class="challenge-options__language">
            {{ language }}
          </p>
          <v-select
            v-else
            v-model="language"
            :options="languageOptions"
            :reduce="(option) => option.name"
            class="language-selector"
          />
        </div>
      </section>
      <SectionSeperator />
      <div class="challenge-options__layout" :style="{ direction }">
        <section class="challenge-options__tabs">
          <div class="challenge-options__tabs-list">
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
        </section>
        <section class="challenge-options__main" ref="container">
          <SectionHeading small>
            {{ dayTitle }}
          </SectionHeading>
          <div class="challenge-options__content">
            <form
              class="task-form"
              v-for="(task, taskKey) in options[dayKey].tasks"
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
                  <strong v-if="option.includes(' * ')">
                    {{ option.split(" * ")[0] }}
                  </strong>
                  <span v-if="option.includes(' * ')"> – </span>
                  <span
                    v-html="option.split(' * ')[option.includes(' * ') ? 1 : 0]"
                    v-linkified
                  />
                </label>
              </div>
              <div class="task-form__option">
                <input
                  type="radio"
                  class="task-form__radio-input"
                  :id="`${dayKey}-${taskKey}-other`"
                  v-model="selections[dayKey][taskKey]"
                  :value="options[dayKey].tasks[taskKey].other"
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
                    :value="options[dayKey].tasks[taskKey].other"
                    @input="typeHandler($event, taskKey)"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <BaseButton variant="blue" @click="submitHandler">
        Publish challenge
      </BaseButton>
    </WhiteSection>
  </Page>
</template>

<script>
import options from "../data/challenge-options";
import { initialOptions, initialSelections } from "../util/functions";
import { languageOptions } from "../util/options";

export default {
  data() {
    return {
      currentDay: 1,
      name: options.name,
      language: options.language,
      languageOptions,
      options: initialOptions(options.days),
      selections: initialSelections(options.days),
    };
  },
  computed: {
    topInputsReadonly() {
      return false;
    },
    days() {
      return Array.from({ length: 18 }, (_, i) => i + 1);
    },
    dayKey() {
      return `day${this.currentDay}`;
    },
    dayTitle() {
      return `Day ${this.currentDay} – ${this.options[this.dayKey].title}`;
    },
    direction() {
      switch (this.language) {
        case "Hebrew":
        case "Arabic":
        case "Persian":
          return "rtl";
        default:
          return null;
      }
    },
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    typeHandler(event, taskKey) {
      this.options[this.dayKey].tasks[taskKey].other = event.target.value;
      this.selections[this.dayKey][taskKey] = event.target.value;
    },
    submitHandler() {},
  },
  watch: {
    currentDay() {
      const optionsTop = this.$refs.container.getBoundingClientRect().top;
      if (window.innerWidth > 1100) {
        window.scrollTo(0, window.scrollY + optionsTop - 150);
      }
    },
    language(val) {
      console.log(val);
    },
    selections: {
      handler(value) {
        console.log(value);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.challenge-options {
  &__top {
    text-align: center;
  }

  &__top-field {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 4rem;

      @include respond(mobile) {
        margin-bottom: 3.5rem;
      }
    }

    input {
      text-align: center;
      border: none;
      outline: none;
    }
  }

  &__top-label {
    font-weight: 500;
    font-size: 1.85rem;
    margin-bottom: 1.2rem;

    @include respond(mobile) {
      font-size: 1.65rem;
    }
  }

  &__name {
    font: inherit;
    font-size: 5rem;
    font-family: "Spartan", sans-serif;
    letter-spacing: -0.5px;
    font-weight: 600;
    color: $color-blue-2;

    @include respond(mobile) {
      font-size: 3rem;
    }
  }

  &__language {
    font: inherit;
    font-size: 2.5rem;
    font-weight: 600;

    @include respond(mobile) {
      font-size: 2rem;
    }
  }

  .section-seperator {
    margin: 8rem 0 10rem;

    @include respond(mobile) {
      margin: 6rem 0 7rem;
    }
  }

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
    width: 15%;

    @include respond(tablet) {
      margin-bottom: 9rem;
      width: 100%;
    }

    @include respond(mobile) {
      margin-bottom: 8rem;
    }
  }

  &__tabs-list {
    box-shadow: $boxshadow2;
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
    position: relative;

    @include respond(desktop) {
      border-radius: 0.8rem;
    }

    @include respond(tablet) {
      grid-template-columns: repeat(6, 1fr);
    }

    @include respond(mobile-land) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__tab {
    &:not(:last-child) {
      @include respond(desktop) {
        border-bottom: 0.1rem solid #ccc;
      }
    }

    &:not(:nth-child(6n)) {
      @include respond(tablet) {
        border-right: 0.1rem solid #ccc;
      }

      @include respond(mobile-land) {
        border-right: none;
      }
    }

    &:not(:nth-child(3n)) {
      @include respond(mobile-land) {
        border-right: 0.1rem solid #ccc;
      }
    }

    &:not(:nth-child(n + 13)) {
      @include respond(tablet) {
        border-bottom: 0.1rem solid #ccc;
      }
    }

    &:not(:nth-child(n + 16)) {
      @include respond(mobile-land) {
        border-bottom: 0.1rem solid #ccc;
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
        background-color: rgba($color-azure-light, 0.8);
        z-index: 1;
      }
    }

    &:first-child label {
      @include respond(desktop) {
        border-radius: 0.8rem 0.8rem 0 0;
      }
    }

    &:last-child label {
      @include respond(desktop) {
        border-radius: 0 0 0.8rem 0.8rem;
      }
    }

    input:checked + label {
      background-color: rgba($color-azure-light, 0.8);
      border-color: $color-azure;
      z-index: 1;
    }
  }

  &__main {
    width: 72.75%;

    @include respond(tablet) {
      width: 100%;
    }

    .section-heading {
      max-width: 100%;
    }
  }

  .button {
    font-weight: 600;
    margin-top: 8rem;
    width: 100%;
    max-width: 35rem;

    @include respond(mobile) {
      margin-top: 5rem;
    }
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
    line-height: 1.7;
    display: flex;
    align-items: center;

    @include respond(mobile) {
      line-height: 1.6;
    }

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
    margin-left: 1.5rem;
    word-wrap: break-word;

    @include respond(mobile) {
      font-size: 1.45rem;
    }

    a {
      color: $color-blue-2;
      transition: color 0.5s;

      &:hover {
        color: $color-gold-3;
      }
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
    height: 6rem;
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

.language-selector {
  width: 100%;
  max-width: 37rem;
  margin: auto;

  * {
    font: inherit;
  }
}

.challenge-options .language-selector {
  font-weight: 600;
  font-size: 2.2rem;

  @include respond(mobile) {
    font-size: 1.9rem;
  }

  .vs__clear {
    display: none;
  }

  ul {
    * {
      font-size: 1.6rem;

      @include respond(mobile) {
        font-size: 1.45rem;
      }
    }
  }
}
</style>
