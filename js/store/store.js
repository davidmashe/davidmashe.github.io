import {EventEmitter} from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/dispatcher.js';

var resetState = function(){
  return {
    home : true,
    defaultText : "Thanks for visiting my portfolio app! I built it with React & Flux"
  };
}

var _state = resetState();

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    if (debug) console.log('emitting change');
    this.emit('change');
  },
  changeSniffer: function(callback) {
    this.on('change', callback);
  },
  killChangeSniffer: function(callback) {
    this.removeListener('change', callback);
  },
  getState : function(){
    if (debug) console.log('store returning state of:',_state);
    return _state;
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var searched;
  var focusImage;
  var type = action.type;

  switch(type){
    case 'textChange':
      _state.defaultText = action.value;
      AppStore.emitChange();
      break;
    case 'info':
      _state = {home : false,info : true};
      AppStore.emitChange();
      break;
    case 'oracle':
      _state = {home : false,oracle : true};
      AppStore.emitChange();
      break;
    case 'projects':
      _state = {home : false,projects : true};
      AppStore.emitChange();
      break;
    case 'meetup':
      _state = {home : false,meetup : true};
      AppStore.emitChange();
      break;
    case 'home':
      _state = resetState();
      AppStore.emitChange();
      break;
    //default:
  }

}); // close register function

module.exports = AppStore;
