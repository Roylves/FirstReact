import { connect } from 'react-redux'
import NavigationCardStack from './NavigationCardStack'
import { push, pop, reset} from './navActions'
function mapStateToProps (state) {
  return {
    navState: state.navState,
  }
}
export default connect(
  mapStateToProps,
  {
    push: (route) => push(route),
    reset: (route) => reset(route),
    pop: () => pop(),
  }
)(NavigationCardStack)