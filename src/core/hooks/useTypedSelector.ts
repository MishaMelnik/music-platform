// Libs
import { TypedUseSelectorHook, useSelector } from 'react-redux'
// Store
import { RootState } from '@/redux/root'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
