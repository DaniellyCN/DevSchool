import axios from 'axios'
const api = axios.create({
baseURL: 'http://localhost:3030'
})


export default class Api{
    async listar(){
        let r = await api.get('/matricula');
        return r.data;
        
    }
    async inserir(nome,chamada,curso,turma){
        let r = await api.post('/matricula',{aluno:nome,num:chamada,curso:curso,turma:turma});
        return r.data;
    }
    async alterar(nome,chamada,curso,turma,id){
        let r = await api.put(`/matricula/${id}`,{aluno:nome,num:chamada,curso:curso,turma:turma});
        return r.data;
    }
    async deletar(id){
        let r = await api.delete(`/matricula/${id}`);
        return r.data;
    }

}