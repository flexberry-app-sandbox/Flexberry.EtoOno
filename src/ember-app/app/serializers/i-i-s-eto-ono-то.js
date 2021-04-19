import { Serializer as ТоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-eto-ono-то';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
