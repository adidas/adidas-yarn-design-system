## Documentation

### Installation

```
npm install choices.js choicesjs-stencil
```

```html
<script src="node_modules/choices.js/assets/scripts/dist/choices.min.js"></script>
<script src="node_modules/choicesjs-stencil/dist/choicesjsstencil.js"></script>
```

For modern frameworks check the specific integration in the StencilJS documentation: [framework integration][framework-integration].

### Use of the component

To use the component just add it to the HTML code with the class `multiselect` and apply its configuration via element properties. The box height is fixed to one line unless the class `multiline` is added to the element.

```html
<choicesjs-stencil class="multiselect" type="single"/>
<choicesjs-stencil class="multiselect multiline" type="multiple"/>
```

```js
var select = document.querySelector('choicesjs-stencil[type=single]');

select.choices = [
  { value: 'superstar', label: 'Superstar', selected: true, disabled: false },
  { value: 'stansmith', label: 'Stan Smith', selected: false, disabled: false },
  { value: 'campus', label: 'Campus', selected: false, disabled: false }
];
select.placeholder = true;
select.placeholderValue = 'type the value...';
```

The component has three different behaviors via `type` property:

- `text`: faceted text selector (the user can type any value and it will be added to the list of values).
- `single`: single value selector (from a dropdown list).
- `multiple`: multiple value selector (from a dropdown list).

The full component configuration can be found at [ChoicesJS][choicesjs] library, and a live demo at [choicesjs-stencil][choicesjs-stencil].

#### Customization

Most of the elements can be created using the method `.callbackOnCreateTemplates()` which returns a new template for different items:

- [Documentation][choicesjs-templates].
- [Available elements][choicesjs-templates-elements].

[choicesjs]: https://github.com/jshjohnson/Choices
[choicesjs-stencil]: https://adidas.github.io/choicesjs-stencil/
[choicesjs-templates]: https://www.npmjs.com/package/choices.js#callbackoncreatetemplates
[choicesjs-templates-elements]: https://github.com/jshjohnson/Choices/blob/394bde313d0f8a50b4c2b9d64d35b76ded68a515/assets/scripts/src/choices.js#L2463-L2701
[framework-integration]: https://stenciljs.com/docs/overview/
[stenciljs]: https://stenciljs.com/
