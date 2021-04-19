import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  что: DS.attr('string'),
  когда: DS.attr('string'),
  это: DS.belongsTo('i-i-s-eto-ono-это', { inverse: 'то', async: false })
});

export let ValidationRules = {
  что: {
    descriptionKey: 'models.i-i-s-eto-ono-то.validations.что.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  когда: {
    descriptionKey: 'models.i-i-s-eto-ono-то.validations.когда.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  это: {
    descriptionKey: 'models.i-i-s-eto-ono-то.validations.это.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоE', 'i-i-s-eto-ono-то', {
    что: attr('Что', { index: 0 }),
    когда: attr('Когда', { index: 1 })
  });
};
