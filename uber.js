class Uber {
    constructor(distance,rate,waitingtime)
    {
        this.distance=distance;
        this.rate=rate;
        this.waitingtime=waitingtime;

    }

    setdistance(dist)
    {
     this.distance=dist;
    }
 

   getrideDetails()
   {
       return `No of kilometers = ${this.distance} km,  rate/km = ${this.rate} re , waiting period = ${this.waitingtime} hour `;
   }
   getprice()
   {
     let price= ((this.distance*this.rate)+(this.waitingtime*50));
     return `the price of ride is ${price} rupees`;
   }
 
} 

let customer1 = new Uber(15,20,1);
customer1.setdistance(10);
console.log(customer1.getrideDetails());
console.log(customer1.getprice());

// output:
//No of kilometers = 10 km,  rate/km = 20 re , waiting period = 1 hour 
//the price of ride is 250 rupees
