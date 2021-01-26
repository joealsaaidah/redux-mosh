import {bugAdded,bugRemoved,bugResolved} from './actions'
import store from './store';

const unsubscribe = store.subscribe(()=>{
    console.log("Store has changed!!!", store.getState());
})
store.dispatch(bugAdded('bug1'));

store.dispatch(bugResolved(1));

store.dispatch(bugRemoved(1));

//console.log(store.getState());