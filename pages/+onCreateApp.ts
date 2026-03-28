import type { PageContext } from 'vike/types'
import { shallowRef } from 'vue'
import { setIsDirty } from '../composables/useIsDirty'

export async function onCreateApp(pageContext: PageContext) {
    const app = pageContext.app
    const isDirty = shallowRef<boolean>(false)
    setIsDirty(app, isDirty)
}
