import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creator_id: props.currentUser.id,
      title: "",
      description: "",
      image: "",
      category_id: "1",
      materials_id: ["1"],
      location_id: "2",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
// debugger
    // let post = {
    //   title: this.state.title,
    //   description: this.state.description,
    //   image: this.state.image,
    //   category_id: this.state.category_id,
    //   materials_id: this.state.materials_id,
    //   location_id: this.state.location_id
    // };

    this.props.createPost(this.state);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              placeholder="Title"
            />
            <br />
            <input
              type="textarea"
              value={this.state.description}
              onChange={this.update('description')}
              placeholder="Post description"
            />
            <br />
            <input
              type="textarea"
              value={this.state.image}
              onChange={this.update('image')}
              placeholder="Add link to your image"
            />
            <br />
            {/* CHANGE need to add categories, materials, location */}
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
