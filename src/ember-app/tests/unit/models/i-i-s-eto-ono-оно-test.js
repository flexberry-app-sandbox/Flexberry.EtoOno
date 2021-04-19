import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-eto-ono-оно', 'Unit | Model | i-i-s-eto-ono-оно', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-eto-ono-оно',
    'model:i-i-s-eto-ono-то',
    'model:i-i-s-eto-ono-это',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
