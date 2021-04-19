import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISEtoOnoОноLForm from './forms/i-i-s-eto-ono-оно-l';
import IISEtoOnoЭтоLForm from './forms/i-i-s-eto-ono-это-l';
import IISEtoOnoОноEForm from './forms/i-i-s-eto-ono-оно-e';
import IISEtoOnoЭтоEForm from './forms/i-i-s-eto-ono-это-e';
import IISEtoOnoОноModel from './models/i-i-s-eto-ono-оно';
import IISEtoOnoТоModel from './models/i-i-s-eto-ono-то';
import IISEtoOnoЭтоModel from './models/i-i-s-eto-ono-это';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-eto-ono-оно': IISEtoOnoОноModel,
    'i-i-s-eto-ono-то': IISEtoOnoТоModel,
    'i-i-s-eto-ono-это': IISEtoOnoЭтоModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'eto-ono': {
          caption: 'eto-ono',
          title: 'eto-ono',
          'i-i-s-eto-ono-оно-l': {
            caption: 'i-i-s-eto-ono-оно-l',
            title: 'i-i-s-eto-ono-оно-l'
          }
        },
        справочники: {
          caption: 'справочники',
          title: 'справочники',
          'i-i-s-eto-ono-это-l': {
            caption: 'i-i-s-eto-ono-это-l',
            title: 'i-i-s-eto-ono-это-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-eto-ono-оно-l': IISEtoOnoОноLForm,
    'i-i-s-eto-ono-это-l': IISEtoOnoЭтоLForm,
    'i-i-s-eto-ono-оно-e': IISEtoOnoОноEForm,
    'i-i-s-eto-ono-это-e': IISEtoOnoЭтоEForm
  },

});

export default translations;
