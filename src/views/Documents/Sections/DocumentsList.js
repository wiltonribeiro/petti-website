import React, { Component } from 'react';
import NewsModel from "../../../components/NewsModel";


const content = {
    news: [
        {
            title:"Edital para Seleção de Novos Bolsistas 2018.2",
            date:"05 de agosto de 2018",
            content:"algo",
            buttons:[
                {color:"primary", link:"", content:"Download do Edital"},
                {color:"primary", link:"", content:"Link para Inscrição"}
            ]
        },
        {
            title:"Edital para Seleção de Novos Bolsistas 2017.2",
            date:"20 de julho de 2017",
            content:"O PET TI – Conexão de Saberes é um programa desenvolvido por um grupo de alunos e uma professora tutora. O objetivo do grupo é desenvolver atividades que abrangem as três vertentes da universidade, ensino, pesquisa e extensão, visando assim a melhoria do ensino de graduação, a formação acadêmica ampla do aluno, a interdisciplinaridade, a atuação coletiva, planejamento e execução, em grupos sob tutoria de um programa diversificado de atividades acadêmicas. O grupo é composto por alunos regularmente matriculados nos cursos de Sistemas de Informação, Engenharia de Software, Ciência da Computação, Redes de Computadores, Design Digital e Engenharia de Computação, caracterizando a conexão de saberes dentro do campus. Serão selecionados três bolsistas, sendo esses de quaisquer um dos seis cursos do campus. O aluno bolsista terá direito a uma bolsa mensal no valor de R$ 400,00. A seleção ocorrerá nos dias 16, 17 e 18 de agosto, em duas fases, entrevista e apresentação oral.",
            buttons:[
                {color:"primary", link:"", content:"Download do Edital"},
                {color:"primary", link:"", content:"Link para Inscrição"}
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
