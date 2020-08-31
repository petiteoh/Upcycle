import React from "react";
import { withRouter } from "react-router-dom";
import PostItem from "./post_item.jsx";
import { Link } from "react-router-dom";
import "../../search-bar.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    ;
    this.state = {
      posts: [],
      categories: [],
      search: "",
      filterSearch: "",
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
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  // componentDidMount() {
  //   // if (this.props.posts !== prevProps.posts) {
  //     this.props.fetchPosts()
  //     this.props.fetchCategories();
  //   }
  

  componentDidUpdate(prevProps) {
    if (this.props.upcycles !== prevProps.upcycles) {
      this.setState({
        posts: this.props.posts
      })
    }
  }

  // componentWillReceiveProps(newState) {
    
  //   this.setState({ posts: newState.posts });
  //   this.setState({ categories: newState.categories });
  // }

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
        post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
      }
    });


    // let filtered;
    // if (this.state["filterSearch"] === "title") {
    //   filtered = this.state.posts.filter((post) => {
    //     return (post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);});
    // } else {
    //   let cat_ids;
    //   this.state.categories.map((category) => cat_ids[category._id] === category.name);

    //   filtered = this.state.posts.filter((post) => {
    //     return (post.category_id.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);});
    // }
    debugger
    if (this.props.posts.length === 0) {
      return <div>No Posts</div>;
    } else {
      const allPosts = filtered.map((post, idx) => (
        <PostItem 
          key={idx} 
          post={post}
          user={this.props.user} 
          categoryObjs={this.props.categoryObjs} 
          upcyclePost={this.props.upcyclePost} 
          fetchPosts={this.props.fetchPosts}
          author={this.props.authors.filter(author => author._id === post.creator_id)}
        />
      ));
      debugger
      return (
        <div>
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
          <Link to="/create-post">
            <div className="create-post">Create a post</div>
          </Link>
          <div className="radio">
            <div className="filter-container">
              <input
                id="opt1"
                type="radio"
                value="description"
                checked={this.state.filterSearch === "description"}
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
                <span className="span">Title</span>
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
