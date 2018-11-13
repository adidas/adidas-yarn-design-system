import { getComponents } from './components';

/**
 * Returns the list of tabs in the form page.
 * @param {string} activeTabId - Id of the active tab.
 * @returns {Object[]} List of tabs.
 */
export function getFormTabs(activeTabId) {
  const formComponents = getComponents('forms');

  console.log('formComponents', formComponents);

  return formComponents.map((tab) => ({
    id: tab,
    to: `/components/form/${ tab }`,
    active: tab === activeTabId
  }));
}
