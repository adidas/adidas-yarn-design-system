export function getFormTabs(activeTabId) {
  return [ 'input', 'checkbox', 'radio', 'textarea' ].map((tab) => ({
    id: tab,
    to: `/components/form/${ tab }`,
    active: tab === activeTabId
  }));
}
