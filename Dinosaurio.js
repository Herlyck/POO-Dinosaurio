class Dinosaurio{
    #raza = "def";

    constructor(raza){
        this.#raza=raza;
    }

    getRaza(){
        return this.#raza;
    }

    observoPersona(individuo){
        console.log(`\tEl dinosaurio ataca con furia extrema al ver a ${individuo.getNombre()}`);
      
        individuo.estasSiendoAtacado(this);

            
            
   
    }
}

/* individuo.ataca(this) */

module.exports = Dinosaurio;