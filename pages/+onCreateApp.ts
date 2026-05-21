// Environment: server & client

import type { PageContext } from 'vike/types'
// import { inject as injectAnalytics } from "@vercel/analytics"
 
export async function onCreateApp(pageContext: PageContext) {
    if (pageContext.urlParsed.pathname.startsWith('/star-wars')) {
        throw new Error('Invisible error')
    }
}
