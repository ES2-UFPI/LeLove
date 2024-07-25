class Usuario {
    // o uso do # indica que o atributo é privado

    #nome;
    #idade;
    #user;
    #email;
    #telefone;
    #sexo;
    #personalidade

    //metodo construtor
    constructor(nome, idade, user, email, telefone, sexo) {
        this.#nome = nome;
        this.#idade = idade;
        this.#user = user;
        this.#email = email;
        this.#telefone = telefone;
        this.#sexo = sexo;
        this.#personalidade = null;
    }

    //metodos getters
    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    get user() {
        return this.#user;
    }

    get email() {
        return this.#email;
    }

    get telefone() {
        return this.#telefone;
    }

    get sexo() {
        return this.#sexo;
    }
    get personalidade(){
        if(this.#personalidade == 1){
            return "Extrovertido e Sociável";
        }
        if(this.#personalidade == 2){
            return "Moderadamente Sociável e Cultural";
        }
        if(this.#personalidade == 3){
            return "Introvertido e Caseiro";
        }
        if(this.#personalidade == 4){
            return "Recluso e Independente";
        }
        if(this.#personalidade == 5){
            return "Indefinido";
        }

        return "Teste de personalidade incompleto! Por favor, realize o teste."
    }
    //metodos setters
    set nome(nome) {
        this.#nome = nome;
    }

    set idade(idade) {
        this.#idade = idade;
    }

    set user(user) {
        this.#user = user;
    }

    set email(email) {
        this.#email = email;
    }

    set telefone(telefone) {
        this.#telefone = telefone;
    }

    set sexo(sexo) {
        this.#sexo = sexo;
    }

    set Personalidade(personalidade) {
        this.#personalidade = personalidade;
    }

    // Método para verificar se o usuário é maior de 18 anos
    isMaiorDeIdade() {
        return this.#idade >= 18;
    }

    // Método para atualizar o perfil
    atualizarPerfil(dados) {
        if (dados.nome) this.nome = dados.nome;
        if (dados.idade) this.idade = dados.idade;
        if (dados.user) this.user = dados.user;
        if (dados.email) this.email = dados.email;
        if (dados.telefone) this.telefone = dados.telefone;
        if (dados.sexo) this.sexo = dados.sexo;
    }
}

module.exports = Usuario;
