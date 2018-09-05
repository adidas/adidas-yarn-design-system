import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const DEFAULT_LANG = 'en';
const locales = [ DEFAULT_LANG ];

export default ({ app }) => {
  const messages = locales.reduce((accum, locale) => ({
    ...accum,
    [locale]: require(`~/locales/${ locale }.json`)
  }), {});

  app.i18n = new VueI18n({
    locale: DEFAULT_LANG,
    fallbackLocale: DEFAULT_LANG,
    messages
  });

  app.lang = DEFAULT_LANG;
};
