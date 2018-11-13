<template>
  <tabs-container :page="'radio'">
    <template slot="header">
      <p>{{ $t('views.components-forms.name') }}</p>
      <h2>{{ $t('views.components-form-radio.name') }}</h2>
    </template>
    <template slot="content">
      <div class="container">
        <section class="section row">
          <form @submit.prevent>
            <div class="col-xs-12 col-sm-6">
              <label class="control control--radio">
                <input class="control__input" type="radio" name="enabled"/>
                <span class="control__indicator yarn-icon yarn-icon--radio"></span>
                <span class="control__label">
                  {{ $t('views.components-form-radio.values.first') }}
                </span>
              </label>
              <label class="control control--radio">
                <input class="control__input" type="radio" name="enabled"/>
                <span class="control__indicator yarn-icon yarn-icon--radio"></span>
                <span class="control__label">
                  {{ $t('views.components-form-radio.values.second') }}
                </span>
              </label>
              <label class="control control--radio">
                <input class="control__input" type="radio" name="enabled" checked="checked"/>
                <span class="control__indicator yarn-icon yarn-icon--radio"></span>
                <span class="control__label">
                  {{ $t('views.components-form-radio.values.third') }} ({{ $t('common.selected') }})
                </span>
              </label>
            </div>
            <div class="col-xs-12 col-sm-6">
              <label class="control control--radio disabled">
                <input class="control__input" type="radio" name="disabled" disabled="disabled"/>
                <span class="control__indicator yarn-icon yarn-icon--radio"></span>
                <span class="control__label">
                  {{ $t('views.components-form-radio.values.first') }} ({{ $t('common.disabled') }})
                </span>
              </label>
              <label class="control control--radio disabled">
                <input class="control__input" type="radio" name="disabled" disabled="disabled"/>
                <span class="control__indicator yarn-icon yarn-icon--radio"></span>
                <span class="control__label">
                  {{ $t('views.components-form-radio.values.second') }} ({{ $t('common.disabled') }})
                </span>
              </label>
              <label class="control control--radio disabled">
                <input class="control__input" type="radio" name="disabled" disabled="disabled" checked="checked"/>
                <span class="control__indicator yarn-icon yarn-icon--radio"></span>
                <span class="control__label">
                  {{ $t('views.components-form-radio.values.third') }}
                  ({{ $t('common.disabled') }}, {{ $t('common.selected') }})
                </span>
              </label>
            </div>
          </form>
        </section>
      </div>
    </template>
  </tabs-container>
</template>
