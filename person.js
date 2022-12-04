class Person {
    constructor(idno,name,age,bloodGroup)     
    {
        this.idno = idno;
        this.name = name;
        this.age = age;
        this.bloodGroup = bloodGroup;
       
        if(this.idno===" ")
        {
            return this.idno="invalid";
        }
        else{
            return this.idno=idno;
        }
    }
    get PerIdno()
    {
        return `the idNo of the person is ${this.idno}`;
       
    }
    get PerName()
    {
        return `the name of the person is ${this.name}`;
    }
    get PerAge()
    {
       return `the age is = ${this.age}`;
    }
   set  PerBloodGroup(bloodGroup)
    {
          this.bloodGroup= bloodGroup;
    }
    get PerBloodGroup()
    {
        return `the BloodGroup of a person is ${this.bloodGroup}`;
    }
   

}



let per1 = new Person( 567,"jay",26,"B+");
let per2 = new Person(123,"san",25,"AB+");

//console.log(per1);

console.log(per1.PerIdno);
console.log(per1.PerName);
console.log(per1.PerAge);

per1.bloodGroup="o+";
console.log(per1.PerBloodGroup);

//console.log(per2)


// output

// the idNo of the person is 567
//  the name of the person is jay
//  the age is = 26
//  the BloodGroup of a person is o+