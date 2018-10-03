<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <p>{{ $t('views.components.name') }}</p>
          <h2>{{ $t('views.components-multiselect.name') }}</h2>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <section class="section">
            <div class="row">
              <h5 class="col-xs-12">
                {{ $t('views.components-multiselect.text') }}
              </h5>
              <choicesjs-stencil class="col-xs-12 multiselect" type="text" v-pre/>
            </div>
          </section>
          <section class="section">
            <div class="row">
              <h5 class="col-xs-12">
                {{ $t('views.components-multiselect.single') }}
              </h5>
              <choicesjs-stencil class="col-xs-12 multiselect" type="single" v-pre/>
            </div>
          </section>
          <section class="section">
            <div class="row">
              <h5 class="col-xs-12">
                {{ $t('views.components-multiselect.multiple') }}
              </h5>
              <choicesjs-stencil class="col-xs-12 multiselect multiline" type="multiple" v-pre/>
            </div>
          </section>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <markdown-renderer type="url" :src="'components.multiselect'"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import markdownRenderer from '~/components/markdown/renderer';
import { createChoiceTemplate, createItemTemplate } from '~/services/multiselect';

const choices = [
  { value: 'superstar', label: 'Superstar', selected: false, disabled: false, icon: 'footwear', color: 'aliceblue' },
  { value: 'adizero', label: 'adizero', selected: false, disabled: false, icon: 'footwear', color: 'lightblue' },
  { value: 'stansmith', label: 'Stan Smith', selected: true, disabled: false, icon: 'footwear', color: 'darkseagreen' },
  { value: 'gazelle', label: 'Gazelle', selected: false, disabled: false, icon: 'footwear', color: 'grey' },
  { value: 'ultraboost', label: 'ultraboost', selected: true, disabled: false, icon: 'footwear', color: 'mediumslateblue' },
  { value: 'nmd', label: 'NMD', selected: false, disabled: false, icon: 'footwear', color: 'brown' },
  { value: 'yeezy', label: 'YEEZY', selected: false, disabled: false, icon: 'footwear', color: 'gainsboro' },
  { value: 'campus', label: 'Campus', selected: false, disabled: false, icon: 'footwear', color: 'burlywood' },
  { value: 'zx500', label: 'ZX 500', selected: false, disabled: true, icon: 'footwear', color: 'greenyellow' },
  { value: 'samba', label: 'Samba', selected: false, disabled: false, icon: 'footwear', color: 'black' },
  { value: 'predator', label: 'Predator', selected: false, disabled: false, icon: 'footwear', color: 'burlywood' },
  { value: 'munchen', label: 'Munchen', selected: false, disabled: false, icon: 'footwear', color: 'darkcyan' },
  { value: 'zxflux', label: 'ZX Flux', selected: false, disabled: false, icon: 'footwear', color: 'coral' },
  { value: 'eqt', label: 'EQT', selected: false, disabled: false, icon: 'footwear', color: 'blueviolet' },
  { value: 'solar', label: 'Solar', selected: false, disabled: false, icon: 'footwear', color: 'orange' },
  { value: 'copa', label: 'Copa', selected: false, disabled: true, icon: 'footwear', color: 'black' },
  { value: 'terrex', label: 'Terrex', selected: false, disabled: false, icon: 'footwear', color: 'darkgreen' },
  { value: 'pureboost', label: 'pureboost', selected: false, disabled: false, icon: 'footwear', color: 'violet' },
  { value: 'dragon', label: 'Dragon', selected: false, disabled: false, icon: 'footwear', color: 'orange' },
  { value: 'yung', label: 'YUNG', selected: false, disabled: false, icon: 'footwear', color: 'green' },
  { value: 'deerupt', label: 'Deerupt', selected: false, disabled: false, icon: 'footwear', color: 'fuchsia' },
  { value: 'kamanda', label: 'kamanda', selected: false, disabled: false, icon: 'footwear', color: 'burlywood' }
];

export default {
  mounted() {
    const MAX_ITEMS = 8;
    const selectText = document.querySelector('choicesjs-stencil[type=text]');
    const selectSingle = document.querySelector('choicesjs-stencil[type=single]');
    const selectMultiple = document.querySelector('choicesjs-stencil[type=multiple]');

    selectSingle.choices = choices;
    selectMultiple.choices = choices;
    selectMultiple.maxItemCount = MAX_ITEMS;
    selectMultiple.callbackOnCreateTemplates = (($t) => function(template) {
      return {
        choice: createChoiceTemplate(template, this.config, choices),
        item: createItemTemplate(template, this.config, choices, $t)
      };
    })(this.$t);

    [ selectText, selectSingle, selectMultiple ].forEach((select) => {
      select.editItems = true;
      select.removeItems = true;
      select.removeItemButton = true;
      select.placeholder = true;
      select.placeholderValue = this.$t('views.components-multiselect.config.placeholder');
      select.noResultsText = this.$t('views.components-multiselect.config.no-results');
      select.noChoicesText = this.$t('views.components-multiselect.config.no-choices');
      select.itemSelectText = this.$t('views.components-multiselect.config.item-selection');
      select.addItemText = (value) => this.$t('views.components-multiselect.config.add-item', {
        value
      });
      select.maxItemText = (maxItemCount) => this.$t('views.components-multiselect.config.max-items', {
        maxItemCount
      });
    });
  },
  components: {
    markdownRenderer
  }
};
</script>
