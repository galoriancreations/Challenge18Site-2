<template>
  <Page title="Contact Us" name="contact">
    <WhiteSection class="contact">
      <SectionHeading small>Get In Touch</SectionHeading>
      <p class="contact__text">
        Have a question about our project? Need assistance or encountering an
        issue? Interested in collaborating? Leave us a message and we'll get
        back to you as soon as we can.
      </p>
      <ContactForm @success="submitHandler" />
      <BaseSpinner v-if="sending" />
      <Modal :active="showModal" :error="error" />
    </WhiteSection>
  </Page>
</template>

<script>
import emailjs from "emailjs-com";
import ContactForm from "../components/UI/ContactForm";
import Modal from "../components/UI/Modal";

export default {
  components: { ContactForm, Modal },
  data() {
    return {
      showModal: false,
      sending: false,
      error: false,
    };
  },
  methods: {
    async submitHanlder(form) {
      this.sending = true;
      try {
        await emailjs.sendForm(
          "gmail",
          "template_tingglobal",
          form,
          "user_bWwrQk9Sb6FW9cPYtGs0t"
        );
        this.sending = false;
        this.error = false;
        this.showModal = true;
        return true;
      } catch {
        this.sending = false;
        this.error = true;
        this.showModal = true;
        return false;
      }
    },
    closeModal() {
      this.showModal = false;
    },
  },
  provide() {
    return {
      sendMessage: this.submitHanlder,
      closeModal: this.closeModal,
    };
  },
};
</script>

<style lang="scss">
@import "../sass/base.scss";

.contact {
  .section-heading {
    margin-bottom: 6rem;

    @include respond(mobile) {
      margin-bottom: 4rem;
    }
  }

  &__text {
    text-align: center;
    max-width: 70rem;
    margin: auto;
    margin-bottom: 8rem;

    @include respond(mobile) {
      margin-bottom: 5rem;
    }
  }

  .spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
