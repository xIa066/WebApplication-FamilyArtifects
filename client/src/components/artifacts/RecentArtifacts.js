import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//import action creators
import { fetchArtifacts, getUser } from '../../actions'; 


class RecentArtifacts extends React.Component{

    componentDidMount(){
        this.props.fetchArtifacts();
        this.props.getUser(this.props.authUser);
    }


    renderList = (recentList) => {
        return recentList.map(artifact =>{
            return(
                <Link to={`/artifacts/view/${artifact._id}`} key={artifact._id}>
                    <div className="item">
                        <img src={artifact.photo} alt="" className="artifact__item-image"/>
                    </div>
                </Link>
            );
        });
    }


    render(){
        if(this.props.artifacts.length === 0){
            return null;
        }else{
            var recentList;
            if(this.props.artifacts.length > 6){
                recentList = this.props.artifacts.slice(this.props.artifacts.length-6, this.props.artifacts.length);
            }else{
                recentList = this.props.artifacts;
            }
            return(
                <div id="projects" className="recent-projects">
                    <h1 className="banner">
                        <span className="banner-recent">Recent Artifacts</span>
                    </h1>
                    <br/>
                    <OwlCarousel
                        loop
                        margin={0}
                        center
                        responsive = {{
                            0: {
                                items: 1
                            },
                            600: {
                                items: 2
                            },
                            1200: {
                                items: 3
                            }                             
                        }}
                        >
                        {this.renderList(recentList)}
                    </OwlCarousel>
    
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return { artifacts: Object.values(state.artifacts), user: state.user };
}

export default connect(mapStateToProps, { fetchArtifacts, getUser })(RecentArtifacts);
