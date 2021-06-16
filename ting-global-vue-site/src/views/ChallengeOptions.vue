<template>
  <Page title="Challenge Options" name="challenge-options">
    <WhiteSection tag="main" class="challenge-options">
      <section class="challenge-options__top">
        <div class="challenge-options__top-field">
          <h3 class="challenge-options__top-label">Challenge name</h3>
          <textarea-autosize
            v-model="name"
            class="challenge-options__name"
            placeholder="Enter challenge name here"
            :rows="1"
            ref="textarea"
          />
        </div>
        <div class="challenge-options__top-field">
          <h3 class="challenge-options__top-label">Challenge language</h3>
          <v-select
            v-model="language"
            :options="languageOptions"
            :reduce="(option) => option.name"
            class="language-selector"
          />
        </div>
      </section>
      <SectionSeperator />
      <div
        v-if="options.length"
        class="challenge-options__layout"
        :style="{ direction }"
      >
        <section class="challenge-options__tabs">
          <div class="challenge-options__tabs-list">
            <div v-for="day in days" :key="day" class="challenge-options__tab">
              <input
                type="radio"
                v-model="currentDay"
                :value="day"
                :id="`day${day}`"
              />
              <label :for="`day${day}`">{{ dayLabel }} {{ day }}</label>
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
              v-for="(task, taskIndex) in options[dayIndex].tasks"
              :key="task.id"
              @submit.prevent
            >
              <h3 class="task-form__title">
                {{ `${taskLabel} ${taskIndex + 1}` }}
              </h3>
              <div
                v-for="(option, optionIndex) in task.options"
                :key="option.id"
                class="task-form__option"
              >
                <input
                  type="radio"
                  v-model="selections[dayIndex][taskIndex]"
                  :value="option.text"
                  :id="option.id"
                  class="task-form__radio-input"
                />
                <label :for="option.id" class="task-form__radio-label">
                  <span class="task-form__radio-button" />
                </label>
                <label
                  :for="option.id"
                  class="task-form__text"
                  v-html="convertedOptions[dayIndex][taskIndex][optionIndex]"
                  v-linkified
                />
              </div>
              <form @keydown="addOptionOnEnter($event, taskIndex)">
                <textarea-autosize
                  v-model="extraInputs[dayIndex][taskIndex]"
                  class="task-form__extra"
                  placeholder="Type and press Enter to add a new option..."
                  :rows="1"
                />
              </form>
            </form>
          </div>
        </section>
      </div>
      <BaseButton variant="blue" @click="submitHandler">
        Publish challenge
      </BaseButton>
      <BaseSpinner v-if="submitting" />
      <ErrorMessage v-else-if="errorSubmitting" :error="errorSubmitting" />
    </WhiteSection>
  </Page>
</template>

<script>
import emptyTemplate from "../data/empty-template";
import {
  initialOptions,
  initialSelections,
  initialExtraInputs,
  numbersArray,
  convertAsteriks,
} from "../util/functions";
import {
  languageOptions,
  rtlLanguages,
  dayTranslations,
  taskTranslations,
} from "../util/options";
import uniqid from "uniqid";
import store from "../store";

const template = () => store.getters.selectedTemplate || emptyTemplate;

export default {
  data() {
    return {
      name: template().name,
      language: template().language,
      languageOptions,
      currentDay: 1,
      options: initialOptions(template().days),
      selections: initialSelections(template().days),
      extraInputs: initialExtraInputs(template().days),
      dayTitleEdited: false,
      optionEdited: null,
      submitting: false,
      errorSubmitting: null,
      saveTimeout: null,
    };
  },
  computed: {
    selectedTemplate() {
      return this.$store.getters.selectedTemplate;
    },
    days() {
      return numbersArray(this.options.length);
    },
    dayIndex() {
      return this.currentDay - 1;
    },
    dayLabel() {
      return dayTranslations[this.language] || "Day";
    },
    dayTitle() {
      return `${this.dayLabel} ${this.currentDay} – ${this.options[
        this.dayIndex
      ].title || "(Edit day title)"}`;
    },
    taskLabel() {
      return taskTranslations[this.language] || "Task";
    },
    convertedOptions() {
      const texts = [];
      this.options.forEach((day, dayIndex) => {
        texts.push([]);
        day.tasks.forEach((task, taskIndex) => {
          texts[dayIndex].push([]);
          task.options.forEach((option) => {
            texts[dayIndex][taskIndex].push(
              convertAsteriks(option.text.replace(" - ", " – "))
            );
          });
        });
      });
      return texts;
    },
    direction() {
      if (rtlLanguages.includes(this.language)) return "rtl";
      else return null;
    },
    user() {
      return this.$store.getters.user;
    },
    finalTemplateData() {
      return {
        name: this.name,
        language: this.language,
        days: this.options,
      };
    },
    finalChallengeData() {
      const challenge = { name: this.name, language: this.language, days: [] };
      this.options.forEach((day, dayIndex) => {
        challenge.days.push({
          day: dayIndex + 1,
          title: day.title,
          tasks: this.selections[dayIndex],
        });
      });
      return challenge;
    },
  },
  methods: {
    loadTemplate() {
      const savedDraft = JSON.parse(localStorage.getItem("savedDraft"));
      if (savedDraft) {
        for (let key in savedDraft) {
          this[key] = savedDraft[key];
        }
        this.extraInputs = initialExtraInputs(savedDraft.options);
      } else if (!this.selectedTemplate) {
        this.language = this.user?.language || "English";
      }
    },
    enterKeyHandler(event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    },
    addOptionOnEnter(event, taskIndex) {
      if (event.key === "Enter") {
        console.log(this.extraInputs[this.dayIndex][taskIndex].trim());
        event.preventDefault();
        if (event.target.value.trim()) {
          console.log("should add");
          this.options[this.dayIndex].tasks[taskIndex].options.push({
            id: uniqid(),
            text: event.target.value.trim(),
          });
          this.selections[this.dayIndex][taskIndex] = event.target.value.trim();
          this.extraInputs[this.dayIndex][taskIndex] = "";
          console.log(this.options[this.dayIndex].tasks[taskIndex].options);
          console.log(this.selections[this.dayIndex][taskIndex]);
        }
      }
    },
    editOption(event, taskIndex, optionIndex) {
      this.options[this.dayIndex].tasks[taskIndex].options[optionIndex].text =
        event.target.value;
      this.selections[this.dayIndex][taskIndex] = event.target.value;
    },
    autoSaveDraft() {
      clearTimeout(this.saveTimeout);
      this.saveTimeout = setTimeout(() => {
        const savedDraft = {
          name: this.name,
          language: this.language,
          options: this.options,
          selections: this.selections,
        };
        localStorage.setItem("savedDraft", JSON.stringify(savedDraft));
      }, 1000);
    },
    submitHandler() {},
  },
  watch: {
    currentDay() {
      const optionsTop = this.$refs.container.getBoundingClientRect().top;
      window.scrollTo(0, window.scrollY + optionsTop - 150);
    },
    name() {
      this.autoSaveDraft();
    },
    language() {
      this.autoSaveDraft();
    },
    options: {
      handler() {
        this.autoSaveDraft();
      },
      deep: true,
    },
    selections: {
      handler() {
        this.autoSaveDraft();
      },
      deep: true,
    },
  },
  created() {
    this.loadTemplate();
    this.autoSaveDraft();
  },
  mounted() {
    this.$refs.textarea.$el.addEventListener("keydown", this.enterKeyHandler);
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
    border: none;
    outline: none;
    text-align: center;

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
    margin: 8.5rem 0 9.5rem;

    @include respond(mobile) {
      margin: 6.5rem 0;
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

  &__layout[style="direction: rtl;"] &__tab {
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

  &__extra {
    font: inherit;
    outline: none;
    width: 100%;
    padding: 1rem 2rem;
    border: 0.2rem solid #ccc;
    border-radius: 100px;
    margin-top: 1rem;
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
