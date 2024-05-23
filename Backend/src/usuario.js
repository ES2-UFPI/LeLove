class Usuario 
{
    // o uso do # indica que o atributo é privado

    #nome 
    #idade
    #user
    #email
    #telefone
    #sexo

    //metodo construtor
    constructor (nome,idade,user,email,telefone,sexo){
        this.#nome = nome
        this.#idade = idade
        this.#user = user
        this.#email = email
        this.#telefone = telefone
        this.#sexo = sexo

    }

    //metodos getters
    get nome(){
        return this.#nome
    }

    get idade(){
        return this.idade
    }

    get user(){
        return this.#user
    }

    get email(){
        return this.#email
    }

    get telefone(){
        return this.#telefone
    }

    get sexo(){
        return this.#sexo
    }

    //metodos setters
    set nome(nome){
        this.#nome = nome
   }

   set idade(idade){
    this.#idade = idade
    }

    set user(user){
        this.#user = user
   }

    set telefone(telefone){
        this.#telefone = telefone
    }

    set sexo(sexo){
         this.#sexo = sexo
    }
    


    // Método para verificar se o usuário é maior de 18 anos
  isMaiorDeIdade() {
    return this.idade >= 18;
  }

}