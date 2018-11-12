<template>
  <tabs-container :page="'input'"
      :title="$t('views.components-form-input.name')"
      :section="$t('views.components-forms.name')">
    <div class="container">
      <section class="section row">
        <h4 class="col-xs-12">{{ $t('views.components-form-input.sections.basic.name') }}</h4>
        <form class="col-xs-12" @submit.prevent>
          <div class="form-group">
            <label class="control__label" for="textInput">
              {{ $t('views.components-form-input.sections.basic.text') }}
            </label>
            <div class="form-control__container">
              <input type="email" class="form-control" id="textInput" placeholder="text"/>
            </div>
          </div>
          <div class="form-group">
            <label class="control__label" for="readonlyInput">
              {{ $t('views.components-form-input.sections.basic.readonly') }}
            </label>
            <div class="form-control__container">
              <input type="email" class="form-control" id="readonlyInput" value="readonly text" readonly="readonly"/>
            </div>
          </div>
          <div class="form-group">
            <label class="control__label" for="disabledInput">
              {{ $t('views.components-form-input.sections.basic.disabled') }}
            </label>
            <div class="form-control__container disabled">
              <input type="password"
                  class="form-control"
                  id="disabledInput"
                  placeholder="disabled"
                  disabled="disabled"/>
              <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
            </div>
          </div>
          <div class="form-group required">
            <label class="control__label" for="requiredTextInput">
              {{ $t('views.components-form-input.sections.basic.required') }}
            </label>
            <div class="form-control__container">
              <input type="text"
                  class="form-control"
                  id="requiredTextInput"
                  value="required value"
                  placeholder="required"/>
            </div>
          </div>
        </form>
      </section>
      <section class="section row">
        <h4 class="col-xs-12">{{ $t('views.components-form-input.sections.feedback.name') }}</h4>
        <form class="col-xs-12" @submit.prevent>
          <div class="form-group has-success has-feedback">
            <label class="control__label" for="inputWithSuccess">
              {{ $t('views.components-form-input.sections.feedback.success') }}
            </label>
            <div class="form-control__container">
              <input type="text" class="form-control" id="inputWithSuccess"/>
              <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
            </div>
          </div>
          <div class="form-group has-warning has-feedback">
            <label class="control__label" for="inputWithWarning">
              {{ $t('views.components-form-input.sections.feedback.warning') }}
            </label>
            <div class="input-group form-control__container">
              <span class="input-group-addon">@</span>
              <input type="text" class="form-control" id="inputWithWarning"/>
              <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
            </div>
          </div>
          <div class="form-group has-error has-feedback">
            <label class="control__label" for="inputWithError">
              {{ $t('views.components-form-input.sections.feedback.error') }}
            </label>
            <div class="form-control__container">
              <input type="text" class="form-control" id="inputWithError"/>
              <span class="yarn-icon yarn-icon--attention-big form-control-feedback"></span>
            </div>
          </div>
        </form>
        <h5 class="col-xs-12">{{ $t('views.components-form-input.sections.feedback.basic') }}</h5>
        <form class="row form-inline" @submit.prevent>
          <div class="col-xs-12 col-sm-6 form-group has-feedback">
            <label class="control__label" for="inputGroupLeft">
              {{ $t('common.input.group-left') }}
            </label>
            <div class="input-group form-control__container">
              <span class="input-group-addon">@</span>
              <input type="text" class="form-control" id="inputGroupLeft"/>
              <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 form-group has-feedback">
            <label class="control__label" for="inputGroup">
              {{ $t('common.input.group-right') }}
            </label>
            <div class="input-group form-control__container">
              <span class="input-group-addon">@</span>
              <input type="text" class="form-control" id="inputGroup"/>
              <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
            </div>
          </div>
        </form>
      </section>
      <section class="section row">
        <h4 class="col-xs-12">{{ $t('views.components-form-input.sections.horizontal.name') }}</h4>
        <form class="col-xs-12 form-horizontal" @submit.prevent>
          <div class="form-group">
            <label class="col-sm-3 control__label" for="horizontalInputLeft">
              {{ $t('common.form.horizontal-input') }}
            </label>
            <div class="col-sm-9">
              <div class="form-control__container">
                <input type="text" class="form-control" id="horizontalInputLeft"/>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control__label" for="horizontalInputRight">
              {{ $t('common.form.horizontal-input') }}
            </label>
            <div class="col-sm-9">
              <div class="form-control__container">
                <input type="text" class="form-control" id="horizontalInputRight"/>
              </div>
            </div>
          </div>
        </form>
      </section>
      <section class="section row">
        <h4 class="col-xs-12">{{ $t('views.components-form-input.sections.inline.name') }}</h4>
        <form class="row form-inline" @submit.prevent>
          <div class="col-xs-12 col-sm-6 form-group">
            <label class="control__label" for="textInputLeft">
              {{ $t('common.input.text-left') }}
            </label>
            <div class="form-control__container">
              <input type="email" class="form-control" id="textInputLeft" placeholder="text"/>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 form-group">
            <label class="control__label" for="textInputRight">
              {{ $t('common.input.text-right') }}
            </label>
            <div class="form-control__container">
              <input type="email" class="form-control" id="textInputRight" placeholder="text"/>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 form-group has-feedback">
            <label class="control__label" for="inputGroupInlineLeft">
              {{ $t('common.input.group-left') }}
            </label>
            <div class="input-group form-control__container">
              <span class="input-group-addon">#</span>
              <input type="text" class="form-control" id="inputGroupInlineLeft"/>
              <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 form-group has-feedback">
            <label class="control__label" for="inputGroupInlineRight">
              {{ $t('common.input.group-right') }}
            </label>
            <div class="input-group form-control__container">
              <span class="input-group-addon">#</span>
              <input type="text" class="form-control" id="inputGroupInlineRight"/>
              <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
            </div>
          </div>
        </form>
      </section>
    </div>
  </tabs-container>
</template>
