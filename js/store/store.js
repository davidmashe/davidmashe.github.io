import {EventEmitter} from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/dispatcher.js';
import AppLib from '../lib/library.js';

var ORACLE_STATE = AppLib.stateTemplates.oracle;
var INFO_STATE = AppLib.stateTemplates.info;
var MEETUP_STATE = AppLib.stateTemplates.meetup;
var PROJECT_STATE = AppLib.stateTemplates.project;
var HOME_STATE = AppLib.stateTemplates.home;
// var BEST_SUB_STATE = AppLib.stateTemplates.bestSubState;
// var STABLE_SUB_STATE = AppLib.stateTemplates.stableSubState;
// var SINGULARITY_SUB_STATE = AppLib.stateTemplates.singularitySubState;

var _state = HOME_STATE;

//create the AppStore object

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

// Register with dispatcher so that the store will
// handle all actions thrown by app

AppDispatcher.register(function(action) {
  var searched;
  var focusImage;
  var type = action.type;

  switch(type){
    case 'textChange': // test only
      _state.defaultText = action.value;
      AppStore.emitChange();
      break;
    case 'info':
      _state = INFO_STATE;
      AppStore.emitChange();
      break;
    case 'oracle':
      _state = ORACLE_STATE;
      AppStore.emitChange();
      break;
    case 'project':
      _state = PROJECT_STATE;
      AppStore.emitChange();
      break;
    case 'best':
      _state.subState.best = false
      _state.subState.lastAnswered = 'best';
      AppStore.emitChange();
      break;
    case 'singularity':
      _state.subState.singularity = false;
      _state.subState.lastAnswered = 'singularity';
      AppStore.emitChange();
      break;
    case 'stable':
      _state.subState.stable = false;
      _state.subState.lastAnswered = 'stable';
      AppStore.emitChange();
      break;
    case 'home':
      _state = HOME_STATE;
      AppStore.emitChange();
      break;
    default:
      console.log("RUH ROH, STATE DOESN'T KNOW: ",type);
  }

}); // close register function

module.exports = AppStore;
