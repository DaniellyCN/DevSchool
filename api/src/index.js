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
        resp.send('Deu erro')
    }  
})

app.post('/matricula', async(req,resp) =>{
   
    try {
        let r = req.body;      
        let obj = {
            nm_aluno: r.aluno,
            nr_chamada: r.num,
            nm_curso: r.curso,
            nm_turma: r.turma};
        
        let u = await db.tb_matricula.create(obj);
        resp.send(u);
    } catch (error) {

        resp.send(error.toString());
    }
})

app.put('/matricula/:id', async(req,resp)=>{
    let r = req.params.id;
    let b = req.body;
    
    try {
        let u = await db.tb_matricula.update(
            {   nm_aluno : b.aluno,
                nr_chamada : b.num,
                nm_curso : b.curso,
                nm_turma : b.turma},
                {where:{id_matricula:r}}
        )
        resp.sendStatus(200);

    } catch (error) {
       resp.send('Deu erro')
    }

})

app.delete ('/matricula/:id', async(req,resp) =>{
    let getId = req.params.id;
    try {
        let a = await db.tb_matricula.destroy({where: {id_matricula: getId}});
        resp.sendStatus(200);
    } catch (error) 
    {
        resp.send('Deu erro');
    }

})


app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))