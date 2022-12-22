/* Diferença entre localStorage e sessionStorage 
os dados armazenados em localStorage NÃO tem tempo de expiração
já o do sessionStorage são limpos ao fim da sessão*/


/* EXEMPLOS DE COMANDO COM localStorage */
localStorage.clear() // limpa tudo do armazenamento local
localStorage.setItem('nome', 'Murillo') // armazena dados e leva 2 parametros, chave e valor
localStorage.getItem('nome') // exibe item, leva o parametro da chave OBS: ENTRE ASPAS
localStorage.removeItem('nome') // remove item, leva o parametro da chave
localStorage.key() //exibe dados armazenados em um localStorage, leva indice como parametro


/* Para armazenamos array ou objetos no localStorage devemos formatar para string */

const habilidades = ['HTML', 'CSS', 'JavaScript', 'WordPress']
const jsonHabilidades = JSON.stringify(habilidades, undefined, 2) // formatando para string
console.log(typeof jsonHabilidades)
localStorage.setItem('habilidades', jsonHabilidades)
localStorage.getItem('habilidades')