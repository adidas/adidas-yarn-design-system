<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <p>{{ $t('views.components.name') }}</p>
          <h2>{{ $t('views.components-forms.name') }}</h2>
        </div>
      </div>
    </div>
    <section class="section row">
      <h4 class="col-xs-12">Basic inputs</h4>
      <form class="col-xs-12" @submit.prevent>
        <div class="form-group">
          <label class="control__label" for="textInput">Text input</label>
          <div class="form-control__container">
            <input type="email" class="form-control" id="textInput" placeholder="text"/>
          </div>
        </div>
        <div class="form-group">
          <label class="control__label" for="disabledInput">Disabled input</label>
          <div class="form-control__container disabled">
            <input type="password" class="form-control" id="disabledInput" placeholder="disabled"
                disabled="disabled"/>
            <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
          </div>
        </div>
        <div class="form-group required">
          <label class="control__label" for="requiredTextInput">Required text input</label>
          <div class="form-control__container">
            <input type="text" class="form-control" id="requiredTextInput" value="required value"
                placeholder="required"/>
          </div>
        </div>
      </form>
    </section>
    <section class="section row">
      <h4 class="col-xs-12">Feedback inputs</h4>
      <form class="col-xs-12" @submit.prevent>
        <div class="form-group has-success has-feedback">
          <label class="control__label" for="inputWithSuccess">input with success</label>
          <div class="form-control__container">
            <input type="text" class="form-control" id="inputWithSuccess"/>
            <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
          </div>
        </div>
        <div class="form-group has-warning has-feedback">
          <label class="control__label" for="inputWithWarning">input with warning</label>
          <div class="input-group form-control__container">
            <span class="input-group-addon">@</span>
            <input type="text" class="form-control" id="inputWithWarning"/>
            <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
          </div>
        </div>
        <div class="form-group has-error has-feedback">
          <label class="control__label" for="inputWithError">input with error</label>
          <div class="form-control__container">
            <input type="text" class="form-control" id="inputWithError"/>
            <span class="yarn-icon yarn-icon--attention-big form-control-feedback"></span>
          </div>
        </div>
      </form>
      <form class="row form-inline" @submit.prevent>
        <div class="col-xs-6 form-group has-feedback">
          <label class="control__label" for="inputGroupLeft">input group (left)</label>
          <div class="input-group form-control__container">
            <span class="input-group-addon">@</span>
            <input type="text" class="form-control" id="inputGroupLeft"/>
            <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
          </div>
        </div>
        <div class="col-xs-6 form-group has-feedback">
          <label class="control__label" for="inputGroup">input group (right)</label>
          <div class="input-group form-control__container">
            <span class="input-group-addon">@</span>
            <input type="text" class="form-control" id="inputGroup"/>
            <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
          </div>
        </div>
      </form>
    </section>
    <section class="section row">
      <h4 class="col-xs-12">Horizontal form</h4>
      <form class="col-xs-12 form-horizontal" @submit.prevent>
        <div class="form-group">
          <label class="col-sm-3 control__label" for="horizontalInputLeft">Horizontal input (left)</label>
          <div class="col-sm-9 form-control__container">
            <input type="text" class="form-control" id="horizontalInputLeft"/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-3 control__label" for="horizontalInputRight">Horizontal input (right)</label>
          <div class="col-sm-9 form-control__container">
            <input type="text" class="form-control" id="horizontalInputRight"/>
          </div>
        </div>
      </form>
      <h5 class="col-xs-12">Inline form</h5>
      <form class="row form-inline" @submit.prevent>
        <div class="col-xs-6 form-group">
          <label class="control__label" for="textInputLeft">Text input (left)</label>
          <div class="form-control__container">
            <input type="email" class="form-control" id="textInputLeft" placeholder="text"/>
          </div>
        </div>
        <div class="col-xs-6 form-group">
          <label class="control__label" for="textInputRight">Text input (right)</label>
          <div class="form-control__container">
            <input type="email" class="form-control" id="textInputRight" placeholder="text"/>
          </div>
        </div>
        <div class="col-xs-6 form-group has-feedback">
          <label class="control__label" for="inputGroupLeft">Input group (left)</label>
          <div class="input-group form-control__container">
            <span class="input-group-addon">#</span>
            <input type="text" class="form-control" id="inputGroupLeft"/>
            <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
          </div>
        </div>
        <div class="col-xs-6 form-group has-feedback">
          <label class="control__label" for="inputGroupRight">Input group (right)</label>
          <div class="input-group form-control__container">
            <span class="input-group-addon">#</span>
            <input type="text" class="form-control" id="inputGroupRight"/>
            <span class="yarn-icon yarn-icon--checkmark-released form-control-feedback"></span>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
