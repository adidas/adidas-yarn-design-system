<template>
  <tabs-container page="checkbox">
    <template slot="header">
      <p>{{ $t('views.components-forms.name') }}</p>
      <h2>{{ $t('views.components-form-checkbox.name') }}</h2>
    </template>
    <template slot="content">
      <div class="container">
        <section class="section row">
          <form @submit.prevent>
            <div class="col-xs-12 col-sm-6">
              <label class="control control--checkbox">
                <input class="control__input" type="checkbox"/>
                <span class="control__indicator yarn-icon yarn-icon yarn-icon--checkbox"></span>
                <span class="control__label">{{ $t('common.unchecked') }}</span>
              </label>
              <label class="control control--checkbox">
                <input class="control__input" type="checkbox" checked="checked"/>
                <div class="control__indicator yarn-icon yarn-icon yarn-icon--checkbox"></div>
                <span class="control__label">{{ $t('common.checked') }}</span>
              </label>
            </div>
            <div class="col-xs-12 col-sm-6">
              <label class="control control--checkbox disabled">
                <input class="control__input" type="checkbox" disabled="disabled"/>
                <span class="control__indicator yarn-icon yarn-icon yarn-icon--checkbox"></span>
                <span class="control__label">{{ $t('common.unchecked') }} ({{ $t('common.disabled') }})</span>
              </label>
              <label class="control control--checkbox disabled">
                <input class="control__input" type="checkbox" disabled="disabled" checked="checked"/>
                <span class="control__indicator yarn-icon yarn-icon yarn-icon--checkbox"></span>
                <span class="control__label">{{ $t('common.checked') }} ({{ $t('common.disabled') }})</span>
              </label>
            </div>
          </form>
        </section>
        <section class="section row">
          <form @submit.prevent>
            <div class="col-xs-12 col-sm-6">
              <label class="control control--checkmark background-color--yellow-20">
                <input class="control__input" type="checkbox"/>
                <span class="control__indicator control__indicator--checkmark">
                  <span class="yarn-icon yarn-icon--checkmark"></span>
                </span>
                <span class="control__label">{{ $t('common.unchecked') }}</span>
              </label>
              <label class="control control--checkmark background-color--orange-20">
                <input class="control__input" type="checkbox" checked="checked"/>
                <span class="control__indicator control__indicator--checkmark">
                  <span class="yarn-icon yarn-icon--checkmark"></span>
                </span>
                <span class="control__label">{{ $t('common.checked') }}</span>
              </label>
            </div>
            <div class="col-xs-12 col-sm-6">
              <label class="control control--checkmark disabled background-color--yellow-20">
                <input class="control__input" type="checkbox" disabled="disabled"/>
                <span class="control__indicator control__indicator--checkmark">
                  <span class="yarn-icon yarn-icon--checkmark"></span>
                </span>
                <span class="control__label">{{ $t('common.unchecked') }} ({{ $t('common.disabled') }})</span>
              </label>
              <label class="control control--checkmark disabled background-color--orange-20">
                <input class="control__input" type="checkbox" disabled="disabled" checked="checked"/>
                <span class="control__indicator control__indicator--checkmark">
                  <span class="yarn-icon yarn-icon--checkmark"></span>
                </span>
                <span class="control__label">{{ $t('common.checked') }} ({{ $t('common.disabled') }})</span>
              </label>
            </div>
          </form>
        </section>
      </div>
    </template>
  </tabs-container>
</template>
