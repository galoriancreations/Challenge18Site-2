<template>
  <div :class="classes">
    <div class="modal__container">
      <vue-scroll>
        <div class="modal__content">
          <SectionHeading small>Edit Profile</SectionHeading>
          <form class="form" @submit.prevent="submitHandler">
            <div class="form__field" v-for="key in textInputKeys" :key="key">
              <label :for="key" class="form__label">
                {{ labels[key] }}
              </label>
              <input
                v-model="formData[key]"
                :id="key"
                required
                class="form__input"
                :placeholder="labels[key]"
              />
            </div>
            <div class="form__field">
              <label for="language" class="form__label">
                {{ labels.language }}
              </label>
              <select
                v-model="formData.language"
                id="language"
                required
                class="form__input"
              >
                <option
                  v-for="option in languageOptions"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>
            <BaseButton variant="blue">Save profile</BaseButton>
          </form>
        </div>
      </vue-scroll>
    </div>
    <div class="modal__backdrop" @click="$emit('closed')" />
  </div>
</template>

<script>
import { initialData, textInputKeys } from "../../util/functions";
import { languageOptions } from "../../util/options";

export default {
  props: {
    active: Boolean,
  },
  emits: ["closed"],
  inject: ["labels"],
  data() {
    return {
      formData: initialData(this.labels),
      textInputKeys: textInputKeys(this.labels),
      languageOptions,
      loading: false,
      error: null,
    };
  },
  computed: {
    classes() {
      return {
        modal: true,
        "edit-profile": true,
        active: this.active,
      };
    },
  },
  methods: {
    submitHandler() {},
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";
</style>
