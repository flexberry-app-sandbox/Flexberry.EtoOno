import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('оно', 'Оноs');
inflector.irregular('это', 'Этоs');
inflector.irregular('то', 'Тоs');

export default {};
