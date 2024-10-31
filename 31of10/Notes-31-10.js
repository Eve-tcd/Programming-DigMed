//to recall files in JavaScript it is done the same way as HTML//
//JSON all keys need to be surrounded by quotes, no fucntions unlike JS//

//principles of OOP//

//Abstraction                            blueprint//

//Inheritance                           sub-classes//

//Encapsulation                          private
//                               members or methods//

//Polymorphism                         difference//
//                          behaviour but same name//

//Mehod overloading or overridding      different //
//          method depending on number of arguments//


//through oop you use clases to create reusable blueprints of objects with the DATA and METHODS it needs//

// class person{
//   name;//
//        constructor(name){//
//    this.name = name;//
// }

//  speak(){//
//      console.log('hello, my name is ${this.name}');//
//      }//
//  }//

//When you create an instance of a clas,s you create an OBJECT with the characteristics of that class, all members within are available//

//let eve = new Person('Eve');
// eve.speak();


//inheritance//
//you can extend an existing class to give it more specificity, new members or change existing ones//

//class Fish extends Animal{
    //move(){
   //     console.log("swim")
   // }
//}

//let guppy = new Fish();
//guppy.move();//


//Encapsulation
//you can control who has access to members by making them private//

//class Person{
//    #name;
//    constructor(name){
//        this.#name = name;
//    }
//
//    getBane(){
//        return this.#name;
//    }
//}

//the # within the name, makes it a private variable that can only be used within this class

//TESTING BELOW//

class Person{
    name;

    constructor(name){
        this.name = name;
    
    }
    greet(){
        console.log(`hello  ${this.name}`)
    }
}
//
//let rory = new Person("Rory");
//rory.greet();

//console.log("name", rory.name)


//Polymorphism//

//class Animal{
 //   name;
  //  constructor(name){
  //      this.name = name;
  //  }
  //  move(){
   //     console.log("moving!");
   // }
//}

//class Bird extends Animal {
//    move(){
//        console.log("Fly");
//    }
//}

//class Fish extends Animale{
//    move(){
//        console.log("Swim");
//    }
//}

//Through this, when each of the above specificed moves it gets the specific answer back rather than "Moving!" which was previouslt defined.