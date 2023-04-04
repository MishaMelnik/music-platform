// Libs
import { bindActionCreators } from 'redux'
// Hooks
import { useDispatch } from 'react-redux'
// Actions-Creators
import ActionsCreators from '@/redux/player-service/actions-creators'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionsCreators, dispatch)
}
