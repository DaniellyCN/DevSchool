import{P1container, P1esquerdo, P1direito} from './styled.js'

export default function Conteudo(){
    return(
        <P1container>

        
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
                                <input type="text"/>
                            </div>
                            <div>
                                <div class="campo">Chamada:</div>
                                <input type="number"/>
                            </div>
                        </div>

                        <div class="p1-coluna">
                            <div>
                                <div class="campo">Curso:</div>
                                <input type="text"/>
                            </div>
                            <div>
                                <div class="campo">Turma:</div>
                                <input type="text"/>
                            </div>
                        </div>


                        <div class="p1-coluna3">
                            <button>Cadastrar</button>
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
                            <div class="p1-individual">
                                <div class="espaço"></div>
                                <div class="p1-id">1</div>
                                <div class="p1-nome">Danielly Cristina do C Neves</div>
                                <div class="p1-chamada">04</div>
                                <div class="p1-turma">Info A</div>
                                <div class="p1-curso">Informática</div>

                                <div class="p1-elip esse">
                                    <div class="p1-elip2 p1-editar"><img src="/assets/images/delete.svg" alt=""/></div>
                                </div>
                                
                                <div class="p1-elip">
                                    <div class="p1-elip2 p1-deletar"><img src="/assets/images/edit.svg" alt=""/></div>
                                </div>

                                <div class="espaço"></div>
                            </div>

                            <div class="gato-baixo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </P1direito>
    </P1container>
    )
}