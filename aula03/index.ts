import { validar } from '../framework-teste'


/*
    | - - SISTEMA DE PARCELAMENTO - - |

| Requisitos |
    1. Parcela máxima: 12x
    2. Parcela única: 5% OFF
    3. Parcelas de 2 a 6x: Sem Juros
    4. Parcelas acima de 7x: 2% de Juros Simples a.m (J = CiT)
    5. Parcelas acima de 2x: Valor mínimo de R$ 20,00

| Outros Testes |
    1. O valor deve ser um número inteiro positivo V
    2. Não deve aceitar caracteres não numéricos V
*/

interface IParcelamento{
    valorCompra: number
    nParcelas: number
}

interface IResponseParcelamento extends IParcelamento{
    valorParcelas: number
    ehParcelamentoValido: boolean
}

function permitirParcelamento({valorCompra, nParcelas}: IParcelamento) {

    let response: IResponseParcelamento = {
        valorCompra: 0,
        nParcelas: 0,
        valorParcelas: 0,
        ehParcelamentoValido: false,
    }

    if((nParcelas < 1) || (nParcelas > 12) || (valorCompra <= 0)) return false

    if(nParcelas === 1){
        const valorCompraComDesconto = valorCompra * 0.95

        if (valorCompraComDesconto < 20) return response

        response = {
            valorCompra: valorCompraComDesconto,
            nParcelas: 1,
            valorParcelas: valorCompraComDesconto,
            ehParcelamentoValido: true,
        }
    }

    if((nParcelas >= 2) && (nParcelas <= 6)) {
        const valorParcelado = valorCompra/nParcelas

        if(valorParcelado < 20) return response

        response = {
            valorCompra,
            nParcelas,
            valorParcelas: valorParcelado,
            ehParcelamentoValido: true
        }
    }

    if((nParcelas >= 7) && (nParcelas <= 12)){
        const juros = (valorCompra * 0.02)
        const valorCompraComJuros = valorCompra + juros
        const valorParcelasComJuros = valorCompraComJuros / nParcelas
        
        if(valorParcelasComJuros < 20) return response

        response = {
            valorCompra: valorCompraComJuros,
            nParcelas,
            valorParcelas: valorParcelasComJuros,
            ehParcelamentoValido: true,
        }
    }

    console.log(response)
}

permitirParcelamento({valorCompra: 200, nParcelas: 10})

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