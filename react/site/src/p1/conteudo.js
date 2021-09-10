import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import{P1container, P1esquerdo, P1direito} from './styled.js'

import Api from '../services/api';
import { useState, useEffect } from 'react';




const api = new Api();



export default function Conteudo(){
    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState('');
    const [turma, setTurma] = useState('');
    const [curso, setCurso] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);
    


    async function listar(){
        let r = await api.listar();
        console.log(r);
        setAlunos(r);
    }

    async function inserir(){
        if(idAlterando==0){
            let r = await api.inserir(nome,chamada,curso,turma);//variaveis de estado aqui. as q foram aqui criadas né
            toast.dark('Aluno inserido com sucesso.')
        }
        else{
            let r = await api.alterar(nome,chamada,curso,turma,idAlterando);//variaveis de estado aqui. as q foram aqui criadas né
            toast.dark('Aluno alterado com sucesso.')
            setNome('');
            setChamada('');
            setCurso('');
            setTurma('');
            setIdAlterando(0);
            
        }

        listar();
    }

    async function remover(id){
        let r = await api.deletar(id);
        toast('Aluno removido :(')
        listar();
    }

    async function editar(item){
        setNome(item.nm_aluno);
        setChamada(item.nr_chamada);
        setCurso(item.nm_curso);
        setTurma(item.nm_turma);
        setIdAlterando(item.id_matricula);
    }


    useEffect(()=>{
        listar();
        },[])


    return(
        <P1container>
            <ToastContainer/>
        
        <P1esquerdo>
            <div class="p1-logo"> 
                <div class="p1-logo1"><img src='/assets/images/Logo1.png' alt=""/></div>
                <div class="p1-logo2"><img src='/assets/images/Logo2.svg' alt=""/></div>
            </div>
            <div class="p1-vazia"></div>
            
                <div class="p1-linha">
                    <div class="p1-gerenciamento">Gerenciamento</div>
                    <div class="p1-seta"><img src="/assets/images/Seta.svg" alt=""/></div>
                </div>
                <div class="p1-alunos">Alunos</div>
            
        </P1esquerdo>



        <P1direito>

            <div class="p1-cabeçalho">
                <div class="p1-logado">
                    <div class="p1-foto">
                        <div class="p1-elipse1">
                            <img src="/assets/images/Ellipse.png" alt=""/>
                        </div>
                        <div class="p1-elipse2">
                            <div class="p1-numero">3</div>
                        </div>
                    </div>
                    <div class="p1-usuario">
                        <div class="p1-ola">Olá, </div>
                        <div class="p1-espaço"></div>
                        <div class="p1-bruno">Bruno de Oliveira</div>
                    </div>
                </div>
                <div class="p1-icones1">
                    <div class="p1-reload"> <img src="/assets/images/Reload.png" alt=""/></div>
                    <div class="p1-sair"> <img src="/assets/images/Out.png" alt=""/></div>
                </div>
            </div>

            <div class="p1-conteudo">
                <div class="p1-cadastro">
                    <div class="p1-inserirAluno">
                        <div class="p1-frescura"> <img src="/assets/images/Linha.png" alt=""/></div>
                        <div class="p1-aluno">Novo Aluno</div>
                    </div>
                    <div class="p1-inputs">
                        <div class="p1-coluna">
                            <div>
                                <div class="campo">Nome:</div>
                                <input type="text" value={nome} onChange={e =>setNome(e.target.value)} />
                            </div>
                            <div>
                                <div class="campo">Chamada:</div>
                                <input type="number" value={chamada} onChange={e =>setChamada(e.target.value)}/>
                            </div>
                        </div>

                        <div class="p1-coluna">
                            <div>
                                <div class="campo">Curso:</div>
                                <input type="text" value={curso} onChange={e =>setCurso(e.target.value)}/>
                            </div>
                            <div>
                                <div class="campo">Turma:</div>
                                <input type="text" value={turma} onChange={e =>setTurma(e.target.value)}/>
                            </div>
                        </div>


                        <div class="p1-coluna3">
                            <button onClick={inserir} >Cadastrar</button>
                        </div>
                    </div>
                </div>


                <div class="p1-cadastro2">

                    <div class="p1-inserirAluno">
                        <div class="p1-frescura"> <img src="/assets/images/Linha.png" alt=""/></div>
                        <div class="p1-aluno">Alunos Matriculados</div>
                    </div>

                    <div class="p1-tabela">
                        <div class="p1-tbcabeçalho">
                            <div class="p1-id">ID</div>
                            <div class="p1-nome">Nome</div>
                            <div class="p1-chamada">Chamada</div>
                            <div class="p1-turma">Turma</div>
                            <div class="p1-curso">Curso</div>
                        </div>

                        <div class="p1-infoalunos">
                        <div class="gato-baixo"></div>
                            {alunos.map(item =>
                                <div class="p1-individual">
                                    <div class="espaço"></div>
                                    <div class="p1-id">{item.id_matricula}</div>
                                    <div class="p1-nome">{item.nm_aluno}</div>
                                    <div class="p1-chamada">{item.nr_chamada}</div>
                                    <div class="p1-turma">{item.nm_turma}</div>
                                    <div class="p1-curso">{item.nm_curso}</div>
                        
                                    <div class="p1-elip esse">
                                    <div class="p1-elip2 p1-editar"><img onClick={()=>remover(item.id_matricula)} src="/assets/images/delete.svg" alt=""/></div>
                                    </div>
                                                        
                                    <div class="p1-elip">
                                         <div class="p1-elip2 p1-deletar"><img onClick={()=>editar(item)} src="/assets/images/edit.svg" alt=""/></div>
                                    </div>
                        
                                    <div class="espaço"></div>
                                </div>
                                )}
                            


                            <div class="gato-baixo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </P1direito>
    </P1container>
    )
}