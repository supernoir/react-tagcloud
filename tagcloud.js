import React from 'react';
 
class Tagcloud extends React.Component {
  constructor(){
    super();
    this.state = { tag: 'Hello!' }
  }
  render() {
    return <div className="tagcloud_container">
          <p>I am a tag: {this.state.tag}</p>

          </div>
  }
}

var AddNewTag = React.createClass({
  render: function() {
    return (
      <div>
      <label>Create new Tag</label><input>Tag Name</input>
    </div>
    );
  }
});
 
export default Tagcloud