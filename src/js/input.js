/**
 * Returns the feedback and clear button elements from the input group.
 * @param {HTMLElement} inputGroup - input element.
 * @param {string} clearSelector - selector for the clear button.
 * @param {string} feedbackSelector - selector for the feedback element.
 * @returns {Object} Object with the feedback and clear button elements.
 */
function getInputElements(inputGroup, clearSelector, feedbackSelector) {
  return {
    feedback: inputGroup.querySelector(feedbackSelector),
    clearButton: inputGroup.querySelector(clearSelector)
  };
}

/**
 * Manage typing and clear hover effects for inputs
 * @param {string} selector - selector for form container.
 * @param {string} clearSelector - selector for clear icon.
 * @param {object} config - configuration object.
 */
module.exports = (selector, clearSelector, config) => {
  document
  .querySelectorAll(selector)
  .forEach((element) => {
    element.addEventListener('mouseover', (event) => {
      const { currentTarget } = event;
      const { feedback, clearButton } = getInputElements(currentTarget, clearSelector,
        config.feedbackSelector);

      if (!currentTarget.classList.contains(config.classes.disable) &&
          !currentTarget.querySelector('input:focus')) {
        feedback.classList.add(config.classes.hide);
        clearButton.classList.remove(config.classes.hide);
      }
    });
    element.addEventListener('mouseout', (event) => {
      const { currentTarget } = event;
      const { feedback, clearButton } = getInputElements(currentTarget, clearSelector,
        config.feedbackSelector);

      if (!currentTarget.classList.contains(config.classes.disable) &&
          !currentTarget.querySelector('input:focus')) {
        feedback.classList.remove(config.classes.hide);
        clearButton.classList.add(config.classes.hide);
      }
    });
    element.addEventListener('focusin', (event) => {
      const { currentTarget } = event;
      const { feedback } = getInputElements(currentTarget, clearSelector,
        config.feedbackSelector);

      currentTarget.classList.add(config.classes.focus);
      feedback.classList.add(config.classes.hide);
    });
    element.addEventListener('focusout', (event) => {
      const { currentTarget } = event;
      const { feedback, clearButton } = getInputElements(currentTarget, clearSelector,
        config.feedbackSelector);

      currentTarget.classList.remove(config.classes.focus);
      feedback.classList.remove(config.classes.hide);
      clearButton.classList.add(config.classes.hide);
    });
  });

  document
    .querySelectorAll(clearSelector)
    .forEach((element) => {
      element.addEventListener('mouseover', (event) => {
        event.currentTarget.parentNode.classList.add(config.classes.hover);
      });
      element.addEventListener('mouseout', (event) => {
        event.currentTarget.parentNode.classList.remove(config.classes.hover);
      });
      element.addEventListener('click', (event) => {
        event.currentTarget.parentNode.querySelector('input').value = '';
      });
    });
};
