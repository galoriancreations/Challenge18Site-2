<template>
  <form class="contact-form" @submit.prevent="submitHandler">
    <div class="contact-form__field">
      <label for="name" class="contact-form__label">Name</label>
      <input
        v-model="formData.name"
        id="name"
        name="name"
        placeholder="Your name..."
        required
        class="contact-form__input"
      />
    </div>
    <div class="contact-form__field">
      <label for="email" class="contact-form__label">
        Email
      </label>
      <input
        v-model="formData.email"
        id="email"
        name="email"
        placeholder="Your email address..."
        type="email"
        required
        class="contact-form__input"
      />
    </div>
    <div class="contact-form__field">
      <label for="phone" class="contact-form__label">Phone</label>
      <input
        v-model="formData.phone"
        id="phone"
        name="phone"
        type="tel"
        placeholder="Your phone number (optional)... "
        class="contact-form__input"
      />
    </div>
    <div class="contact-form__field">
      <label for="organization" class="contact-form__label">Organization</label>
      <input
        v-model="formData.organization"
        id="organization"
        name="organization"
        placeholder="Your organization (optional)... "
        class="contact-form__input"
      />
    </div>
    <div class="contact-form__field">
      <label for="role" class="contact-form__label">Role</label>
      <input
        v-model="formData.role"
        id="role"
        name="role"
        placeholder="Your role (optional)... "
        class="contact-form__input"
      />
    </div>
    <div class="contact-form__field">
      <label for="subject" class="contact-form__label">Subject</label>
      <input
        v-model="formData.subject"
        id="subject"
        name="subject"
        placeholder="Subject of your message..."
        class="contact-form__input"
      />
    </div>
    <div class="contact-form__field">
      <label for="message" class="contact-form__label">Message</label>
      <textarea
        v-model="formData.message"
        id="message"
        name="message"
        placeholder="Leave your message here..."
        class="contact-form__input contact-form__textarea"
      />
    </div>
    <BaseButton variant="blue">Submit</BaseButton>
  </form>
</template>

<script>
export default {
  inject: ["sendMessage"],
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        organization: "",
        role: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    async submitHandler(event) {
      const success = await this.sendMessage(event.target);
      if (success) this.resetForm();
    },
    resetForm() {
      for (let key in this.formData) {
        this.formData[key] = "";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin: auto;

  &__field {
    display: flex;
    flex-direction: column;
    margin-bottom: 3.5rem;

    @include respond(mobile) {
      margin-bottom: 3rem;
    }
  }

  &__label {
    font-weight: 500;
    font-size: 1.6rem;
    margin-bottom: 1rem;

    @include respond(mobile) {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
    }
  }

  &__input {
    font: inherit;
    font-size: 1.65rem;
    line-height: 1.6;
    padding: 1.2rem 1rem;
    border: 2px solid transparent;
    outline: none;
    border-radius: 0.8rem;
    transition: all 0.4s;
    width: 100%;
    box-shadow: $boxshadow2;

    @include respond(mobile) {
      font-size: 1.5rem;
    }

    &:focus {
      border-color: $color-azure;
    }
  }

  &__textarea {
    resize: none;
    height: 15rem;
  }

  .button {
    margin-top: 1.5rem;
    font-weight: 600;
    width: 100%;

    @include respond(mobile) {
      margin-top: 1rem;
    }
  }
}
</style>
