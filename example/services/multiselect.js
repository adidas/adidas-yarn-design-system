function getChoiceData(data, choices) {
  return {
    ...choices.find((choice) => choice.value === data.value),
    ...data
  };
}

function createIcon(icon, color) {
  const iconClassName = icon ? `yarn-icon yarn-icon--${ icon }` : '';

  return iconClassName
    ? `<span class="${ iconClassName }" ${ color ? ` style="color: ${ color };"` : '' }></span>`
    : '';
}

function createRemoveButton(label, visible, $t) {
  return visible
    ? `<button type="button"
          class="choices__button"
          data-button=""
          aria-label="${ $t('views.components-multiselect.config.remove-button', { label }) }">
        ${ $t('views.components-multiselect.config.remove-button', { label }) }
      </button>`
    : '';
}

export function createChoiceTemplate(template, { classNames, itemSelectText }, choices) {
  return (data) => {
    const _data = getChoiceData(data, choices);
    const icon = createIcon(_data.icon, _data.color);

    return template(`
      <div class="${ classNames.item } ${ classNames.itemChoice }
            ${ classNames[_data.disabled ? 'itemDisabled' : 'itemSelectable'] }"
          data-select-text="${ itemSelectText }"
          data-id="${ _data.id }"
          data-value="${ _data.value }"
          data-choice
          data-${ _data.disabled ? 'choice-disabled' : 'choice-selectable' }
          role="${ data.groupId > 0 ? 'treeitem' : 'option' }"
          ${ _data.disabled ? 'aria-disabled="true"' : '' }>
        ${ icon }
        <span>${ _data.label }</span>
      </div>
    `);
  };
}

export function createItemTemplate(template, { classNames, removeItemButton }, choices, $t) {
  return (data) => {
    const _data = getChoiceData(data, choices);
    const icon = createIcon(_data.icon, _data.color);
    const button = createRemoveButton(_data.label, removeItemButton, $t);

    return template(`
      <div class="${ classNames.item }
            ${ _data.highlighted ? classNames.highlightedState : classNames.itemSelectable }"
          data-item
          data-id="${ _data.id }"
          data-value="${ _data.value }"
          ${ _data.active ? 'aria-selected="true"' : '' }
          ${ _data.disabled ? 'aria-disabled="true"' : '' }>
        ${ icon }
        <span>${ _data.label }</span>
        ${ button }
      </div>
    `);
  };
}
