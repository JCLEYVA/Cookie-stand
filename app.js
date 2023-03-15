//seattle:23               65        6.3           

//tokyo: 3                24        1.2

//Dubai: 11               38        3.7

//Paris: 20               38        2.3

// Lima: 2                16        4.6

//start for cities
console.log ('inside app')

'use strict';

const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let seattle = {
    city: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,
    custPerHour: [],
    cookiesPerHour: [],
    allCookies: 0,
    getCustPerHour: function () {
        console.log("inside get cust per hour")
        for (let i = 0; 1 < hours.length; i++) {
            this.custPerHour.push(random(this.minCust, this.maxCust));
        }
    },

    getCookiesPerHour: function () {
        this.getCustPerHour()
        for (let i = 0; 1 < hours.length; i++) {
            let hour1 = Math.ceil(this.custPerHour[i] * this.avgSale);
            this.cookiesPerHour.push(hour1);
            this.allCookies += hour1;
        }
    },
    renderliElements: function () {
        this.getCookiesPerHour()
        let seattleStoreList = document.getElementById('seattleList');
        for (let i = 0; i < hours.length; i++) {
            let liElements = document.createElement('Li');
            liElements.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
            seattleStoreList.appendChild(liElements);
        }
        let liElement = document.createElement('li');
        liElement.textContent = `Total: ${this.allCookies} cookies.`;
        seattleStoreList.appendChild(liElement);

       
    }
};
//seattle.renderliElements();
// console.log(seattle.cookiesPerHour);
// let seattleElement = document.getElementById('seattleh3');
// let h3Element1 = document.createElement('h3');
// h3Element1.textContent = seattle.location; 
// seattleElement.appendChild(h3Element1)





// let paris = {
//     location: 'Paris',
//     minCust: 11,
//     maxCust: 38,
//     avgSale: 3.7,
//     cookiesPerHour: [],
//     custPerHour: [],
//     allCookies: 0,
//     getCustPerHour: function () {
//         for (let i = 0; 1 < hours.length; i++) {
//             this.custPerHour.push(random(this.minCust, this.maxCust));
//         }
//     },

//     getCookiesPerHour: function () {
//         this.getCustPerHour()
//         for (let i = 0; 1 < hours.length; i++) {
//             let hour1 = Math.ceil(this.custPerHour[i] * this.avgSale);
//             this.cookiesPerHour.push(hour1);
//             this.allCookies += hour1;
//         }
//     },

//     render: function () {
//         this.getCookiesPerHour()
//         let parisStoreList = document.getElementById('parisStoreList');
//         for (let i = 0; i < hours.length; i++) {
//             let liElements = document.createElement('li');
//             liElements.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             parisStoreList.appendChild(liElements);
//         }
//         let liElement = document.createElement('li');
//         liElement.textContent = `total: ${this.allCookies} cookies.`;

//         paris.render();
//         console.log(paris.cookiesPerHour);
//         let parisElement = document.createElement('ParisFranceh3');
//         let h3Element2 = document.getElementById('h3');
//         parisElement.appendChild(h3Element2); 
   
//     }
// }





// let tokyo = {
//     location: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgSale: 1.2,
//     custPerHour: [],
//     cookiesPerHour: [],
//     allCookies: 0,
//     getCustPerHour: function () {
//         for (let i = 0; 1 < hours.length; i++) {
//             this.customerPerHour.push(random(this.minCust, this.maxCust));
//         }
//     },

//     getCookiesPerHour: function () {
//         this.getCustPerHour()
//         for (let i = 0; 1 < hours.length; i++) {
//             let hour1 = Math.ceil(this.custPerHour[i] * this.avgSale);
//             this.cookiesPerHour.push(hour1);
//             this.allCookies += hour1;
//         }
//     },

//     render: function () {
//         this.getCookiesPerHour()
//         let tokyoStoreList = document.getElementById('tokyoStoreList');
//         for (let i = 0; i < hours.length; i++) {
//             let liElements = document.createElement('li');
//             liElements.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             tokyoStoreList.appendChild(liElements);
//         }
     
//         let liElement = document.createElement('li');
//         liElement.textContent = `total: ${this.allCookies} cookies. `; /////

//         tokyo.render();
//         console.log(tokyo.cookiesPerHour);
//         let tokyoElement = document.getElementById('tokyoh3');
//         let h3Element3 = document.createElement('h3');
//         h3Element3.textContent = tokyo.location;
//         tokyoElement.appendChild(h3Element3);

//     },
   

// }; 



// let dubai = {
//     location: ('Dubai'),
//     minCust: 11,
//     maxCust: 38,
//     avgSale: 3.7,
//     custPerHour: [],
//     cookiesPerHour: [],
//     allCookies: 0,
//     getCustPerHour: function () {
//         for (let i = 0; 1 < hours.length; i++) {
//             this.custPerHour.push(random(this.minCust, this.maxCust));
//         }
//     },

//     getCookiesPerHour: function () {
//         this.getCustPerHour()
//         for (let i = 0; 1 < hours.length; i++) {
//             let hour1 = Math.ceil(this.custPerHour[i] * this.avgSale);
//             this.cookiesPerHour.push(hour1);
//             this.allCookies += hour1;
//         }
//     },

//     render: function () {
//         this.getCookiesPerHour()
//         let dubaiStoreList = document.getElementById('dubaiStoreList');
//         for (let i = 0; i < hours.length; i++) {
//             let liElements = document.createElement('li');
//             liElements.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             dubaiStoreList.appendChild(liElements);

//         }

//         let liElement = document.createElement('li');
//         liElement.textContent = `total: ${this.allCookies} cookies. `;

//         dubai.render();
//         console.log(dubai.cookiesPerHour);


//         let dubaiElement = document.getElementById('dubaih3');
//         let h3Element4 = document.createElement('h3');
//         h3Element4.textContent = dubai.location;
//         dubaiElement.appendChild(h3Element4);
//     },
// };




// let lima = {
//     location: "Lima",
//     minCust: 11,
//     maxCust: 38,
//     avgSale: 3.7,
//     custPerHour: [],
//     cookiesPerHour: [],
//     allCookies: 0,
//     getCustPerHour: function () {
//         for (let i = 0; 1 < hours.length; i++) {
//             this.custPerHour.push(random(this.minCust, this.maxCust));
//         }
//     },

//     getCookiesPerHour: function () {
//         this.getCustPerHour()
//         for (let i = 0; 1 < hours.length; i++) {
//             let hour1 = Math.ceil(this.custPerHour[i] * this.avgSale);
//             this.cookiesPerHour.push(hour1);
//             this.allCookies += hour1;
//         }
//     },

//     render: function () {
//         this.getCookiesPerHour()
//         let limaStoreList = document.getElementById('LimaStoreList');
//         for (let i = 0; i < hours.length; i++) {
//             let LiElements = document.createElement('h3');
//             LiElements.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             limaStoreList.appendChild(LiElements);
//         }
//         let liElement = document.createElement('li');
//         liElement.textContent = `total: ${this.allCookies} cookies. `;
//         lima.render();
//         console.log(lima.cookiesPerHour);

//         let limaElement = document.getElementById('limah3');
//         let h3Element5 = document.createElement('h3');
//         h3Element5.textContent = lima.location;
//         limaElement.appendChild(h3Element5);
//     },
// };

