import React from 'react';
import { connect } from "react-redux";


class About extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {/* <h1>Redux About</h1> */}
                <h1>{this.props.user1}</h1>
                <h1>{this.props.user}</h1>
            </div>
        )
    }
}
const mapToStateProps = state => {
    return {
        user1: state.name,
        user: state.subject,


    }
}

export default connect(mapToStateProps, null)(About)