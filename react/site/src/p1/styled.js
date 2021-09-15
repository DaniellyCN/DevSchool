import styled from 'styled-components'

const P1container = styled.div`
display: flex; 
flex-direction: row;
height: 100%;
width: 100%;

.p1-linha,.p1-logo{display: flex; flex-direction: row; align-items:center;}


.p1-logo2 {height: 2em; display: flex; flex-direction: column; align-self: center;}
.p1-logo{padding: 3em 7.2em 3em 3.5em; justify-content: space-around;}
.p1-vazia{height: 3.8em; background-color: #262626;}
.p1-logo1 img{width: 1.3em; height: 1.6em; margin-right:0.3em;}

.p1-linha{height: 2em; padding: 1.18em 1.75em 1em 4em;justify-content: space-between;font: 1.12em "Roboto-500";color: white;}
.p1-alunos{background-color: white; height: 2em; padding: 1.18em 1.75em 1em 4em; font: 1.12em "Roboto-500";}


.p1-direito{width: 100%;}
.p1-icones1 img{width: 2.75em; height:2.75em;}
.p1-elipse1{width: 3.5em; height: 3.5em; border-radius: 50%;}
.p1-elipse2{width: 1.25em; height: 1.25em; background-color: #DB21BD; border: 2px solid white; border-radius: 50%; position: relative; z-index: 9;left:-1.25em}
.p1-foto{display: flex; flex-direction: row;}
.p1-logado, .p1-icones1, .p1-usuario, .p1-cabeçalho{display: flex; flex-direction: row;}
.p1-cabeçalho{justify-content: space-between;padding: 1.1em 2.6em;}
.p1-usuario,.p1-icones1{align-items: center;}
.p1-espaço{width: 0.3em;}


.p1-inputs,.p1-coluna div,.p1-inserirAluno{display: flex; flex-direction: row;}
.p1-conteudo{height: auto; padding: 3.5em 3.2em 2em 3.2em; background-color: #F5F5F5;}
.p1-cadastro{padding: 2em 2.8em; background-color: #ffffff; box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25); margin-bottom: 2em;}
.p1-aluno{margin-left: 0.8em; display: flex;flex-direction: column; align-self: center;}
.p1-frescura{display: flex;flex-direction: column; align-self: center;}
.p1-inserirAluno{margin-bottom: 2.3em;}
.campo{width: 5.1em; display: flex;flex-direction: column;justify-content: flex-end; margin-right: 0.8em;font: 1em "Roboto-500"; color: #615858; align-self: center;}
.p1-coluna > div{margin-bottom: 1em;}
.p1-coluna3{display: flex; flex-direction: column; align-self: flex-end;margin-bottom: 1.1em; margin-left: 1.5em;}
button{display: flex; flex-direction: column; border-radius: 44px; background-color: #E911C6; padding: 0.6em 1.3em; border:none; color:#ffffff; font: 0.8em "Roboto-700";}
input{border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;
    height: 2.2em;
    width: 13em;}
.p1-aluno{font:2em "Roboto-700"; color:#3C3939}
.p1-ola{ font:1em "Roboto-400"; color: #615858}
.p1-bruno{font-family: "Roboto-500";color: #615858}
.p1-tabela{display:flex; flex-direction: column; height: 100%;}
.p1-tbcabeçalho,.p1-individual{display:flex; flex-direction: row;}
.p1-id{width: 10%;}
.p1-curso{width: 20%;}
.p1-nome{width: 30%;}
.p1-chamada{width: 15%;}
.p1-turma{width: 20%;}
.p1-tbcabeçalho{background-color: #986CDF; }
.p1-tbcabeçalho{ padding: 1em; align-items: center; }
.p1-individual{height: 3.1em;}
.p1-tbcabeçalho > div{font:1em "Roboto-700"; color:white;}
.p1-individual > div{font: 1em "Roboto-500"; color: #6D6868;}
.p1-infoalunos{height: 100%;align-items: center;}
.p1-individual{align-items: center; border-right: 1px solid #E2E2E2; border-left: 1px solid #E2E2E2;}
.p1-cadastro2{height: 100%; padding: 2em 2.8em; background-color: #ffffff; box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25); margin-bottom: 2em;}
.par{background: #F5F5F5;}
.espaço{width: 1em;}
.gato-baixo{height: 1em;border-bottom: 1px solid #E2E2E2;}
.gato-alto{height: 1em;border-top: 1px solid #E2E2E2;}
.p1-numero, .p1-elipse2{display: flex; flex-direction: column;}
.p1-numero{align-self: center; justify-content: center; width: 0.4em; height: 100%; font:0.6em "Roboto-700"; color:white}
.p1-elip{width: 2.3em; height: 2.3em; background-color:#565656; border-radius: 50%; display: flex; flex-direction: column;}
.p1-elip2{display: flex; flex-direction: column; justify-content: center; align-self: center; height: 100%;}
.p1-deletar img, .p1-editar img{width: 1.3em; height: 1.3em;}
.esse{margin-right: 1em;}
.cor{background-color: #F1F0F0}



`;

const P1esquerdo = styled.div`
display: flex; 
flex-direction: column;
width: 25%;
height: auto;
background-color: #2B3031;
border-top-left-radius: 10px; 
border-bottom-left-radius: 10px;
`

const P1direito = styled.div`
width: 100%;
`
export {P1container, P1esquerdo, P1direito}