import { connect } from 'react-redux'
import NavigationRoot from './../main/NavRoot'
import { push, pop, reset } from './navActions'
function mapStateToProps (state) {
  return {
    navigation: state.navReducer
   }
}

export default connect(
  mapStateToProps,
   {
     pushRoute: (route) => push(route),
     popRoute: () => pop(),
     resetRoute: (route) => reset(route),
   }
)(NavigationRoot)