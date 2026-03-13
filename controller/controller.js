const express = require("express")
const app = express.Router()
app.use(express.json())
const Service = require("../service/service.js")
const service = new Service()

app.get("/funcionarios", (req, resp) => {
    let listaFuncionario = service.getFuncionario()
    resp.json(listaFuncionario)
})

app.get("/funcionarios/:id", (req, res) => {
    const id = req.params.id
    try {
        const respostaService = service.getFuncionarioById(id)
        res.status(200).json(respostaService)
    } catch(erro) { 
        res.status(404).json({erro: erro.message})
    }
})

app.post("/funcionarios", (req, res) => {
    try{
        const corpoRequisicao = req.body
        const respostaService = service.addFuncionario(corpoRequisicao)
        res.status(201).json({resposta: respostaService})
    } catch(erro) {
        res.status(400).json({erro: erro.message})
    }
})

app.put("/funcionarios/:id", (req, res) => {
    try{
        let id = req.params.id
        let corpoRequisicao = req.body
        const respostaService = service.editarFuncionario(id, corpoRequisicao)
        res.status(200).json({msg: respostaService})
    } catch(erro) {
        res.status(400).json({erro: erro.message})
    }
})

app.delete("/funcionarios/:id", (req, res) => {
    try{
        let id = req.params.id
        const respostaService = service.deletarFuncionario(id)
        res.status(200).json({msg: respostaService})
    } catch(erro) {
        res.status(400).json({erro: erro.message})
    }
})

module.exports = app