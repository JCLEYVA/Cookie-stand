//seattle:23               65        6.3           

//tokyo: 3                24        1.2

//Dubai: 11               38        3.7

//Paris: 20               38        2.3

// Lima: 2                16        4.6

//start for cities
console.log ('inside app')

'use strict';

const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

const seattleList = document.getElementById('seattleStoreList');

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    dailyTotal: 0,
    avgCookSoldEachArray: [],
    avg: 6.3,
    getRandomCust: function () {
  
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
    },
    getRandomCookPerHour: function () {
  
      return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
    },
    pushSoldArray: function () {
      for (let i = 0; i < hours.length; i++) {
        this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); 
        console.log(this.avgCookSoldEachArray[i]); //for loop to go the length of hours array to assign it a random daily average
      }
    },
    totalCookSales: function () {
      for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
        this.dailyTotal += this.avgCookSoldEachArray[i];
      }
    },

    getDailyTotal: function(){
     for(let i =0; i < hours.length; i++){
     this.dailyTotal += this.avgCookSoldEachArray[i]; 
     console.log(this.dailyTotal);
     

     };

    },

    render: function () {

      this.pushSoldArray();
      this.getDailyTotal();
      let seattleStore = document.getElementById("Seattle");
      for (let i = 0; i < hours.length; i++) {
        console.log('test');
        let li = document.createElement('li');
        li.textContent = `${hours[i]}: ${this.avgCookSoldEachArray[i]} cookies`;
   
        seattleStore.appendChild(li);
      }
      let liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
      seattleStore.appendChild(liTotal);
    
  
   console.log(this.dailyTotal);
    },

  };
   
  seattle.render(); 



  let paris = {
    name: 'Paris',
    min: 11,
    max: 38,
    dailyTotal: 0,
    avgCookSoldEachArray: [],
    avg: 3.7,
    getRandomCust: function () {
  
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
      },
      getRandomCookPerHour: function () {
    
        return Math.round(this.getRandomCust() * this.avg); 
      },
      pushSoldArray: function () {
        for (let i = 0; i < hours.length; i++) {
          this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); 
          console.log(this.avgCookSoldEachArray[i]);
        }
      },
      totalCookSales: function () {
        for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
          this.dailyTotal += this.avgCookSoldEachArray[i];
        }
      },
       
      getDailyTotal: function(){
        for(let i=0; i< hours.length; i++){
            this.dailyTotal += this.avgCookSoldEachArray[i];
            console.log(this.dailyTotal);
        };
      },


      render: function () {

        this.pushSoldArray();
        this.getDailyTotal();
        let parisStore = document.getElementById("paris");
        for (let i = 0; i < hours.length; i++) {
          let li = document.createElement('li');
          console.log('test')
          li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
          parisStore.appendChild(li);
          
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
        parisStore.appendChild(liTotal);

        console.log(this.dailyTotal);
      },
};

    paris.render();


    let tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    dailyTotal: 0,
    avgCookSoldEachArray: [],
    avg: 1.2,
    getRandomCust: function () {
  
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
      },
      getRandomCookPerHour: function () {
    
        return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
      },
      pushSoldArray: function () {
        for (let i = 0; i < hours.length; i++) {
          this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); //for loop to go the length of hours array to assign it a random daily average
        }
      },
      totalCookSales: function () {
        for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
          this.dailyTotal += this.avgCookSoldEachArray[i];
        }
      },
      render: function () {
        this.pushSoldArray();
        this.getDailyTotal();
        let tokyoStore = document.getElementById("Tokyo");
        for (let i = 0; i < hours.length; i++) {
          let li = document.createElement('li');
          li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
          tokyoStore.appendChild(li);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
        tokyoStore.appendChild(liTotal);
      }
    };
 
    tokyo.render();


    let dubai = {
    name: ('Dubai'),
    min: 11,
    max: 38,
    dailyTotal: 0,
    avgCookSoldEachArray: [],
    avg: 3.7,
    getRandomCust: function () {
  
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
      },
      getRandomCookPerHour: function () {
    
        return Math.round(this.getRandomCust() * this.avg); 
      },
      pushSoldArray: function () {
        for (let i = 0; i < hours.length; i++) {
          this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); 
        }
      },
      totalCookSales: function () {
        for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
          this.dailyTotal += this.avgCookSoldEachArray[i];
        }
      },
      render: function () {
        this.pushSoldArray();
        this.getDailyTotal();
        let dubaiStore = document.getElementById("Dubai");
        for (let i = 0; i < hours.length; i++) {
          let li = document.createElement('li');
          li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
          dubaiStore.appendChild(li);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
        dubaiStore.appendChild(liTotal);
      },
    };
    
    dubai.render();


    let lima = {
    name: "Lima",
    min: 11,
    max: 38,
    allCookies: 0,
    avgCookSoldEachArray: [],
    avg: 3.7,
    getRandomCust: function () {
  
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
      },
      getRandomCookPerHour: function () {
    
        return Math.round(this.getRandomCust() * this.avg); 
      },
      pushSoldArray: function () {
        for (let i = 0; i < hours.length; i++) {
          this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); 
        }
      },
      totalCookSales: function () {
        for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
          this.dailyTotal += this.avgCookSoldEachArray[i];
        }
      },
      render: function () {
        this.pushSoldArray();
        this.getDailyTotal();
        let limaStore = document.getElementById("Lima");
        for (let i = 0; i < hours.length; i++) {
          let li = document.createElement('li');
          li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
          limaStore.appendChild(li);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
        limaStore.appendChild(liTotal);
      },
    };

    lima.render();