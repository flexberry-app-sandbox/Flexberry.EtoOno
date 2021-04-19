import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  арбуз: DS.attr('string'),
  что: DS.attr('number'),
  оно: DS.belongsTo('i-i-s-eto-ono-оно', { inverse: null, async: false }),
  то: DS.hasMany('i-i-s-eto-ono-то', { inverse: 'это', async: false })
});

export let ValidationRules = {
  арбуз: {
    descriptionKey: 'models.i-i-s-eto-ono-это.validations.арбуз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  что: {
    descriptionKey: 'models.i-i-s-eto-ono-это.validations.что.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оно: {
    descriptionKey: 'models.i-i-s-eto-ono-это.validations.оно.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  то: {
    descriptionKey: 'models.i-i-s-eto-ono-это.validations.то.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЭтоE', 'i-i-s-eto-ono-это', {
    арбуз: attr('Арбуз', { index: 0 }),
    что: attr('Что', { index: 1 }),
    оно: belongsTo('i-i-s-eto-ono-оно', 'Оно', {
      да: attr('Да', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'да' }),
    то: hasMany('i-i-s-eto-ono-то', 'То', {
      что: attr('Что', { index: 0 }),
      когда: attr('Когда', { index: 1 })
    })
  });

  modelClass.defineProjection('ЭтоL', 'i-i-s-eto-ono-это', {
    арбуз: attr('Арбуз', { index: 0 }),
    что: attr('Что', { index: 1 }),
    оно: belongsTo('i-i-s-eto-ono-оно', 'Да', {
      да: attr('Да', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
