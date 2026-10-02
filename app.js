const Dinosaurio = require("./Dinosaurio");
const Persona = require("./Persona");

function main() {
    
    
    //OBJETOS:
    const individuo = new Persona("Juan","hacha");
    const individuo2 = new Persona("Alberto","");
    const dino= new Dinosaurio("T-Rex");
    const dino2= new Dinosaurio("Velociraptor");

    //INTERACCIONES:
    individuo.seEncuentraConDinosaurio(dino2);
    /* individuo2.seEncuentraConDinosaurio */(dino2);
    
     



}
main();