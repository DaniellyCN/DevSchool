import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar';

import{P1container, P1esquerdo, P1direito} from './styled.js'

import Api from '../services/api';
import { useState, useEffect, useRef } from 'react';




const api = new Api();



export default function Conteudo(){
    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState('');
    const [turma, setTurma] = useState('');
    const [curso, setCurso] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);
    
    const loading = useRef(null);

    async function listar(){
        let r = await api.listar();
        console.log(r);
        setAlunos(r);
    }

    async function inserir(){
        if(idAlterando==0){
            let r = await api.inserir(nome,chamada,curso,turma);//variaveis de estado aqui. as q foram aqui criadas né
            if(r.erro)
                toast.error(r.erro)
            else
                toast.dark('Aluno inserido com sucesso.')
        }
        else{
            let r = await api.alterar(nome,chamada,curso,turma,idAlterando);//variaveis de estado aqui. as q foram aqui criadas né
            if(r.erro)
                toast.error(r.erro)

            else{
                toast.dark('Aluno alterado com sucesso.')
                setNome('');
                setChamada('');
                setCurso('');
                setTurma('');
                setIdAlterando(0);
            }
            
        }

        listar();
    }

    async function remover(id){
        let verifique = window.confirm('Você deseja realmente deletar esse aluno❔')
        if(verifique){
        let r = await api.deletar(id);
        toast('❌Aluno removido❌')
        listar();
        }
        else{
            alert('Você não deletou esse aluno.')
        }
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
            <LoadingBar color="green" ref={loading} />
        
        <P1esquerdo>
            <div classNameName="p1-logo"> 
                <div className="p1-logo1"><img src='/assets/images/Logo1.png' alt=""/></div>
                <div className="p1-logo2"><img src='/assets/images/Logo2.svg' alt=""/></div>
            </div>
            <div className="p1-vazia"></div>
            
                <div className="p1-linha">
                    <div className="p1-gerenciamento">Gerenciamento</div>
                    <div className="p1-seta"><img src="/assets/images/Seta.svg" alt=""/></div>
                </div>
                <div className="p1-alunos">Alunos</div>
            
        </P1esquerdo>



        <P1direito>

            <div className="p1-cabeçalho">
                <div className="p1-logado">
                    <div className="p1-foto">
                        <div className="p1-elipse1">
                            <img src="/assets/images/Ellipse.png" alt=""/>
                        </div>
                        <div className="p1-elipse2">
                            <div className="p1-numero">3</div>
                        </div>
                    </div>
                    <div className="p1-usuario">
                        <div className="p1-ola">Olá, </div>
                        <div className="p1-espaço"></div>
                        <div className="p1-bruno">Bruno de Oliveira</div>
                    </div>
                </div>
                <div className="p1-icones1">
                    <div className="p1-reload"> <img src="/assets/images/Reload.png" alt=""/></div>
                    <div className="p1-sair"> <img src="/assets/images/Out.png" alt=""/></div>
                </div>
            </div>

            <div className="p1-conteudo">
                <div className="p1-cadastro">
                    <div className="p1-inserirAluno">
                        <div className="p1-frescura"> <img src="/assets/images/Linha.png" alt=""/></div>
                        <div className="p1-aluno">{idAlterando==0?"Novo Aluno":`Alterando Aluno : ${idAlterando}`}</div>
                    </div>
                    <div className="p1-inputs">
                        <div className="p1-coluna">
                            <div>
                                <div className="campo">Nome:</div>
                                <input type="text" value={nome} onChange={e =>setNome(e.target.value)} />
                            </div>
                            <div>
                                <div className="campo">Chamada:</div>
                                <input type="number" value={chamada} onChange={e =>setChamada(e.target.value)}/>
                            </div>
                        </div>

                        <div className="p1-coluna">
                            <div>
                                <div className="campo">Curso:</div>
                                <input type="text" value={curso} onChange={e =>setCurso(e.target.value)}/>
                            </div>
                            <div>
                                <div className="campo">Turma:</div>
                                <input type="text" value={turma} onChange={e =>setTurma(e.target.value)}/>
                            </div>
                        </div>


                        <div className="p1-coluna3">
                            <button onClick={inserir} >{idAlterando==0?"Cadastrar":"Alterar"}</button>
                        </div>
                    </div>
                </div>


                <div className="p1-cadastro2">

                    <div className="p1-inserirAluno">
                        <div className="p1-frescura"> <img src="/assets/images/Linha.png" alt=""/></div>
                        <div className="p1-aluno">Alunos Matriculados</div>
                    </div>

                    <div className="p1-tabela">
                        <div className="p1-tbcabeçalho">
                            <div className="p1-id">ID</div>
                            <div className="p1-nome">Nome</div>
                            <div className="p1-chamada">Chamada</div>
                            <div className="p1-turma">Turma</div>
                            <div className="p1-curso">Curso</div>
                        </div>

                        <div className="p1-infoalunos">                                
                        <div className="gato-baixo"></div>
                            {alunos.map(item =>                                  
                                <div className="p1-individual cor">
                                    <div className="espaço"></div>
                                    <div className="p1-id">{item.id_matricula}</div>
                                    <div className="p1-nome" title={item.nm_aluno} >{(item.nm_aluno != null && item.nm_aluno.length >=20) ? `${item.nm_aluno.substr(0,20)}...`: item.nm_aluno}</div>
                                    <div className="p1-chamada">{item.nr_chamada}</div>
                                    <div className="p1-turma">{item.nm_turma}</div>
                                    <div className="p1-curso">{item.nm_curso}</div>
                        
                                    <div className="p1-elip esse">
                                    <div className="p1-elip2 p1-editar"><img onClick={()=>remover(item.id_matricula)} src="/assets/images/delete.svg" alt=""/></div>
                                    </div>
                                                        
                                    <div className="p1-elip">
                                         <div className="p1-elip2 p1-deletar"><img onClick={()=>editar(item)} src="/assets/images/edit.svg" alt=""/></div>
                                    </div>
                        
                                    <div className="espaço"></div>
                                </div>
                                )}
                            


                            <div className="gato-baixo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </P1direito>
    </P1container>
    )
}