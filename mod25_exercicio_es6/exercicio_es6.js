const alunos = [
    {nome:'Jorge', nota:9.6},
    {nome:'Luana', nota:10},
    {nome:'Ana', nota:4},
    {nome:'Maria', nota:3},
    {nome:'Filipe', nota:6},
    {nome:'Rodrigo', nota:5},
]

const alunosQuePassaram = alunos.filter(alunos => {
    if (alunos.nota >= 6) {
        return {
            nome: alunos.nome,
            nota: alunos.nota
        }
    }
})
console.log(alunosQuePassaram)
