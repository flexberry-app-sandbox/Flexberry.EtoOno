import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  да: DS.attr('boolean')
});

export let ValidationRules = {
  да: {
    descriptionKey: 'models.i-i-s-eto-ono-оно.validations.да.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОноE', 'i-i-s-eto-ono-оно', {
    да: attr('Да', { index: 0 })
  });

  modelClass.defineProjection('ОноL', 'i-i-s-eto-ono-оно', {
    да: attr('Да', { index: 0 })
  });
};
