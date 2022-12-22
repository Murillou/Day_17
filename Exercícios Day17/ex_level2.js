const estudante = {
    nome: 'Murillo',
    sobrenome: 'Vinícius',
    idade: 20,
    habilidades: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    país: 'Brasil',
}
 
const jsonObjt = JSON.stringify(estudante, undefined, 2)
localStorage.setItem('estudante', estudante)