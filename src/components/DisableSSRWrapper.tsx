import dynamic from 'next/dynamic'
import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

// eslint-disable-next-line react/jsx-no-useless-fragment
const DisableSSRWrapper: FC<Props> = ({ children }) => <>{children}</>

export default dynamic(() => Promise.resolve(DisableSSRWrapper), { ssr: false })
