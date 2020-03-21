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

const objData = [
{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

console.log(classification(objData));
