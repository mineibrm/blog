import React from 'react';
import { Query } from 'react-apollo';
import GraphCMSContent from './services/graphcms'
import Blog from './Blog'
import MainFeaturedPost from './MainFeaturedPost'
import Sidebar from './Sidebar'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid'
import FeaturedPost from './FeaturedPost';
import Main from './Main';

const Home = props => {
    const [posts, setPosts] = React.useState([]);
    const Client = new GraphCMSContent();
    const mainFeaturedPost = {
        title: 'Collection of thorough research on use cases of AI',
        description:
          "Theory and Applications of Artficial neural Networks in various fields. Written in the format of overview papers, made with hard-work and tight-deadlines :)",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
        linkText: 'Continue reading…',
      };
      const sidebar = {
        title: 'About',
        description:
          "I'm a final year Computer Engineering Student sharing my overviews of research in the area of Artificial Intelligence",
        social: [
          { name: 'LinkedIn', icon: LinkedInIcon,url:'https://www.linkedin.com/in/mine-ibraimi-572238155/'}
        ],
      };
    const LoadingPostsJsx = () => (
        <div>
            Loading...
        </div>
    );
    const ErrorLoadingPostsJsx = () => (
        <div className="mx-auto alert-danger">
            Error!
        </div>
    );
    return (
        <>
            <Grid container spacing={4}>
            <Grid item>
            <MainFeaturedPost post={mainFeaturedPost} />
            
               
                        <Query query={Client.fetchPosts()}>
                            {
                                ({loading, error, data}) => {
                                    if (loading) return LoadingPostsJsx();
                                    if (error) {
                                        console.log(error);
                                        return ErrorLoadingPostsJsx();
                                    }
                                    const POSTS = data.posts;
                                    setPosts(POSTS);
                                    return POSTS.slice(0,5).map(post => (
                                        
                                        <Grid container spacing={4}>
                                          <FeaturedPost key={post.title} post={post} />
                                        </Grid>
                    
                                      
                                        
                                        
                                    ));
                                }
                            }
                        </Query>
                        </Grid>
                        <Grid item >
                    <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
                   />
                   
                
                   </Grid> 
                   </Grid>
            
        </>
    );
};
export default Home;