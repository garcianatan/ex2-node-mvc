let bd = require("../repository/bd.json")
class Service{

    getFuncionario(){
        return bd
    }

    getFuncionarioById(id){
        const objetoFuncionario = bd.find(item => item.id == id)
        if(!objetoFuncionario) {
            throw new Error(`Funcionário com o id - ${id} não encontrado!!`)
        }
        return objetoFuncionario
    }

    addFuncionario(obj) {
        const {funcao, cpf} = obj
        const objetoFuncionario = {id: bd.length + 1, funcao, cpf}
    
        if(!funcao || !cpf) {
          throw new Error(`Algo está errado. Tente novamente.`)
        }
      
        if(funcao == " " || cpf == " ") {
          throw new Error(`Preencha todos os campos.`)
        }
    
        bd.push(objetoFuncionario)
        return "Funcionário inserido com sucesso!"
      }
    
      editarFuncionario(id, obj) {
        let objetoFuncionario = bd.find(u => u.id == id)
    
        if(!objetoFuncionario) {
          throw new Error(`Funcionário com o id ${id} não encontrado.`)
        }
    
        objetoFuncionario.funcao = obj.funcao
        objetoFuncionario.cpf = obj.cpf
        return "Funcionário editado com sucesso!"
      }
    
      deletarFuncionario(id) {
        let objetoFuncionario = bd.find((u) => u.id == id)
    
        if(!objetoFuncionario) {
          throw new Error(`Funcionário com o id ${id} não encontrado`)
        }
    
        bd = bd.filter(u => u.id != id);
        return "Funcionário excluído"
      }

}

module.exports = Service