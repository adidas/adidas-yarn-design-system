<template>
  <div class="container">
    <page-title>
      <p>{{ $t('views.components.name') }}</p>
      <h2>{{ $t('views.components-buttons.name') }}</h2>
    </page-title>
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-sm-offset-1">
        <section class="section">
          <div class="row">
            <h4 class="col-xs-12">
              {{ $t('views.components-buttons.main-buttons') }}
            </h4>
            <div class="col-xs-12 col-sm-6">
              <button-group name="primary" classes="btn-primary"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <button-group name="secondary" classes="btn-secondary"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <button-group name="tertiary" classes="btn-tertiary"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <button-group name="tertiary-dark" classes="btn-tertiary-dark" dark/>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="row">
            <h4 class="col-xs-12">
              {{ $t('views.components-buttons.colored-buttons') }}
            </h4>
            <div class="col-xs-12 col-sm-6">
              <button-group name="blue"/>
              <button-group name="red"/>
              <button-group name="pink"/>
              <button-group name="yellow"/>
              <button-group name="green"/>
              <button-group name="light-blue"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <button-group name="dark-blue"/>
              <button-group name="orange"/>
              <button-group name="purple"/>
              <button-group name="bright-yellow"/>
              <button-group name="light-green"/>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="row">
            <h4 class="col-xs-12">
              {{ $t('views.components-buttons.sections.icons.name') }}
            </h4>
            <div class="col-xs-6 col-sm-3">
              <p>{{ $t('views.components-buttons.sections.icons.primary') }}</p>
              <button class="btn btn-primary">
                <span class="yarn-icon yarn-icon--apparel"></span>
              </button>
            </div>
            <div class="col-xs-6 col-sm-3">
              <p>{{ $t('views.components-buttons.sections.icons.primary-text-icon') }}</p>
              <button class="btn btn-primary">
                <span class="yarn-icon yarn-icon--products"></span>
                <span>{{ $t('meta.brand') }}</span>
              </button>
            </div>
            <div class="col-xs-6 col-sm-3">
              <p>{{ $t('views.components-buttons.sections.icons.link') }}</p>
              <button class="btn btn-link">
                <span class="yarn-icon yarn-icon--mirror-model"></span>
              </button>
            </div>
            <div class="col-xs-6 col-sm-3">
              <p>{{ $t('views.components-buttons.sections.icons.secondary') }}</p>
              <button class="btn btn-secondary">
                <span class="yarn-icon yarn-icon--edit"></span>
              </button>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="row">
            <h4 class="col-xs-12">
              {{ $t('views.components-buttons.sections.size.name') }}
            </h4>
            <div class="col-xs-6 col-sm-3">
              <p>{{ $t('views.components-buttons.sections.size.default') }}</p>
              <button class="btn btn--pink btn-option">
                <span class="yarn-icon yarn-icon--add-to-basket"></span>
              </button>
            </div>
            <div class="col-xs-6 col-sm-3">
              <p>{{ $t('views.components-buttons.sections.size.large') }}</p>
              <button class="btn btn--red btn-lg btn-option">
                <span class="yarn-icon yarn-icon--add-to-basket"></span>
              </button>
            </div>
            <div class="col-xs-6 col-sm-3">
              <p>{{ $t('views.components-buttons.sections.size.medium') }}</p>
              <button class="btn btn--yellow btn-sm btn-option">
                <span class="yarn-icon yarn-icon--add-to-basket"></span>
              </button>
            </div>
            <div class="col-xs-6 col-sm-3">
              <p>{{ $t('views.components-buttons.sections.size.small') }}</p>
              <button class="btn btn--orange btn-xs btn-option">
                <span class="yarn-icon yarn-icon--add-to-basket"></span>
              </button>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="row">
            <h4 class="col-xs-12">
              {{ $t('views.components-buttons.sections.group.horizontal.name') }}
            </h4>
            <div class="col-xs-12">
              <p>{{ $tc('views.components-buttons.count-button-example', 1, { count: 1 }) }}</p>
              <div class="btn-group">
                <button type="button" class="btn btn--blue">{{ $t('common.position.middle') }}</button>
              </div>
            </div>
            <div class="col-xs-12">
              <p>{{ $tc('views.components-buttons.count-button-example', 1, { count: 2 }) }}</p>
              <div class="btn-group">
                <button type="button" class="btn btn--blue">{{ $t('common.position.left') }}</button>
                <button type="button" class="btn btn--red">{{ $t('common.position.right') }}</button>
              </div>
            </div>
            <div class="col-xs-12">
              <p>{{ $tc('views.components-buttons.count-button-example', 1, { count: 3 }) }}</p>
              <div class="btn-group">
                <button type="button" class="btn btn--blue">{{ $t('common.position.left') }}</button>
                <button type="button" class="btn btn--green">{{ $t('common.position.middle') }}</button>
                <button type="button" class="btn btn--red">{{ $t('common.position.right') }}</button>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="row">
            <h4 class="col-xs-12">
              {{ $t('views.components-buttons.sections.group.vertical.name') }}
            </h4>
            <div class="col-xs-12">
              <p>{{ $tc('views.components-buttons.count-button-example', 1, { count: 1 }) }}</p>
              <div class="btn-group-vertical">
                <button type="button" class="btn btn--blue">middle</button>
              </div>
            </div>
            <div class="col-xs-12">
              <p>{{ $tc('views.components-buttons.count-button-example', 1, { count: 2 }) }}</p>
              <div class="btn-group-vertical">
                <button type="button" class="btn btn--blue">{{ $t('common.position.top') }}</button>
                <button type="button" class="btn btn--red">{{ $t('common.position.bottom') }}</button>
              </div>
            </div>
            <div class="col-xs-12">
              <p>{{ $tc('views.components-buttons.count-button-example', 1, { count: 3 }) }}</p>
              <div class="btn-group-vertical">
                <button type="button" class="btn btn--blue">{{ $t('common.position.top') }}</button>
                <button type="button" class="btn btn--green">{{ $t('common.position.middle') }}</button>
                <button type="button" class="btn btn--red">{{ $t('common.position.bottom') }}</button>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="row">
            <h4 class="col-xs-12">
              {{ $t('views.components-buttons.sections.mobile') }}
            </h4>
            <div class="col-xs-12">
              <p>{{ $tc('views.components-buttons.count-button-example', 1, { count: 1 }) }}</p>
              <div class="btn-group">
                <button type="button" class="btn btn--blue">{{ $t('common.position.middle') }}</button>
              </div>
            </div>
            <div class="col-xs-12">
              <p>{{ $tc('views.components-buttons.count-button-example', 2, { count: 2 }) }}</p>
              <div class="btn-group">
                <button type="button" class="btn btn--blue">{{ $t('common.position.left') }}</button>
                <button type="button" class="btn btn--red">{{ $t('common.position.right') }}</button>
              </div>
            </div>
            <div class="col-xs-12">
              <p>{{ $tc('views.components-buttons.count-button-example', 3, { count: 3 }) }}</p>
              <div class="btn-group">
                <button type="button" class="btn btn--blue">{{ $t('common.position.left') }}</button>
                <button type="button" class="btn btn--green">{{ $t('common.position.middle') }}</button>
                <button type="button" class="btn btn--red">{{ $t('common.position.right') }}</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import buttonGroup from '~/components/buttons/button-group';

export default {
  components: {
    buttonGroup
  }
};
</script>
