class Alien{
    species;

    constructor(species){
        this.species = species;
    
    }
    greet(){
        console.log(`hello  ${this.species}`)
    }
}



 
 class martian extends Alien {
     move(){
         return "waddling";
     }
 }
 
 class timelord extends Alien{
    move(){
        return "skipping";
     }
 }
 class reptile extends Alien{
    move(){
        return "Scaling the console";
    }
 }
 let yourmom = new timelord("The Doctor")
 
 let martians = new martian("The Martians")

 let repts = new reptile ("Reptilian humanoids")

 console.log(`Oh No! The ${yourmom.species} is ${yourmom.move()} towards us! `);

console.log(`Run! The ${martians.species} are ${martians.move()} all around the console!!`)

console.log(`Look out! the ${repts.species} are ${repts.move()}. They're going to escape! Close the console quick!!`)
