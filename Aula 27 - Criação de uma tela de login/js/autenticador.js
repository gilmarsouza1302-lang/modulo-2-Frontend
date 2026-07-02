const CHAVE_USUARIOS = "usuarios";
const CHAVE_SESSAO = "usuarioLogado";

function lerUsuarios() {
    const json = localStorage.getItem(CHAVE_USUARIOS);
    return json ? JSON.parse(json) : [];
}

export function registrar(usuarios) {
    const usuariosExistente = lerUsuarios();
    
    if(usuarios.some(user => user.email === usuario.email)) {
        throw new Error("ja existe este email cadastrado"); // Busca se já existe um usuário com o mesmo email
}

usuariosExistente.push(usuario);
localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuariosExistente));


}
export function login(email, senha) {
    const usuarios = lerUsuarios();
    const usuario = usuarios.find(user => user.email === email && user.senha === senha);  

    if (!usuario) {
        throw new Error("E-mail ou senha incorretos");
    }
    localStorage.setItem(CHAVE_SESSAO, JSON.stringify({email: usuario.email}));

    return usuario;
}