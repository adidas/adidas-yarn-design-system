<template>
  <tabs-container :page="'radio'"
      :title="$t('views.components-form-radio.name')"
      :section="$t('views.components-forms.name')">
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
                {{ $t('views.components-form-radio.values.third') }} ({{ $t('common.disabled'), $t('common.selected') }})
              </span>
            </label>
          </div>
        </form>
      </section>
    </div>
  </tabs-container>
</template>
