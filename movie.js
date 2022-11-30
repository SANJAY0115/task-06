class Movie 
{
    constructor(title,studio,rating)
    {
       
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        if(this.rating==null)
        {
           return this.rating="PG13";
        }
    }
    
    getPG(array)
    {
       var res = array.filter((ele)=> ele.rating=="PG13")
           return res;
    }
}
let flim1 = new Movie("Casino Royale","Eon Productions");
let flim2 = new Movie("LoveToday","Ags","PG13");
let flim3 = new Movie("Vikram","Rkfi","PG13");
let flim4= new Movie("Beast","Sun","R12");
let flim5= new Movie("Valimai","Bay","R12");

// console.log(flim1);
// input without rating         = ("Casino Royale","Eon Productions")         //without rating
// output with default rating   = Movie {
//                                          title: 'Casino Royale',
//                                          studio: 'Eon Productions',        //with default rating
//                                          rating: 'PG13'
//                                        }

const array=[flim1,flim2,flim3,,flim4,flim5];
console.log(flim3.getPG(array));



// Return only those movies in input wwith rating 'PG13'
// OUTPUT:

// [
//     Movie {
//       title: 'Casino Royale',
//       studio: 'Eon Productions',
//       rating: 'PG13'
//     },
//     Movie { title: 'LoveToday', studio: 'Ags', rating: 'PG13' },
//     Movie { title: 'Vikram', studio: 'Rkfi', rating: 'PG13' }
//   ]