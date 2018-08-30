import React from 'react'
import css from  "../styles/index.scss"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as settingActions from '../actions/settingActions'
class IndexPage extends React.Component {
    render() {
        return (
            <div className={css.index_page}>
                <div className="page-container">
                    Rick Example
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({settingStore}) => ({settingStore})
const mapDispatchToProps = (dispatch) => {
    return {
        settingActions: bindActionCreators(settingActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)