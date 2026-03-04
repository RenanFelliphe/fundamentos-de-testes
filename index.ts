/*
🛒 E-commerce (Cálculo de Frete e Cupom)
Regra de Negócio: 
    1. O frete é R$ 20,00 fixo.
    2. Se a compra passar de R$ 300,00, o frete é grátis.
    3. Cupons de 10% não se aplicam ao valor do frete.
*/
{
    interface ICart {
        products: IProduct[]
        coupon: number,
    }

    interface IProduct {
        id: number,
        nome: string,
        unityValue: number
    }

    const cart: ICart = {
        products: [
            {id: 1, nome: "Batata Doce", unityValue: 50},
            {id: 2, nome: "Cenoura", unityValue: 50}
        ],
        coupon: 10
    }

    calcShoppingCart(cart)

    function calcShoppingCart(cart: ICart){
        const {products, coupon} = cart
        let totalCart, freight, totalProducts = 0        

        products.forEach((product) => {
            totalProducts += product.unityValue
        })

        
        if(totalProducts <= 0){
            console.log("| -", totalProducts ,"é um valor de compra inválido")
            return;
        }

        totalProducts > 300 ? (freight = 0) : (freight = 20)
            console.log("| - Frete: ", freight)
        
            console.log("| - Valor Total: sem Cupom: ", totalProducts)
        coupon != 0 ? (totalProducts -= totalProducts*coupon/100) : totalProducts
            console.log("| - Valor Total: com Cupom: ", totalProducts)

        totalCart = totalProducts + freight
            console.log("| - Valor Total Final: ", totalCart)
    }
}


/*
👤 Cadastro de Usuário (Validação de Dados)
Regra de Negócio:
    1. O nome deve ter pelo menos 3 caracteres.
    2. A idade deve ser entre 18 e 120 anos.
    3. A senha deve ter no mínimo 8 caracteres.

{
    interface IUser{
        nome: string,
        idade: number,
        senha: string
    }

    validateUser({nome: "Renan", idade: 20, senha: "12345678"})

    function validateUser(user: IUser){
        console.log("| Nome:", user.nome, "| Idade", user.idade, "| Senha:", user.senha, "|"); console.log()
        user.nome.length < 3 ? console.log("| - O nome deve ter no mínimo 3 caracteres") : console.log("| - Nome validado com sucesso")
        user.idade < 18 || user.idade > 120 ? console.log("| - A idade deve estar entre 18 e 120 anos") : console.log("| - Idade validada com sucesso")
        user.senha.length < 8 ? console.log("| - A senha deve ter no mínimo 8 caracteres") : console.log("| - Senha validada com sucesso") 
    }
}
*/

/*
🏦 Sistema Bancário (Transferência Pix)
Regra de Negócio:
    1. O saldo não pode ficar negativo (não há cheque especial).
    2. O limite por transação é de R$ 5.000,00.

{
    interface IUser{
        nome: string,
        saldo: number
    }

    sendPix(200, {nome: "Renan", saldo: 1000}, {nome: "Sarah", saldo: 1000})

    function sendPix(valor: number, origem: IUser, destino: IUser){
        if(valor > origem.saldo){
            console.log("| - Saldo insuficiente")
            return;

        } else if(valor > 5000){
            console.log("| - O limite para transações via PIX é de R$ 5.000,00")
            return;
        }
        
        console.log("| - COMPROVANTE DE TRANSFERÊNCIA")
        console.log("| - Valor da Transferência: ", valor)
        console.log("| - Origem: ", origem.nome)
        console.log("| - Saldo Anterior: ", origem.saldo)
        console.log("| - Destino: ", destino.nome)
        console.log("| - Saldo Anterior: ", destino.saldo)
        console.log()
        
        origem.saldo -= valor
        destino.saldo += valor
        console.log("| - -------------------------- - |")
        console.log("| - Origem: ", origem.nome)
        console.log("| - Novo Saldo: ", origem.saldo)
        console.log("| - Destino: ", destino.nome)
        console.log("| - Novo Saldo: ", destino.saldo)
    }
}
*/