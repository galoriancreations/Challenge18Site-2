<template>
  <Page title="Register" name="register">
    <WhiteSection tag="main">
      <section class="register">
        <p>
          To register for <strong>Challenge 18</strong>, please follow these two
          steps:
        </p>
        <ol>
          <li>
            1.
            <a
              href="https://wa.me/972559468468?text=user%3D"
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong>Open this link</strong> </a
            >.
          </li>
          <li>
            2.
            <strong
              >Type in your username after the = and send us the
              message.</strong
            >
          </li>
        </ol>
        <p>For example: <strong>User=Alex1</strong></p>
      </section>
    </WhiteSection>
  </Page>
</template>

<style lang="scss">
@import "../sass/base.scss";

.register {
  box-shadow: $boxshadow2;
  border-radius: 1rem;
  margin: auto;
  max-width: 75rem;
  text-align: center;
  padding: 4.5rem 2.5rem;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include respond(mobile) {
    padding: 3rem 1.5rem;
  }

  & > * {
    font-size: 2rem;

    @include respond(mobile) {
      font-size: 1.8rem;
    }

    &:not(:last-child) {
      margin-bottom: 3rem;

      @include respond(mobile) {
        margin-bottom: 2rem;
      }
    }
  }

  li {
    list-style: none;

    &:not(:last-child) {
      @include respond(mobile) {
        margin-bottom: 0.8rem;
      }
    }
  }

  strong {
    font-weight: 600;
  }

  a {
    color: $color-blue-2;
    transition: color 0.4s;

    &:hover {
      color: $color-gold-3;
    }
  }
}
</style>
