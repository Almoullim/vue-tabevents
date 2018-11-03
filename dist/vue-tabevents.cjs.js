/**
 * vue-tabevents v1.2.0
 * https://github.com/almoullim/vue-tabevents
 * Released under the MIT License.
 */

'use strict';

var vueTabEvents = {
  install: function (Vue) {
    Vue.prototype.$IsJsonString = function IsJsonString(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    };

    Vue.prototype.$tabEvent = {
      emit: function emit(event, data) {
        if (!data) {
          localStorage.setItem('event', event);
        }
        if (data) {
          if (typeof data !== 'string') { localStorage.setItem('eventWithData', (event + "!@#$%" + (JSON.stringify(data)))); }else { localStorage.setItem('eventWithData', (event + "!@#$%" + data)); }
        }
        localStorage.removeItem('event');
        localStorage.removeItem('eventWithData');
      },

      on: function on(event, callback) {
        function listner(e) {
          if (e.newValue == null) { return; }else if (e.key == 'event') {
            if (e.newValue === event) { return callback(); }
          } else if (e.key == 'eventWithData') {
            var ev = e.newValue.split('!@#$%');
            if (ev[0] === event) {
              if (Vue.IsJsonString(ev[1])) { return callback(JSON.parse(ev[1])); }else { return callback(ev[1]); }
            }
          }
        }

        window.addEventListener('storage', listner);

        window.addEventListener('offanEvent', function (r) {
          if (r.detail.eventToOff === event) { window.removeEventListener('storage', listner); }
        });
      },

      off: function off(event) {
        var ev = new CustomEvent('offanEvent', { detail: { eventToOff: event } });
        window.dispatchEvent(ev);
      }
    };
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueTabEvents);
}

module.exports = vueTabEvents;
