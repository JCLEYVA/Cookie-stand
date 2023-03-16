//seattle:23               65        6.3           

//tokyo: 3                24        1.2

//Dubai: 11               38        3.7

//Paris: 20               38        2.3

// Lima: 2                16        4.6

//start for cities
// console.log ('inside app')

'use strict';

let cityTable = document.getElementById('cities');
let tfoot = document.createElement('tfoot');
let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am','11:00am','12:00pm','1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

let footerTotals = [];
let allTotal = 0;


//push array for stores
let storeArray = [];


//create function for data.
let city = function(cityLocation, minCust, maxCust, avgCookPerCust){
this.name = cityLocation;
this.minCustomer = minCust;
this.maxCustomer = maxCust;
this.avgCookie = avgCookPerCust;
  this.hourlySales = [];
  this.completeSales = 0;
storeArray.push(this);
};

city.prototype.getRandomCust = function () {
  return Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer;
};

city.prototype.getHourlySales = function () {
  for (var i = 0; i < hours.length; i++) {
    var rand = Math.floor(this.getRandomCust() * this.avgCookie);
    this.hourlySales.push(rand);
    this.completeSales += rand;
  }
};

city.prototype.render = function () {
  var row = document.createElement('tr');
  var td = document.createElement('td');
  td.innerHTML = this.name;
  row.appendChild(td);

  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdHourly = document.createElement('td');
    tdHourly.innerHTML = this.hourlySales[i];
    row.appendChild(tdHourly);
  }
  var complete = document.createElement('td');
  complete.innerHTML = this.completeSales;
  row.appendChild(complete);
  cityTable.appendChild(row);
};

let seattleStore = new city('Seattle', 23, 65, 6.3, 0)
let parisStore = new city('paris', 20, 38, 2.3, 0)
let tokyoStore = new city('tokyo', 3, 24, 1.2, 0)
let dubaiStore = new city('dubai', 11, 38, 3.7)
let limaStore = new city('lima', 2, 16, 4.6, 0)



function generateTableHeading() {
  var row = document.createElement('tr');
  cityTable.appendChild(row);
  var td = document.createElement('td');
  td.innerHTML = "storeLocation";
  row.appendChild(td);
  for (var i = 0; i < hours.length; i++) {
    var tdHourly = document.createElement('td');
    tdHourly.innerHTML = hours[i];
    row.appendChild(tdHourly);
  }
  var total = document.createElement('td');
  total.innerHTML = 'Totals';
  row.appendChild(total);
  cityTable.appendChild(row);
}

function callAllStores() {
for (let i = 0; i < storeArray.length; i++) {
  storeArray[i].getHourlySales();
  storeArray[i].render();
}}

function rendertfoot(){
  let footer = document.createElement('tr');
  cityTable.appendChild(footer);
  let label = document.createElement('td');
  label.textContent = 'Totals';
  footer.appendChild(label);
  let totalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let total = 0;
    for(let j = 0; j < storeArray.length; j++){
    total += storeArray[j].hourlySales[i];
    totalOfTotals += storeArray[j].hourlySales[i];
    }
    let totalElem = document.createElement('td');
    totalElem.textContent = total;
    footer.appendChild(totalElem);
  }
  let totalElem = document.createElement('td');
    totalElem.textContent = totalOfTotals;
    footer.appendChild(totalElem);
  
}


generateTableHeading();
callAllStores();
rendertfoot();



// var fields = function (event) {
//   event.target.storeEach.value = null;
//   event.target.minInput.value = null;
//   event.target.maxInput.value = null;
//   event.target.aveInput.value = null;
// };

// var formEl = document.getElementById("form");
// formEl.addEventListener("submit", function (event) {
//   event.preventDefault();
//   var newStoreName = event.target.storeEach.value;
//     var newMin = parseInt(event.target.minInput.value);
//     var newMax = parseInt( event.target.maxInput.value);
//     var newAvg = parseFloat(event.target.aveInput.value);
//     var newRow = newCityName + "Row";
//     var newCity = new CookieStore(newCityName, 4, newMin, newMax, newAvg, newRow);
//     newStoreName.render();
//     newCity.getHourlySales();
//     newCity.render();
//     CookieStore.push(newCity);
//     fields(event);

//   })
// lab 8.







//lab 06

// let seattle = {
//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     dailyTotal: 0,
//     avgCookSoldEachArray: [],
//     avg: 6.3,
//     getRandomCust: function () {
  
//       return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//     },
//     getRandomCookPerHour: function () {
  
//       return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
//     },
//     pushSoldArray: function () {
//       for (let i = 0; i < hours.length; i++) {
//         this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); 
//         console.log(this.avgCookSoldEachArray[i]); //for loop to go the length of hours array to assign it a random daily average
//       }
//     },
//     totalCookSales: function () {
//       for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
//         this.dailyTotal += this.avgCookSoldEachArray[i];
//       }
//     },

//     getDailyTotal: function(){
//      for(let i =0; i < hours.length; i++){
//      this.dailyTotal += this.avgCookSoldEachArray[i]; 
//      console.log(this.dailyTotal);
     

//      };

//     },

//     render: function () {

//       this.pushSoldArray();
//       this.getDailyTotal();
//       let seattleStore = document.getElementById("Seattle");
//       for (let i = 0; i < hours.length; i++) {
//         console.log('test');
//         let li = document.createElement('li');
//         li.textContent = `${hours[i]}: ${this.avgCookSoldEachArray[i]} cookies`;
   
//         seattleStore.appendChild(li);
//       }
//       let liTotal = document.createElement('li');
//       liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//       seattleStore.appendChild(liTotal);
    
  
//    console.log(this.dailyTotal);
//     },

//   };
   
//   seattle.render(); 



//   let paris = {
//     name: 'Paris',
//     min: 11,
//     max: 38,
//     dailyTotal: 0,
//     avgCookSoldEachArray: [],
//     avg: 3.7,
//     getRandomCust: function () {
  
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
//       },
//       getRandomCookPerHour: function () {
    
//         return Math.round(this.getRandomCust() * this.avg); 
//       },
//       pushSoldArray: function () {
//         for (let i = 0; i < hours.length; i++) {
//           this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); 
//           console.log(this.avgCookSoldEachArray[i]);
//         }
//       },
//       totalCookSales: function () {
//         for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
//           this.dailyTotal += this.avgCookSoldEachArray[i];
//         }
//       },
       
//       getDailyTotal: function(){
//         for(let i=0; i< hours.length; i++){
//             this.dailyTotal += this.avgCookSoldEachArray[i];
//             console.log(this.dailyTotal);
//         };
//       },


//       render: function () {

//         this.pushSoldArray();
//         this.getDailyTotal();
//         let parisStore = document.getElementById("paris");
//         for (let i = 0; i < hours.length; i++) {
//           let li = document.createElement('li');
//           console.log('test')
//           li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
//           parisStore.appendChild(li);
          
//         }
//         let liTotal = document.createElement('li');
//         liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//         parisStore.appendChild(liTotal);

//         console.log(this.dailyTotal);
//       },
// };

//     paris.render();


//     let tokyo = {
//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     dailyTotal: 0,
//     avgCookSoldEachArray: [],
//     avg: 1.2,
//     getRandomCust: function () {
  
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//       },
//       getRandomCookPerHour: function () {
    
//         return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
//       },
//       pushSoldArray: function () {
//         for (let i = 0; i < hours.length; i++) {
//           this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); //for loop to go the length of hours array to assign it a random daily average
//         }
//       },
//       totalCookSales: function () {
//         for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
//           this.dailyTotal += this.avgCookSoldEachArray[i];
//         }
//       },
//       render: function () {
//         this.pushSoldArray();
//         this.getDailyTotal();
//         let tokyoStore = document.getElementById("Tokyo");
//         for (let i = 0; i < hours.length; i++) {
//           let li = document.createElement('li');
//           li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
//           tokyoStore.appendChild(li);
//         }
//         let liTotal = document.createElement('li');
//         liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//         tokyoStore.appendChild(liTotal);
//       }
//     };
 
//     tokyo.render();


//     let dubai = {
//     name: ('Dubai'),
//     min: 11,
//     max: 38,
//     dailyTotal: 0,
//     avgCookSoldEachArray: [],
//     avg: 3.7,
//     getRandomCust: function () {
  
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
//       },
//       getRandomCookPerHour: function () {
    
//         return Math.round(this.getRandomCust() * this.avg); 
//       },
//       pushSoldArray: function () {
//         for (let i = 0; i < hours.length; i++) {
//           this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); 
//         }
//       },
//       totalCookSales: function () {
//         for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
//           this.dailyTotal += this.avgCookSoldEachArray[i];
//         }
//       },
//       render: function () {
//         this.pushSoldArray();
//         this.getDailyTotal();
//         let dubaiStore = document.getElementById("Dubai");
//         for (let i = 0; i < hours.length; i++) {
//           let li = document.createElement('li');
//           li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
//           dubaiStore.appendChild(li);
//         }
//         let liTotal = document.createElement('li');
//         liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//         dubaiStore.appendChild(liTotal);
//       },
//     };
    
//     dubai.render();


//     let lima = {
//     name: "Lima",
//     min: 11,
//     max: 38,
//     allCookies: 0,
//     avgCookSoldEachArray: [],
//     avg: 3.7,
//     getRandomCust: function () {
  
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
//       },
//       getRandomCookPerHour: function () {
    
//         return Math.round(this.getRandomCust() * this.avg); 
//       },
//       pushSoldArray: function () {
//         for (let i = 0; i < hours.length; i++) {
//           this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); 
//         }
//       },
//       totalCookSales: function () {
//         for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
//           this.dailyTotal += this.avgCookSoldEachArray[i];
//         }
//       },
//       render: function () {
//         this.pushSoldArray();
//         this.getDailyTotal();
//         let limaStore = document.getElementById("Lima");
//         for (let i = 0; i < hours.length; i++) {
//           let li = document.createElement('li');
//           li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
//           limaStore.appendChild(li);
//         }
//         let liTotal = document.createElement('li');
//         liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//         limaStore.appendChild(liTotal);
//       },
//     };
