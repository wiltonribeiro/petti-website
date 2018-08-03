import React, { Component } from 'react';

import ecopet from '../../../images/activities/ecopet.png'
import infogirl from '../../../images/activities/infogirl.png'
import gamenight from '../../../images/activities/gn.png'
import flisol from '../../../images/activities/flisol.png'
import recepcao from '../../../images/activities/recepção.png'
import programacao from '../../../images/activities/programacao.png'
import microcontroladores from '../../../images/activities/microcontroladores.png'
import englishclub from '../../../images/activities/englishclube.png'
import seminarios from '../../../images/activities/seminarios2.png'
import obi from '../../../images/activities/programacao.png'

import ModalText from '../../../components/ModalText'


const styles = {
    button:{
        position:"absolute",
        top:"50%",left:"50%",
        transform:"translate(-50%,-50%)",
        msTransform:"translate(-50%,-50%)",
        whiteSpace:"nowrap"
    }
};

const contentActivity = {
    ecopet:{
        image: ecopet,
        title:"EcoPET",
        text:"O EcoPET é uma atividade do Programa de Educação Tutorial - Tecnologia da Informação do Campus Quixadá da Universidade Federal do Ceará (UFC- Campus Quixadá) que tem como objetivo conscientizar os alunos e servidores do respectivo campus sobre a importância da preservação ambiental. A UFC - Campus Quixadá é conhecida por ser um campus temático de Tecnologia da Informação, com isso, além da conscientização ambiental comum, o descarte de lixo eletrônico está presente no cotidiano de todos os envolvidos com o campus."
    },
    infogirl:{
        image:infogirl,
        title:"InfoGirl",
        text:"Atualmente em sua quarta edição, é organizado juntamente com o Centro acadêmico de Ciência da Computação e mantendo o objetivo de atrair mulheres para a computação, é apresentado em um ambiente amigável e confortável, mostrando como é ser uma profissional de Tecnologia da Informação para as garotas, contendo o diferencial de buscar meninas de cidades fora do sertão central."
    },
    gamenight:{
        image:gamenight,
        title:"GameNight",
        text:"A Game Night, é um evento que traz a proposta de reunir e aproximar os alunos do campus por meio de uma noite inteira com jogos digitais e de tabuleiros. Em um campus de tecnologia onde existem várias pessoas desenvolvendo jogos, um ambiente para que elas possam expor seus trabalhos é essencial. Além de promover a interação, o propósito da Game Night também é promover competições acadêmicas, como o desenvolvimento de jogos digitais e divulgação de ações de pesquisa e extensão do campus relacionados à jogos."
    },
    flisol:{
        image:flisol,
        title:"FLISol - Festival Latino Americano de Instalação de Software Livre",
        text:"Essa atividade tem como propósito a realização do Evento Flisol, um evento Latino-Americano de Software livre que possui edições em várias cidades da América Latina. Como motivação para a realização do evento tem-se a Criação de Networking entre alunos da UFC - Quixadá e outros estudantes e entusiastas em Software Livre do Sertão Central. Além disso, difundir a filosofia do Software Livre e proporcionar diversos momentos de aprendizado aos participantes por meio de oficinas, palestras e diversas outras atividades que ocorrem dentro do evento. Além de apresentar e instalar Softwares e Sistemas Operacionais Livres nos computadores dos participantes.\n"
    },
    recepcao:{
        image:recepcao,
        title:"Recepção e orientação aos alunos ingressantes nos cursos",
        text:"A maioria dos alunos ingressantes nos cursos de graduação do Campus UFC Quixadá são provenientes de outras localidades, e estão cursando sua primeira graduação. Dessa forma, esses alunos sentem dificuldade de adaptação ao curso e a cidade de Quixadá, o que pode acarretar a desistência do curso. A desmotivação por não ter apoio ou ajuda de alguém instruindo orientações básicas no início do curso também é um fator da grande evasão. Visando atacar essa problemática, o PET-TI planejou a recepção e orientação dos alunos ingressantes nos cursos do Campus UFC Quixadá realizada pelos alunos do PET a fim de minimizar a evasão nos cursos."
    },
    programacao:{
        image:programacao,
        title:"Ensino de Programação em Escolas Públicas",
        text:"Segundo Steve Jobs, todos deveriam aprender a programar um computador, pois isso ensina a pensar. Estimular o crescimento de uma sociedade futura mais capacitada no que diz respeito à “arte de pensar” é uma problemática que queremos atacar através do ensino de programação. Ainda há uma carência do ensino de programação no ensino fundamental e médio, especialmente em escolas públicas. Nesse contexto, o objetivo dessa atividade é iniciar o ensino de programação no ensino médio de escolas públicas.\n"
    },
    microcontroladores:{
        image:microcontroladores,
        title:"Ensino de microcontroladores na escola profissional de Quixadá",
        text:"O entusiasmo pela robótica e automação leva vários jovens a se aventurar na construção de projetos que envolvem hardware e software. Os microcontroladores são a “espinha dorsal” de projetos de robótica e automação. Tais dispositivos controlam e gerenciam os demais componentes do sistema. Nesse contexto, conhecimentos em eletrônica e programação, tornam-se fundamentais para o jovem desenvolvedor. A atividade tem como objetivo introduzir os conceitos de microcontroladores aos alunos de informática da EEEP Maria Cavalcante Costa, escola profissional de Quixadá, por meio de aulas exploratórias e desenvolvimento de projetos. A escolha da escola profissional para desenvolver a atividades foi devido aos alunos voltados para o curso de informática terem noção de lógica de programação.\n"
    },
    englishclub:{
        image:englishclub,
        title:"Grupo de estudo focado no aprendizado da língua inglesa",
        text:"Os cursos de graduação de tecnologia da informação exigem do aluno uma fluência de escrita, leitura e fala da língua inglesa. O Campus UFC Quixadá é formado por seis cursos de graduação de tecnologia da informação, e embora esses cursos possuam nos seus currículos disciplinas de inglês técnico, não há oferta de um curso completo de inglês na universidade. Além disso, muitos alunos apresentam uma deficiência técnica na língua inglesa. Dessa forma, a proposta dessa atividade é a criação de um grupo de estudos em inglês para suprir essas deficiências.\n"
    },
    seminarios:{
        image:seminarios,
        title:"Seminários de Pesquisa",
        text:"Um dos pilares do PET é à pesquisa. Visando acompanhar as atividades individuais e coletivas do grupo PET-TI nós planejamos a realização de seminários de pesquisas semanais. Além disso, cada membro do PET irá elaborar um projeto de pesquisa que deverá ser atualizado semestralmente. Cada bolsista realizará pesquisas nas áreas de computação de seu interesse, visando a integração dos seis cursos de tecnologia da informação que compõe o PET-TI.\n"
    },
    obi:{
        image:obi,
        title:"Apoiando a maratona de programação no Campus UFC Quixadá",
        text:"O campus da UFC em Quixadá e seus seis cursos voltados para a área da Tecnologia da Informação (TI) tem um potencial enorme em revelar talentos que podem ir bem em futuras competições de programação. Entretanto, apesar de bons resultados como, por exemplo, o terceiro lugar de uma equipe do campus na fase regional de 2017 da maratona de programação, o campus ainda não atingiu o objetivo de conseguir que uma equipe chegue até a fase nacional. Além disso, a organização da Meia Maratona de Programação, um evento preparatório do campus, acaba atualmente sobrecarregando os responsáveis pelo Grupo de Estudo para a Maratona de Programação (GEMP), o que dificulta sua divulgação e faz com que poucas equipes participem. Outro evento importante nesse âmbito e que poderia ser mais divulgado no campus para os alunos do primeiro ano de graduação é a Olimpíada Brasileira de Informática (OBI), onde a quantidade de alunos participantes do campus é considerado mínima. Nesse sentido, observa-se que há a necessidade de apoiar o GEMP em suas atividades para que novos alunos possam aderir ao projeto e se preparar para buscar bons resultados nas próximas competições relacionadas a programação.\n"
    },
};

class ActivityList extends Component {

    state ={
        modal:{
            open:false,
            title: "",
            text: ""
        }
    };

    handleOpen = (content) => {
        this.setState({ modal:{ open: true, title: content.title, text: content.text }});
    };

    loadActivities = () =>{
        let content = [];
        const keys = Object.keys(contentActivity);

        keys.forEach((key, i)=> {
            content.push(
                <div className="w3-third" key={i} style={{position:"relative", textAlign:"center"}} onClick={() => this.handleOpen(contentActivity[key])}>
                    <img src={contentActivity[key].image} className="blurImage" alt={contentActivity[key].title} style={{width:"80%"}}/>
                    <div style={styles.button} className="buttonImage">VER MAIS</div>
                </div>
            );
        });

        return content;
    };

  render() {
    return (
        <div>
            <ModalText title={this.state.modal.title} text={this.state.modal.text} open={this.state.modal.open} />
            <div className="w3-row-padding" style={{padding:10}}>
                {this.loadActivities()}
            </div>
        </div>
    );
  }
}

export default ActivityList;
