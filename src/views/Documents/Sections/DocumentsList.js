import React, { Component } from 'react';
import NewsModel from "../../../components/NewsModel";


const content = {
    news: [
        {
            title:"Edital para Seleção de Novos Bolsistas 2018.2",
            date:"07 de agosto de 2018",
            content:"O PET TI – Conexão de Saberes é um programa desenvolvido por um grupo de alunos e uma professora tutora. O objetivo do grupo é desenvolver atividades que abrangem as três vertentes da universidade, ensino, pesquisa e extensão, visando assim a melhoria do ensino de graduação, a formação acadêmica ampla do aluno, a interdisciplinaridade, a atuação coletiva, planejamento e execução, em grupos sob tutoria de um programa diversificado de atividades acadêmicas. O grupo é atualmente composto por alunos regularmente matriculados nos cursos de Design Digital, Engenharia de Computação, Engenharia de Software e Sistemas de Informação, caracterizando a conexão de saberes dentro do campus. Serão selecionados quatro bolsistas, sendo esses de quaisquer um dos seis cursos do campus. O aluno bolsista terá direito a uma bolsa mensal no valor de R$ 400,00. \n" +
            "\n" + "A seleção ocorrerá nos dias 20, 22 e 23 do mesmo mês.",
            buttons:[
                {color:"primary", link:"https://www.quixada.ufc.br/wp-content/uploads/2018/08/Edital-2018.2.pdf", content:"Link para o Edital"},
                {color:"primary", link:"https://goo.gl/rfPsJ", content:"Formulário de Inscrição"},
                {color:"primary", link:"https://goo.gl/JokUL5", content:"Nosso Regulamento"},
            ]
        }
    ]
};

class DocumentsList extends Component {

    loadNews = (news) =>{
        let result = [];
        news.forEach((item,i) =>{
            result.push(
                <NewsModel
                    key={i}
                    title={item.title}
                    date={item.date}
                    content={item.content}
                    buttons={item.buttons}/>
            );
        });

        return result;
    };

    render() {
        return (
            <div style={{padding:20}}>
                {
                    this.loadNews(content.news)
                }
            </div>
        );
  }
}

export default DocumentsList;
