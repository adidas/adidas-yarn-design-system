<template>
  <div class="panel panel-default">
    <div class="panel-heading" :id="name" role="tab">
      <div class="panel-title"
          role="button"
          :data-parent="parent"
          :data-target="`#${ name }Items`"
          data-toggle="collapse">
        <slot name="tabTitle"></slot>
      </div>
    </div>
    <div class="panel-collapse collapse"
        :id="`${ name }Items`"
        role="tabpanel"
        :aria-labelledby="`#${ name }`"
        v-if="$slots.tabContent">
      <div class="panel-body">
        <slot name="tabContent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'name', 'parent' ]
};
</script>
