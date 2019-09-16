import React from 'react';
import { connect } from "react-redux";


class Home extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Redux Home</h1>
                <h1>{this.props.user}</h1>
            </div>
        )
    }
}
const mapToStateProps = state => {
    return {
        user: state.name,

    }
}

export default connect(mapToStateProps, null)(Home)