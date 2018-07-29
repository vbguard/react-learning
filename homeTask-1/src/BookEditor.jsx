import React, { Component } from 'react'

export default class BookEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      img: '',
      descr: '',
      titleValid: true,
      imgValid: true,
      authorValid: true,
      descrValid: true,
      validForm: true,
    };
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({
      title: '',
      author: '',
      img: '',
      descr: '',
      validForm: true
    });
  };

  required = (evt) => {
    const target = evt.target;

    if(target.value.length === 0) {
      this.setState({ [target.name + 'Valid']: false});
     };
     if( target.value.length > 0 ) {
      this.setState({ [target.name + 'Valid']: true});
      this.validForm();
     }
  };

  validForm = () => {
    const boolenValidInput = this.state.titleValid
    && this.state.imgValid
    && this.state.authorValid
    && this.state.descrValid;

    console.log('booleValInp: ',boolenValidInput);

    const valueAllIntput = this.state.title.length > 0
    && this.state.img.length > 0
    && this.state.author.length > 0;

    console.log('value all inp: ',valueAllIntput);
    if ( boolenValidInput && valueAllIntput ) {
        this.setState({ validForm: false });
      }
  }

  render() {
    const { title, author, img, descr, titleValid, authorValid, imgValid, descrValid, validForm } = this.state;

    return (
      <form className="book__editor editor" onSubmit={this.handleSubmit}>
        <label>Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            onBlur={this.required}
            className={titleValid ? null : 'noValid'} />
        </label>
        <label>Image link
          <input type="text"
                name="img"
                value={img}
                onChange={this.handleChange}
                onBlur={this.required}
                className={imgValid ? null : 'noValid'} />
        </label>
        <label>Author
          <input type="text"
                name="author" value={author}
                onChange={this.handleChange}
                onBlur={this.required}
                className={authorValid ? null : 'noValid'} />
        </label>
        <label>Description
          <textarea type="text"
                    name="descr"
                    value={descr}
                    onChange={this.handleChange}
                    onBlur={this.required}
                    className={descrValid ? null : 'noValid'} />
        </label>
        <button
          className={validForm ? 'form__btn--disabled':'form__btn--active'} disabled={validForm} >
          add book
        </button>
      </form>
    );
  };
};
