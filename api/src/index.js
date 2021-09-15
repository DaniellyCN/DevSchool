import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula',async(req,resp) =>{
    try {
        let r = await db.tb_matricula.findAll({order:[['id_matricula','desc']]});
        resp.send(r);
    } catch (error) {
        resp.send({error: r.error})
    }  
})

function Validadora(a,n,c,t){
    let m = "";
    if(parseInt(n) <= 0 || n==null)
        m +="Credencial de número de chamada inválida";
    if(a.length==0)
        m+="Credencial de nome inválida";
    if(c.length==0)
        m+="Credencial de curso inválida";
    if(t.length==0)
        m+="Credencial de turma inválida";
    return m;
}

app.post('/matricula', async(req,resp) =>{
     
    
    try {
        let {aluno,num,curso,turma} = req.body;
        let repetido = await db.tb_matricula.findOne({where:{nr_chamada:num, nm_turma:turma}})
        
        if(repetido!=null)
            return resp.send({erro:'Aluno já é cadastrado'})
      
        let obj = {
            nm_aluno: aluno,
            nr_chamada: num,
            nm_curso: curso,
            nm_turma: turma};
        

        let m = Validadora(aluno,num,curso,turma);
        if(m.length > 0)
            return resp.send({erro:m})
                
        let u = await db.tb_matricula.create(obj);
        resp.send(u);
    } 
    catch (error) {

        resp.send({erro:error.toString()});
    }
    
})

app.put('/matricula/:id', async(req,resp)=>{
    
    try {
        let r = req.params.id;
        let {aluno,num,curso,turma} = req.body;
        let repetido = await db.tb_matricula.findOne({where:{nr_chamada:num, nm_turma:turma}})
        
        if(repetido!=null)
            return resp.send({erro:'Você não alterou os campos de chamada e/ou turma'})
        
        let m = Validadora(aluno,num,curso,turma);
        if(m.length > 0)
            return resp.send({erro:m})
    
        let u = await db.tb_matricula.update(
        {   nm_aluno : aluno,
            nr_chamada : num,
            nm_curso : curso,
            nm_turma : turma},
            {where:{id_matricula:r}}
        )
        resp.sendStatus(200);

    } catch (error) {
       resp.send({error: r.error})
    }

})

app.delete ('/matricula/:id', async(req,resp) =>{
    let getId = req.params.id;
    try {
        let a = await db.tb_matricula.destroy({where: {id_matricula: getId}});
        resp.sendStatus(200);
    } catch (error) 
    {
        resp.send({error: r.error});
    }

})


app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))