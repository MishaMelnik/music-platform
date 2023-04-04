import React, { FC } from 'react'
// Libs
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { wrapper } from '@/redux/next-wrapper'

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}
export default MyApp
