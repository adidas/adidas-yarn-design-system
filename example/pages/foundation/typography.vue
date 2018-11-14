<template>
  <div class="container typography">
    <page-title>
      <p>{{ $t('views.foundation.name') }}</p>
      <h2>{{ $t('views.foundation-typography.name') }}</h2>
    </page-title>
    <section class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h4 class="title">{{ $t('views.foundation-typography.section.yarn-heading.title') }}</h4>
        <p>{{ $t('views.foundation-typography.section.yarn-heading.description') }}</p>
        <div class="jumbotron">
          <div class="row">
            <span class="col-xs-12 col-sm-2 text-uppercase">
              {{ $t('views.foundation-typography.section.yarn-heading.types.black') }}
            </span>
            <div class="col-xs-12 col-sm-10">
              <span class="yarn-heading--bold text-uppercase">
                {{ $t('views.foundation-typography.example-text') }}
              </span>
            </div>
          </div>
          <div class="row">
            <span class="col-xs-12 col-sm-2 text-uppercase">
              {{ $t('views.foundation-typography.section.yarn-heading.types.light') }}
            </span>
            <div class="col-xs-12 col-sm-10">
              <span class="yarn-heading--light text-uppercase">
                {{ $t('views.foundation-typography.example-text') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h4 class="title">{{ $t('views.foundation-typography.section.yarn-base.title') }}</h4>
        <p>{{ $t('views.foundation-typography.section.yarn-base.description') }}</p>
        <div class="jumbotron">
          <div class="row">
            <span class="col-xs-12 col-sm-2 text-uppercase">
              {{ $t('views.foundation-typography.section.yarn-base.types.bold') }}
            </span>
            <div class="col-xs-12 col-sm-10">
              <span class="yarn-base yarn-base--bold text-uppercase">
                {{ $t('views.foundation-typography.example-text') }}
              </span>
              <span class="yarn-base yarn-base--bold">
                {{ $t('views.foundation-typography.example-text') }}
              </span>
            </div>
          </div>
          <div class="row">
            <span class="col-xs-12 col-sm-2 text-uppercase">
              {{ $t('views.foundation-typography.section.yarn-base.types.regular') }}
            </span>
            <div class="col-xs-12 col-sm-10">
              <span class="yarn-base yarn-base--regular text-uppercase">
                {{ $t('views.foundation-typography.example-text') }}
              </span>
              <span class="yarn-base yarn-base--regular">
                {{ $t('views.foundation-typography.example-text') }}
              </span>
            </div>
          </div>
          <div class="row">
            <span class="col-xs-12 col-sm-2 text-uppercase">
              {{ $t('views.foundation-typography.section.yarn-base.types.light') }}
            </span>
            <div class="col-xs-12 col-sm-10">
              <span class="yarn-base yarn-base--light text-uppercase">
                {{ $t('views.foundation-typography.example-text') }}
              </span>
              <span class="yarn-base yarn-base--light">
                {{ $t('views.foundation-typography.example-text') }}
              </span>
            </div>
          </div>
          <div class="row">
            <span class="col-xs-12 col-sm-2 text-uppercase">
              {{ $t('views.foundation-typography.section.yarn-base.types.light-italic') }}
            </span>
            <div class="col-xs-12 col-sm-10">
              <span class="yarn-base yarn-base--light-italic text-uppercase">
                {{ $t('views.foundation-typography.example-text') }}
              </span>
              <span class="yarn-base yarn-base--light-italic">
                {{ $t('views.foundation-typography.example-text') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h4 class="title">{{ $t('views.foundation-typography.section.text.title') }}</h4>
        <p>{{ $t('views.foundation-typography.section.text.description') }}</p>
        <div class="jumbotron">
          <div class="row">
            <div class="col-xs-12">
              <h1>h1 {{ $t('views.foundation-typography.heading') }}</h1>
              <h2>h2 {{ $t('views.foundation-typography.heading') }}</h2>
              <h3>h3 {{ $t('views.foundation-typography.heading') }}</h3>
              <h4>h4 {{ $t('views.foundation-typography.heading') }}</h4>
              <h5>h5 {{ $t('views.foundation-typography.heading') }}</h5>
              <h6>h6 {{ $t('views.foundation-typography.heading') }}</h6>
              <p>{{ $t('views.foundation-typography.paragraph') }}</p>
              <p><small>{{ $t('views.foundation-typography.paragraph-small') }}</small></p>
              <pre>{{ $t('views.foundation-typography.monospace') }}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h4 class="title">{{ $t('views.foundation-typography.section.font-size.title') }}</h4>
        <p>{{ $t('views.foundation-typography.section.font-size.description') }}</p>
        <div class="jumbotron">
          <div class="row">
            <div class="col-xs-12">
              4.5rem
            </div>
            <div class="col-xs-12">
              <h1 class="yarn-heading--bold inline">
                {{ $t('meta.brand') }}
              </h1>
              <h1 class="yarn-base--light inline">
                {{ $t('meta.brand') }}
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              3rem
            </div>
            <div class="col-xs-12">
              <h2 class="yarn-heading--bold inline">
                {{ $t('meta.brand') }}
              </h2>
              <h2 class="yarn-base--light inline">
                {{ $t('meta.brand') }}
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              2.5rem
            </div>
            <div class="col-xs-12">
              <h3 class="yarn-heading--bold inline">
                {{ $t('meta.brand') }}
              </h3>
              <h3 class="yarn-base--light inline">
                {{ $t('meta.brand') }}
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              2rem
            </div>
            <div class="col-xs-12">
              <h4 class="yarn-heading--bold inline">
                {{ $t('meta.brand') }}
              </h4>
              <h4 class="yarn-base--light inline">
                {{ $t('meta.brand') }}
              </h4>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              1.5rem
            </div>
            <div class="col-xs-12">
              <h5 class="yarn-heading--bold inline">
                {{ $t('meta.brand') }}
              </h5>
              <h5 class="yarn-base--light inline">
                {{ $t('meta.brand') }}
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              1.25rem
            </div>
            <div class="col-xs-12">
              <h6 class="yarn-heading--bold inline">
                {{ $t('meta.brand') }}
              </h6>
              <h6 class="yarn-base--light inline">
                {{ $t('meta.brand') }}
              </h6>
            </div>
          </div>
          <div class="row highlight">
            <div class="col-xs-12">
              <span>1rem</span>
              <span class="yarn-base--light highlight--text">
                {{ $t('views.foundation-typography.section.font-size.base-size') }}
              </span>
            </div>
            <div class="col-xs-12">
              <span class="yarn-heading--bold inline">
                {{ $t('meta.brand') }}
              </span>
              <span class="yarn-base--light inline">
                {{ $t('meta.brand') }}
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              0.875rem
            </div>
            <div class="col-xs-12">
              <span class="small yarn-heading--bold inline">
                {{ $t('meta.brand') }}
              </span>
              <span class="small yarn-base--light inline">
                {{ $t('meta.brand') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="less">
  @import '../../../src/less/variables/main';
  @import '../../../src/less/mixins/fonts';

  .typography {
    .inline {
      margin-right: .25em;
      display: inline-block;

      &:last-child {
        margin-right: 0;
      }
    }

    .highlight {
      background-color: @primary-lightgray;

      &--text {
        color: @blue-100;
        margin-left: .25em;
      }
    }

    .yarn-base {
      &--bold {
        .font-family-base-bold();
      }

      &--regular {
        .font-family-base-regular();
      }

      &--light {
        .font-family-base-light();

        &-italic {
          .font-family-base-light-italic();
        }
      }

    }

    .yarn-heading {
      &--bold {
        .font-family-heading-bold();
      }

      &--light {
        .font-family-heading-light();
      }
    }
  }
</style>
