class Persona {
    #nombre = "def";
    #arma = "def"

    constructor(nombre, arma) {
        this.#nombre = nombre;
        this.#arma = arma;
    }



    getNombre() {
        return this.#nombre;
    }
    getArma() {
        return this.#arma;
    }

    seEncuentraConDinosaurio(RazaDinosaurio) {
        console.log(`${this.#nombre} se topo con un Dinosaurio y solo tiene esta ${this.#arma}`);
        RazaDinosaurio.observoPersona(this);
       
    }

    estasSiendoAtacado(Porundinosaurio){
        if (this.getArma()){
            console.log(`${this.getNombre()} ataca al ${Porundinosaurio.getRaza()}`);
            
        }else{
            console.log("tengo que huir");
            
        }
        
    }





}


module.exports = Persona;