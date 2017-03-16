import { connect } from 'react-redux'
import TabsRoot from './TabsRoot'
import { changeTab } from './../components/navActions'

function mapStateToProps (state) {
  return {
    tabs: state.tabReducer
  }
}

export default connect(
  mapStateToProps,
  {
    changeTab: (route) => changeTab(route)
  }
)(TabsRoot)