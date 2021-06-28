import * as R from 'ramda';

// is this object already Immutable?
const isImmutable = R.has('asMutable');

// change this Immutable object into a JS object
const convertToJs = (state) => state.asMutable({deep: true});

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = R.when(isImmutable, convertToJs);

// convert this JS object into an Immutable object
const toImmutable = (raw) => raw;

// the transform interface that redux-persist is expecting
export default {
	out: (state) => {
		// console.log({ retrieving: state })
		return state;
	},
	in: (raw) => {
		// console.log({ storing: raw })
		return raw;
	}
};
