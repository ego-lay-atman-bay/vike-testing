 import { inject, shallowRef } from 'vue'
import type { App, ShallowRef } from 'vue'
 
const key = Symbol()

let isDirty = shallowRef<boolean>(false)
 
export function useIsDirty(app?: App): ShallowRef<boolean> {
    // if (app) {
    //     const isDirty = app.inject<ShallowRef<boolean>>(key)
    //     return isDirty
    // }
    // const isDirty = inject<ShallowRef<boolean>>(key)
    return isDirty
}
 
export function setIsDirty(app: App, isDirty: ShallowRef<boolean>) {
    isDirty
//   app.provide(key, isDirty)
}
