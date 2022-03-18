
function validarusuario(idnomeId, idcpfId, idnascimentoId, idemailId, idtelefoneId) {
    let nome = document.getElementById(idnomeId).value
    let cpf = document.getElementById(idcpfId).value
    let nascimento = document.getElementById(idnascimentoId).value
    let email = document.getElementById(idemailId).value
    let telefone = document.getElementById(idtelefoneId).value;

    if (nome == "")
        alert("Nome do usuario não pode estar em branco. Favor preenchê-lo!");
    else if (cpf == "")
        alert(" CPF não pode estar em branco. Favor preenchê-lo!");
    else if (nascimento == "")
        alert(" Data de Nascimento não pode estar em branco. Favor preenchê-lo!");
    else if (email == "")
        alert(" email não pode estar em branco. Favor preenchê-lo!");
    else if (telefone == "")
        alert(" telefone não pode estar em branco. Favor preenchê-lo!");
    else cadastrarUsuario(nome, cpf, nascimento, email, telefone);
}
function cadastrarUsuario(nome, cpf, nascimento, email, telefone) {
    let novoUsuario = { nome: nome, cpf: cpf, nascimento: nascimento, email: email, telefone: telefone }; 
    //Cria o objeto "novoUsuario"    

    let usuarios = sessionStorage.getItem("usuarios")
    //cria "usuarios"(variavel do sessionStorage) e verifica o armazenamento da sessão

    if (usuarios == null) usuarios = [];
     //se não tiver usuario cadastrado, ele cria um vetor

    else usuarios = JSON.parse(usuarios);
    //se tiver, ele transforma a variavel "usuarios" que ta tipo String em formato JSON(facil leitura) para modificar, e armazena na propria variavel "usuarios"

    usuarios.push(novoUsuario); 
    // adiciona um "novoUsuario" no vetor "usuarios" 
    
    sessionStorage.setItem("usuarios", JSON.stringify(usuarios)); 
    //volta o vetor atualizado de volta para o "sessionStorage" e volta a variavel "usuarios" de JSON para string pois terminou de modifica-la.
    alert("Usuario Cadastrado com Sucesso");
    location.reload();
}

function listarUsuario() {

    let usuarios = sessionStorage.getItem("usuarios");
    // Cria a variavel "usuarios" e chama o "sessionStorage"
    document.write("<h1>Cadastros: </h1>");
    if (usuarios == null)
        document.write("<h3>Ainda não há nenhum usuarios cadastrado</h3>")
    else {
        usuarios = JSON.parse(usuarios);
        //Transforma a estrutura usuarios já cadastrados para JSON(facil leitura)
        usuarios.forEach(usuario => {

            document.write("<h3>Usuario</h3>")
            document.write("<ul>")
            document.write("<li>Nome: " + usuario.nome + "</li>");
            document.write("<li>cpf: " + usuario.cpf + "</li>");
            document.write("<li>nascimento: " + usuario.nascimento + "</li>");
            document.write("<li>email: " + usuario.email + "</li>");
            document.write("<li>telefone: " + usuario.telefone + "</li>");
            document.write("</ul>");

        });// O metodo "forEach" executa a função em todos os elementos do array
        // cria a função para exibir os dados de cada elemento do vetor

    }

}
