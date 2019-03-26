<template>
  <div class="container list-groups">
    <page-title>
      <p>{{ $t('views.components.name') }}</p>
      <h2>{{ $t('views.components-listgroups.name') }}</h2>
    </page-title>
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-sm-offset-1">
        <section class="section">
          <div class="row">
            <h4 class="col-xs-12">
              {{ $t('views.components-listgroups.type.default') }}
            </h4>
          </div>
          <div class="row">
            <h5 class="col-xs-12">
              {{ $t('common.direction.vertical') }}
            </h5>
            <div class="col-xs-12">
              <div class="list-group">
                <list-group-item-link state="active" label="common.state.active"/>
                <list-group-item-link label="common.state.default"/>
                <list-group-item-link state="disabled" label="common.state.disabled"/>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="col-xs-12">
              {{ $t('common.direction.horizontal') }}
            </h5>
            <div class="col-xs-12">
              <div class="list-group list-group--horizontal">
                <list-group-item-link state="active" label="common.state.active"/>
                <list-group-item-link label="common.state.default"/>
                <list-group-item-link state="disabled" label="common.state.disabled"/>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="row">
            <h4 class="col-xs-12">
              {{ $t('views.components-listgroups.type.default-icon') }}
            </h4>
          </div>
          <div class="row">
            <h5 class="col-xs-12">
              {{ $t('common.direction.vertical') }}
            </h5>
            <div class="col-xs-12 col-sm-6">
              <div class="list-group">
                <list-group-item-link state="active"
                    icon="gallery"
                    label="common.state.active"/>
                <list-group-item-link icon="add-to-basket"
                    label="common.state.default"/>
                <list-group-item-link state="disabled"
                    icon="add-to-basket"
                    label="common.state.disabled"/>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="list-group">
                <list-group-item-link state="active"
                    icon="gallery"
                    position="right"
                    label="common.state.active"/>
                <list-group-item-link icon="add-to-basket"
                    position="right"
                    label="common.state.default"/>
                <list-group-item-link state="disabled"
                    icon="add-to-basket"
                    position="right"
                    label="common.state.disabled"/>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="col-xs-12">
              {{ $t('common.direction.horizontal') }}
            </h5>
            <div class="col-xs-12">
              <div class="list-group list-group--horizontal">
                <list-group-item-link state="active"
                    icon="gallery"
                    label="common.state.active"/>
                <list-group-item-link icon="add-to-basket"
                    label="common.state.default"/>
                <list-group-item-link state="disabled"
                    icon="add-to-basket"
                    label="common.state.disabled"/>
              </div>
              <div class="list-group list-group--horizontal">
                <list-group-item-link state="active"
                    icon="gallery"
                    position="right"
                    label="common.state.active"/>
                <list-group-item-link icon="add-to-basket"
                    position="right"
                    label="common.state.default"/>
                <list-group-item-link state="disabled"
                    icon="add-to-basket"
                    position="right"
                    label="common.state.disabled"/>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="row">
            <h4 class="col-xs-12">
              {{ $t('views.components-listgroups.type.themes') }}
            </h4>
          </div>
          <div class="row dark">
            <h5 class="col-xs-12">
              {{ $t('common.theme.dark') }}
            </h5>
            <div class="col-xs-12">
              <div class="list-group list-group--horizontal">
                <list-group-item-link theme="dark"
                    state="active"
                    icon="gallery"
                    label="common.state.active"/>
                <list-group-item-link theme="dark"
                    icon="add-to-basket"
                    label="common.state.default"/>
                <list-group-item-link theme="dark"
                    state="disabled"
                    icon="add-to-basket"
                    label="common.state.disabled"/>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="col-xs-12">
              {{ $t('common.theme.light') }}
            </h5>
            <div class="col-xs-12">
              <div class="list-group list-group--horizontal">
                <list-group-item-link theme="light"
                    state="active"
                    icon="gallery"
                    label="common.state.active"/>
                <list-group-item-link theme="light"
                    icon="add-to-basket"
                    label="common.state.default"/>
                <list-group-item-link theme="light"
                    state="disabled"
                    icon="add-to-basket"
                    label="common.state.disabled"/>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="col-xs-12">
              {{ $t('common.theme.highlight') }}
            </h5>
            <div class="col-xs-12">
              <div class="list-group list-group--horizontal">
                <list-group-item-link theme="highlight"
                    state="active"
                    icon="gallery"
                    label="common.state.active"/>
                <list-group-item-link theme="highlight"
                    icon="add-to-basket"
                    label="common.state.default"/>
                <list-group-item-link theme="highlight"
                    state="disabled"
                    icon="add-to-basket"
                    label="common.state.disabled"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import ListGroupItemLink from '~/components/list-group-item-link/default.vue';

export default {
  components: {
    ListGroupItemLink
  }
};
</script>

<style lang="less">
  @import '../../../src/less/variables/main';

  .list-groups {
    .dark {
      background-color: @primary-black;
      color: @primary-white;
    }
  }
</style>
