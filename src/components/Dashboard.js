import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container dashboard center">
            <img alt="Qries" src={process.env.PUBLIC_URL + '/c.jpg'} />
            <Link to="/home" className="waves-effect waves-light btn btn-large blue darken-2">Get Started</Link>
        </div>
    )
}

export default Dashboard;