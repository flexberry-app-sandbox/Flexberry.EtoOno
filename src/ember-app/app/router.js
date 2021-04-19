import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-eto-ono-оно-l');
  this.route('i-i-s-eto-ono-оно-e',
  { path: 'i-i-s-eto-ono-оно-e/:id' });
  this.route('i-i-s-eto-ono-оно-e.new',
  { path: 'i-i-s-eto-ono-оно-e/new' });
  this.route('i-i-s-eto-ono-это-l');
  this.route('i-i-s-eto-ono-это-e',
  { path: 'i-i-s-eto-ono-это-e/:id' });
  this.route('i-i-s-eto-ono-это-e.new',
  { path: 'i-i-s-eto-ono-это-e/new' });
});

export default Router;
