$(document).ready(function () {
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })
    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    })

$('form').validate({
    rules: {
        nome: {required:true},
        cpf: {required:true},
        email: {required:true, email: true},
        telefone: {required:true},
        endereco: {required:true},
        numero: {required:true},
        complemento: {required: false},
        cep: {required:true}
    },
    messages: {
        nome: 'Por favor, insira seu nome',
        cpf: 'Por favor, insira seu CPF',
        email: 'Por favor, insira um e-mail válido',
        telefone: 'Insira seu número de contato',
        numero: 'Insira o número da residência',
        cep: 'Por favor, insira seu CEP'
    },
    submitHandler: function(form) {
        alert("Formulário enviado com sucesso!")
        form.reset();
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})
})