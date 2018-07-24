import React, { Component } from 'react'

export default class NoteEditor extends Component {

  state = {
    title: '',
    author: '',
    img: '',
    descr: '',
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.title.trim() === '') return;
    if (this.state.author.trim() === '') return;
    if (this.state.img.trim() === '') return;
    if (this.state.descr.trim() === '') return;

    this.props.onSubmit(this.state);

    this.setState({
      title: '',
      author: '',
      img: '',
      descr: ''
    });
  };

  required = (evt) => {
    const target = evt.target;

    if(target.value.length === 0) {
      target.className = 'noValid';
     };
  };


  render() {
    const { title, author, img, descr } = this.state;

    return (
      <form className="book__editor editor" onSubmit={this.handleSubmit}>
        <label>Title
          <input type="text" name="title" value={title} onChange={this.handleChange} onBlur={this.required} />
        </label>
        <label>Image link
          <input type="text" name="img" value={img} onChange={this.handleChange} />
        </label>
        <label>Author
          <input type="text" name="author" value={author} onChange={this.handleChange} />
        </label>
        <label>Description
          <textarea type="text" name="descr" value={descr} onChange={this.handleChange} />
        </label>
        <button>add book</button>
      </form>
    );
  };
};
