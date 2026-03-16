import scanf from 'scanf'
import { validar } from '../framework-teste'

interface IUsuario {
    id: number
    nome: string
}

interface ILivro {
    id: number
    titulo: string
}

interface IEmprestar {
    usuario: IUsuario
    livros: ILivro[]
}

// Sistema de Empréstimo de Livros
// Requisitos:
// 1. Prazo -> O empréstimo padrão é de 7 dias.
// 2. Multa -> Se o livro for entregue com atraso, cobra-se uma multa fixa de R$5,00 + R$1,00 por dia de atraso.
// 3. Limite -> Cada aluno pode pega no máximo 3 livros simultaneamente.
// 4. Empréstimo -> O usuário deverá estar previamente cadastrado.

const usuarios = [
    {
        id: 1,
        nome: 'Daniel',
    },
    {
        id: 2,
        nome: 'Joel'
    }
]

const emprestar = ({ livros: livrosEmprestimo, usuario: usuarioEmprestimo }: IEmprestar): boolean => {
    const usuarioExiste = usuarios.filter(user => user.id === usuarioEmprestimo.id)
    if (!(usuarioExiste.length > 0)) return false
    if (livrosEmprestimo.length > 3) return false

    const emprestimo: IEmprestar = {
        usuario: usuarioEmprestimo,
        livros: livrosEmprestimo
    }
    return true
}

    // const devolver =
    // const storedEmprestimo = localStorage.getItem("emprestimo")
    // storedEmprestimo ? JSON.parse(storedEmprestimo) : []

    while(true){
        console.log("| - Fazer um emprestimo: [1]")
        console.log("| - Fazer uma devolução: [2]")
        console.log("| - Sair: [3]")
        const escolha = scanf('%d')
        
        switch(escolha){
            case 1: {
                console.log("| - Emprestimo feito")
            }

            case 2: {
                console.log("| - Devolução feita")
            }

            default: {
                break;
            }

        }
    }

// validar({
//     descricao: 'emprestar() - Usuário previamente cadastrado e Quantidade de livros menor que o máximo',
//     esperado: true,
//     atual: emprestar({
//         usuario: { id: 1, nome: 'Daniel' },
//         livros: [
//             { id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel' },
//             { id: 2, titulo: 'O Senhor dos Anéis - As Duas Torres' },
//             { id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
//         ]
//     }
//     )
// })
// validar({
//     descricao: 'emprestar() - Usuário previamente cadastrado e Quantidade de livros maior que o máximo',
//     esperado: false,
//     atual: emprestar({
//         usuario: { id: 1, nome: 'Daniel' },
//         livros: [
//             { id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel' },
//             { id: 2, titulo: 'O Senhor dos Anéis - As Duas Torres' },
//             { id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
//             { id: 4, titulo: 'O Hobbit' },
//         ]
//     }
//     )
// })

// validar({
//     descricao: 'emprestar() - Usuário não cadastrado e Quantidade de livros menor que o máximo',
//     esperado: false,
//     atual: emprestar({
//         usuario: { id: 10, nome: 'Daniel' },
//         livros: [
//             { id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel' },
//             { id: 2, titulo: 'O Senhor dos Anéis - As Duas Torres' },
//             { id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
//         ]
//     }
//     )
// })