import Immutable from 'immutable';
import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { routerStateReducer } from 'redux-router';

import autocomplete from './autocomplete';
import createPub from './createPub';
import createJournal from './createJournal';
import editor from './editor';
import explore from './explore';
import journal from './journal';
import landing from './landing';
import login from './login';
import nav from './nav';
import profile from './profile';
import pub from './pub';
import subdomainTest from './subdomainTest';


export default combineReducers({
	router: routerStateReducer,
	form: formReducer,
	autocomplete,
	createPub,
	createJournal,
	editor,
	explore,
	journal,
	landing,
	login,
	nav,
	profile,
	pub,
	subdomainTest
});

export function ensureImmutable(state) {
	// For some reason the @@INIT action is receiving a state variable that is a regular object.
	// If that's the case, cast it to Immutable and keep chugging.
	// If the @@INIT weirdness can be solved, we can remove this function.
	let output;
	if (!Immutable.Iterable.isIterable(state)) {
		output = Immutable.fromJS(state);
	} else {
		output = state;	
	}
	return output;
}
