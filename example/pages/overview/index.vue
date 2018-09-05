<template>
  <div class="container overview">
    <div class="jumbotron">
      <div class="row overview__header">
        <div class="overview__header__title col-xs-12 col-sm-8 col-sm-offset-2">
          <p class="overview__header__title__description ">Overview</p>
          <h2 class="overview__header__title__subtitle ">be part of the adidas YARN design system</h2>
        </div>
      </div>
    </div>
    <div class="row overview__panel-container">
      <div class="col-xs-4">
        <div class="overview__panel-container__title">designer</div>
      </div>
      <div class="col-xs-4">
        <div class="overview__panel-container__title">developer</div>
      </div>
      <div class="col-xs-4">
        <div class="overview__panel-container__title">project manager</div>
      </div>
    </div>
    <div class="row overview__panel-container">
      <div class="col-xs-4">
        <aside class="overview__panel-container__content">
          <p>
            Yarn provides resources for designers to create a unified experience across platforms.
            This includes a collection of symbols and styles for rapid design and layout prototyping.
            Explore the guidelines to learn the Yarn UI patterns and principles.
          </p>
        </aside>
      </div>
      <div class="col-xs-4">
        <aside class="overview__panel-container__content">
          <p>
            Yarn enables developers to use consistent styling and behaviors in prototyping and production
            work. It provides front-end developers a collection of reusable HTML and CSS partials to build
            websites and user interfaces.
          </p>
        </aside>
      </div>
      <div class="col-xs-4">
        <aside class="overview__panel-container__content">
          <p>
            Yarn ensures that teams work consistently with the adidas principles, design language, and
            best practices. Streamlined and optimized workflows anticipate needs to help people work more
            efficiently.
          </p>
        </aside>
      </div>
    </div>
    <div class="row overview__panel-container">
      <div class="col-xs-4">
        <footer class="overview__panel-container__footer">
          <p class="overview__panel-container__footer__button">
            <nuxt-link class="btn btn-primary" :to="{ name: 'overview-designer' }">
              {{ $t('views.overview-designer.name') }}
            </nuxt-link>
          </p>
        </footer>
      </div>
      <div class="col-xs-4">
        <footer class="overview__panel-container__footer">
          <p class="overview__panel-container__footer__button">
            <nuxt-link class="btn btn-primary" :to="{ name: 'overview-developer' }">
              {{ $t('views.overview-developer.name') }}
            </nuxt-link>
          </p>
        </footer>
      </div>
      <div class="col-xs-4">
        <footer class="overview__panel-container__footer">
          <p class="overview__panel-container__footer__button">
            <nuxt-link class="btn btn-primary" :to="{ name: 'overview-manager' }">
              {{ $t('views.overview-manager.name') }}
            </nuxt-link>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  @import '../../../src/less/variables/main';
  @import '../../../src/less/mixins/fonts';

  .overview {
    @border: 1px solid @primary-lightgray;

    &__panel-container {
      padding: 0;
      display: flex;
      flex-direction: row;

      &__title {
        border: @border;
        border-bottom: none;
        font-size: 2em;
        text-align: center;
        line-height: 1;
        padding-top: 1.5em;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .font-family-heading-bold();
      }

      &__content {
        border-left: @border;
        border-right: @border;
        padding: 1em 1.5em;
        height: 100%;
        .font-family-base-light()
      }

      &__footer {
        border: @border;
        border-top: none;
        margin-bottom: .75em;
        padding-bottom: 2em;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        &__button {
          text-align: center;
        }
      }
    }
  }

</style>
