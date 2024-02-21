function Vinho(rotulo, safra, maturacao, valorVinho) {
    this.rotulo = rotulo
    this.safra = safra
    this.maturacao = maturacao
    let _valorVinho = valorVinho

    this.descreveVinho = function() {
        console.log(`O vinho ${this.rotulo} da safra de ${this.safra} é feito a partir da uva ${this.uva}`)

        if(maturacao >= 6 && maturacao < 12) {
            console.log(`Envelhecido por ${maturacao} meses em barricas de carvalho, é um vinho reserva`)
        } else if (maturacao >= 12) {
            console.log(`Envelhecido por ${maturacao} meses em barricas de carvalho, é um vinho Gran Reserva`)
        } else {
            console.log(`É um vinho jovem, sem passagem por barricas de carvalho`)
        }
    }
    
    this.setValorVinho = function(valor) {
        if (typeof valor === 'number') {
            _valorVinho = valor
        }
    }

    this.getValorVinho = function() {
        return console.log(`Seu preço médio é R$ ${_valorVinho.toFixed(2)}`)
    }
}

function VinhoTinto(rotulo, uva, safra, maturacao, valorVinho) {
    this.uva = uva
    Vinho.call(this, rotulo, safra, maturacao, valorVinho)
}

function VinhoBranco(rotulo, uva, safra, maturacao, valorVinho) {
    this.uva = uva
    Vinho.call(this, rotulo, safra, maturacao, valorVinho)
}

const vinho1 = new VinhoTinto("Mi Pueblo", "Carmenere", 2023, 0, 39.90)
vinho1.descreveVinho()
vinho1.getValorVinho()

const vinho2 = new VinhoBranco("Pêra Manca", "Antão Vaz e Arinto", 2021, 12, 928)
vinho2.descreveVinho()
vinho2.getValorVinho()

const vinho3 = new VinhoTinto("Yellow Tail", "Syrah", 2022, 6, 59.90)
vinho3.descreveVinho()
vinho3.getValorVinho()