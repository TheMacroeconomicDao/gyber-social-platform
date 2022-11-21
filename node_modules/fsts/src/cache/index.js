import Device from '../Device';

import { default as LocalStorage } from './LocalStorage';
import { default as MemoryStorage } from './MemoryStorage';

let _instance = Device.hasWindow()? new LocalStorage() : new MemoryStorage();

export default _instance;

export {
    LocalStorage,
    MemoryStorage
};
