import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({ children }: { children: React.ReactNode }) => {

    const [container] = React.useState(() => document.createElement('div'))
    useEffect(() => {
        const portal = document.getElementById('portal')
        if (portal) {
            portal.appendChild(container)
        } else {
            document.body.appendChild(container)
        }
        return () => {
            portal?.removeChild(container)
        }
    }, [container])

    return createPortal(children, container)

}
