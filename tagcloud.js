import React from 'react';
 
class Tagcloud extends React.Component {
    constructor(){
        super();
        this.state = {
        tagcloud: [
            {id: 1, content: "Ferocious"},
            {id: 2, content: "Empathetic"},
            {id: 3, content: "Bold"},
            {id: 4, content: "Visionary"}
        ]}
    }

  generateUUID(min,max){
    // NOT A REAL UUID!
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    let taglist = this.state.tagcloud.map( tag => {
      return <TagItem key={tag.id} tagcloud={tag} className="tag-item-container" />
    })
    return <div className="tag-list-container">
          {taglist} <p>{this.generateUUID(0,255)}</p>
          <AddNewTag />
          </div>
  }
}

const TagItem = (props) => {
    return <div className="tag-item">
    <p>{props.tagcloud.content}<span id="close-x">&times;</span></p>
    </div>
}

class AddNewTag extends React.Component {
constructor(){
  super();
  this.state = { inputTag: '' }
}

handleSubmit(props){
        console.log('Submitted new tag');
        this.setState({
            inputTag: this.props.newTag
        })
    }

render(){  
return (
  <form>
    <fieldset>
    <label>Enter a new tag </label>
    <input type="text" name="newtag" value={this.state.inputTag} onSubmit={this.handleSubmit} />
  </fieldset>
</form>
    );
    }
}
 
export default Tagcloud