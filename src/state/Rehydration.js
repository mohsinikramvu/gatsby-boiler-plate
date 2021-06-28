import ReduxPersist from './ReduxPersistConfig';
import storage from 'redux-persist/lib/storage';
import {persistStore} from 'redux-persist';
import StartupActions from './StartupRedux';
import DebugConfig from './DebugConfig';

const updateReducers = (store) => {
    const reducerVersion = ReduxPersist.reducerVersion;
    const startup = () => store.dispatch(StartupActions.startup());

    // Check to ensure latest reducer version
    storage.getItem('reducerVersion').then((localVersion) => {
        if (localVersion !== reducerVersion) {
            if (DebugConfig.useReactotron) {
                console.tron.display({
                    name: 'PURGE',
                    value: {
                        'Old Version:': localVersion,
                        'New Version:': reducerVersion
                    },
                    preview: 'Reducer Version Change Detected',
                    important: true
                });
            }
            // Purge store
            persistStore(store, null, startup).purge();
            storage.setItem('reducerVersion', reducerVersion);
        } else {
            persistStore(store, null, startup);
        }
    }).catch(() => {
        persistStore(store, null, startup);
        storage.setItem('reducerVersion', reducerVersion);
    });
};

export default {updateReducers};
