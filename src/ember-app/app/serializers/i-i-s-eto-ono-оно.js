import { Serializer as ОноSerializer } from
  '../mixins/regenerated/serializers/i-i-s-eto-ono-оно';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОноSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
