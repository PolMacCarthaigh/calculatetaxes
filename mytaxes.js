var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(sales, taxRates) {
  var result = {};

  for (var  salesList in sales) {
    var company = sales[salesList];
    if (!result[company.name]) {
      result[company.name] = {};
      var total = 0;
      for (var salesIndex in company["sales"]) {
        total += company.sales[salesIndex];
      }
      result[company.name].totalSales = total;
      result[company.name].totalTaxes = taxRates[company.province] * total;
    } else {

     var total = 0;
      for (var salesIndex in company["sales"]) {
        total += company.sales[salesIndex];
      }
      result[company.name].totalSales += total;
      result[company.name].totalTaxes += taxRates[company.province] * total;
    }


  }

console.log(result);
}


calculateSalesTax(companySalesData, taxRates)

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/