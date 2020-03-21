import React from 'react';
import ReactDOM from 'react-dom';

class ProductTable extends React.Component {
    render(){
      const titles = this.props.titles;
      const data = classification(this.props.data);
      var items = [];
      for (let prop in data) {
        items.push(
          <tr>
            <th colspan="2" class="subtitle">{prop}</th>
          </tr>
        );
        data[prop].forEach(d => {
          items.push(
            <tr>
              <td class={d.stocked ? "" : "stocked"}>{d.name}</td>
              <td>{d.price}</td>
            </tr>
          )
  
        })
      }
      const TitleItems = titles.map((title) => <th>{title}</th>);
      return(
        <table>
          <tr>
            {TitleItems}
          </tr>
          {items}
        </table>
  
      );
    }
  
  }
  class SearchBar extends React.Component {
    render(){
      return (
        <div>
          <input type="text" placeholder="Search..." />
          <br/>
          <input type="checkbox" /> Only show products in stock
        </div>
      )    
    }
  }
  class FilterableProductTable extends React.Component {
    render() {
      const titles = ["Name", "Price"];
      return (
        <div>
          <SearchBar />
          <br/>
          <ProductTable titles={titles} data={this.props.data} />
        </div>
      ); 
    }
  }
  const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
  ReactDOM.render(
    <FilterableProductTable data={PRODUCTS}/>,
    document.getElementById('root')
  );
  
  function classification(data) {
      let output = {};
      data.forEach((d) => {
        if (output.hasOwnProperty(d.category)) {
          output[d.category].push(d);
        }else{
          output[d.category] = [d];
        }
      });
      return output;
    }