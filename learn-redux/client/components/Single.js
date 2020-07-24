import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render(){
    const { postId } = this.props.params;

    // index of post 
    const index = this.props.posts.findIndex((post) => post.code === postId);
    // get the post 
    const post = this.props.posts[index]
    //get comments 
    const postComments = this.props.comments[postId] || [];

    return (
    <div className="single-photo">
     <Photo index={index} post={post} {...this.props} />
     <Comments postComments={postComments} {...this.props} />
    </div>
    )
  }
});

export default Single;
