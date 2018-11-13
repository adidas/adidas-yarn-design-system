<template>
  <tabs-container :page="'textarea'">
    <template slot="header">
      <p>{{ $t('views.components-forms.name') }}</p>
      <h2>{{ $t('views.components-form-textarea.name') }}</h2>
    </template>
    <template slot="content">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <form @submit.prevent>
              <div class="form-group">
                <label class="control__label" for="textInput">
                  {{ $t('views.components-form-textarea.label') }}
                </label>
                <div class="form-control__container form-control__container--textarea">
                  <textarea class="form-control" rows="6" placeholder="text..."></textarea>
                </div>
              </div>
              <div class="form-group">
                <label class="control__label" for="textInput">
                  {{ $t('views.components-form-textarea.label-disabled') }}
                </label>
                <div class="form-control__container form-control__container--textarea">
                  <textarea class="form-control"
                      rows="6"
                      :value="'disabled text'"
                      disabled="disabled">
                  </textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </template>
  </tabs-container>
</template>
