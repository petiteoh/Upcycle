import React from "react";
import { withRouter } from "react-router-dom";
import PostItem from "./post_item";
import { Link } from "react-router-dom";
import "../../search-bar.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      posts: [],
      categories: [],
      search: "",
      filterSearch: "",
      user: this.props.user
    };
    this.onRadioChange = this.onRadioChange.bind(this);
  }

  onRadioChange = (e) => {
    
    this.setState({
      filterSearch: e.target.value,
    });
  };

  componentWillMount() {
    this.props.fetchUsers();
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  componentWillUnmount() {
    
    this.setState({ posts: [] })
  }

  componentDidUpdate(prevProps) {
    
    if (this.props.posts.length !== prevProps.posts.length) {
      this.setState({ posts: this.props.posts });
    }
  }

  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0, 20) });
  }

  render() {
    let filtered = this.props.posts.filter((post) => {
      if (this.state["filterSearch"] !== "title") { 
      return (
        post.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
      } else {
        return (
        this.props.categoryNames[post.category_id].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
      }
    });

    if (this.props.posts.length === 0) {
      return <div>No Posts</div>;
    } else {
      const allPosts = filtered.map((post, idx) => {
        
        return (<PostItem 
          key={idx} 
          post={post}
          user={this.props.user} 
          isAuthenticated={this.props.isAuthenticated}
          authors={this.props.authors} 
          categoryObjs={this.props.categoryObjs} 
          upcyclePost={this.props.upcyclePost} 
          upcycles={post.upcycle_ids.length}
          deletePost={this.props.deletePost}
        />)
      });
      
      return (
        <div>
          <div className="srch">
            <div className="search">
              <div className="search-container">
                <div className="search-box">
                  <div className="search-icon-box">
                    <img
                      className="search-icon"
                      src="https://www.freeiconspng.com/uploads/magnifying-glass-icon-4.png"
                      height="40"
                      width="40"
                    ></img>
                  </div>
                  <div className="search-input-box">
                    <input
                      className="search-input"
                      type="text"
                      value={this.state.search}
                      onChange={this.updateSearch.bind(this)}
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link to="/create-post">
                <div className="create-post">Create a post</div>
              </Link>
            </div>
          </div>
          <div className="radio">
            <div className="filter-container">
              <input
                id="opt1"
                type="radio"
                value="description"
                checked={this.state.filterSearch === "description" || this.state.filterSearch === ""}
                onChange={this.onRadioChange}
                
              />
              <label for="opt1" className="label">
                <span className="span">Description</span>
              </label>
              <input
                id="opt2"
                type="radio"
                value="title"
                checked={this.state.filterSearch === "title"}
                onChange={this.onRadioChange}
              />
              <label for="opt2" className="label">
                <span className="span">Category</span>
              </label>
              <div />
            </div>
          </div>
          <div className="posts">{allPosts}</div>
        </div>
      );
    }
  }
}

export default withRouter(Post);
