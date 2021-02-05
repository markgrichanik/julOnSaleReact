import React from 'react';
import DateHeader from './DateHeader';
import Spinner from './Spinner';
import './App.css';

const endpoint = "https://jul-on-sale.herokuapp.com/jul";

class App extends React.Component {
  constructor() {
    super();
    this.state = {shouldShowSpinner: true, categories: []}
  }
  componentDidMount() {
    if (this.state.categories.length === 0) {
        this.fetchData();
    } else {
        this.buildCategories();
    }  
  }
  fetchData() {
    fetch(endpoint)
    .then(response => response.json())
    .then(result => {
        this.setState({
            ...this.state, shouldShowSpinner: false, categories: result.message
        });
        if (this.props) {
            this.props.spinnerHandler();
        }
        this.buildCategories(result.message);
    })
    .catch(error => {
        this.setState({
            ...this.state, shouldShowSpinner: false
        });
    })
  } 
  buildCategories(categories) {
    const mainDiv = document.querySelector('.categories');
    for (let index = 0; index < categories.length; index++)
    {
        let category = categories[index];
        let div = document.createElement('div');
        let header = document.createElement('h3');
        let anchor = document.createElement('a');
        let image = document.createElement('img');

        header.innerHTML = category.name;
        image.src = 'https://github.com/TomerPacific/julOnSale/blob/master/assets/' + category.image + '.png?raw=true';
        image.setAttribute('class', 'category');
        anchor.href = "https://tomerpacific.github.io/julOnSale/categories/" + category.image + "/" + category.image + ".html";
        anchor.innerHTML = '<img src=' + image.src + ' class="category" alt=' + category.name + ' title=' + category.name + '>';

        div.appendChild(header);
        div.appendChild(anchor);
        div.setAttribute('class', 'container');
        mainDiv.appendChild(div);
    }
  }
  render() {
    return <div className="App">
    <header className="App-header">
      What's On Sale @ Jul
    </header>
    <DateHeader />
    <Spinner status = {this.state.shouldShowSpinner}/>
    <div className="categories"></div>
  </div>
  }
}

export default App;
