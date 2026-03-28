import { Abort } from 'vike/abort'
import { PageContextClient } from 'vike/types'
import { ref } from 'vue'
import { useIsDirty } from '../composables/useIsDirty'

export function onBeforeRoute(pageContext: PageContextClient) {
    const isDirty = useIsDirty(pageContext.app)
    if (isDirty.value) {
        throw Abort()
    }
}
