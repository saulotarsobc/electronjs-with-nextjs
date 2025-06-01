import { ApiType } from '../backend/preload'


declare global {
    interface Window {
        api: ApiType
    }
}