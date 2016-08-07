import React from 'react';
import ReactDOM from 'react-dom';

let allTags = []

class Tagcloud extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        allTags: [
            {id: 1, content: "Ferocious"},
            {id: 2, content: "Empathetic"},
            {id: 3, content: "Bold"},
            {id: 4, content: "Visionary"}
        ]};
        this.addTagEvent = this.addTagEvent.bind(this);  
      }


  render() {
    let tags = this.props.tags.map((tag) => {
      return <TagItem key={tag.id} tag={tag} className="tag-item-container" />
    })
    return ( 
          <div className="tag-list-container">
          {tags}
          <NewTagItem addTagEvent={this.addTagEvent} />
          </div>
          )
  }

addTagEvent(tagItem){
    allTags.push(tagItem.newTag);
    this.setState({ allTags });
  }  
}

class TagItem extends React.Component {
    render(){
    return <div className="tag-item">
    <p>{this.props.tag}<span id="close-x">&times;</span></p>
    </div>
    }
    
}

class NewTagItem extends React.Component {
constructor(props){
  super(props);
  this.onSubmit = this.onSubmit.bind(this);
}

componentDidMount(){
    ReactDOM.findDOMNode(this.refs.tagName).focus();
  }

render(){  
return (
  <form onSubmit={this.onSubmit}>
    <label>Enter a new tag </label>
    <input type="text" name="newtag" ref="tagName" />
</form>
    );
    }

onSubmit(event){
    event.preventDefault();
    let input = ReactDOM.findDOMNode(this.refs.tagName)
    let newTag = input.value;
    this.props.addTagEvent({ newTag });
    input.value = '';
  }

}
 
ReactDOM.render(
    <Tagcloud tags={allTags}/>,
    document.getElementById('app')
);


export default Tagcloud


// GENERATE UUID
/*
generateUUID(min,max){
    // NOT A REAL UUID!
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
*/
