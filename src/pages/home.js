import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
//import axios from 'axios'
import Scream from '../components/scream/Scream';
import Profile from '../components/profile/Profile';
import ScreamSkeleton from '../util/ScreamSkeleton';



import {connect} from 'react-redux';
import {getScreams} from '../redux/actions/dataActions';

class Home extends Component {

    componentDidMount(){
        this.props.getScreams();
    }

    render() {
        const {screams, loading} = this.props.data;
        let recentScreamsMarkup = !loading ? (
            screams.map(scream =>{
                return <Scream key={scream.screamId} scream={scream}/>;
            }) ): (
                <ScreamSkeleton />
            );
        return (
            <Grid container spacing={10}>
                <Grid item sm={8} xs={12}>
                    {recentScreamsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Profile />
                </Grid>
            </Grid>
        )
    }
}


Home.propTypes = {
    getScreams: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(mapStateToProps, {getScreams})(Home);
