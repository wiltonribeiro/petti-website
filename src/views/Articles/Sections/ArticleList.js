import React, { Component } from 'react';
import {Card, CardContent, Typography, CardActions, Button} from "@material-ui/core";
import ecopet  from "../../../docs/articles/EcoPet_ Promovendo Ações Sustentáveis na UFC Quixadá.pdf"
import oficina  from "../../../docs/articles/Oficinas do PET-TI.pdf"
import ambiente  from "../../../docs/articles/Um Ambiente de Divulgação, Comunicação e Educação relacionados à área de Tecnologia da Informação.pdf"
import mapeamento  from "../../../docs/articles/Um Mapeamento Sistemático Sobre Avaliação de Qualidade de Ambientes de Nuvens Computacionais Apoiados por SDN e NFV .pdf"
import cbsoft  from "../../../docs/articles/VIII Congresso Brasileiro de Software NO TAMPLATE.pdf"

const styles = {
    card: {
        minWidth: 275,
        boxShadow: " 0px 0px 5px 3px rgba(237,237,237,1)"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    event: {
        marginBottom: 16,
        fontSize: 14,
    },

    title:{
        fontSize: 18,
        textAlign:'justify',
        marginBottom: 10,
    },
    pos: {
        marginBottom: 5,
    },
};


const articles = [
    {
        title:"Um Mapeamento Sistemático Sobre Avaliação de Qualidade de Ambientes de Nuvens Computacionais Apoiados por SDN e NFV",
        authors:"Tiago da Silva Nascimento, Carla Ilane Moreira Bezerra, Emanuel Ferreira Coutinho",
        event:"Encontros Universitarios 2017",
        document:mapeamento,
    },
    {
        title:"Promovendo Oficinas de TI na UFC Quixadá",
        authors:"Raul de Araújo Lima, Abilio Castro e Silva, Natanael da Silva Araújo, Paulo Ricardo da Silva Lopes, Carla Ilane Moreira Bezerra",
        event:"Encontros Universitarios 2017",
        document:oficina,
    },
    {
        title:"Proposta de um Ambiente de Divulgação, Comunicação e Educação relacionados à área de Tecnologia da Informação",
        authors:"Carla Ilane Moreira Bezerra, Wilton Ribeiro Crispim Neto",
        event:"Encontros Universitarios 2017",
        document:ambiente,
    },
    {
        title:"EcoPet: Promovendo Ações Sustentáveis na UFC Quixadá",
        authors:"Antonio Lucas da Silva Nascimento, Rayanne Queiroz dos Santos, Carla Ilane Moreira Bezerra",
        event:"Encontros Universitarios 2017",
        document:ecopet,
    },
    {
        title:"Relato de Experiência sobre o VIII Congresso Brasileiro de Software (CBSoft 2017)",
        authors:"Carla Ilane Moreira Bezerra, Francisco Igor da Silva Lima, Júlio Serafim Martins, Tiago da Silva Nascimento, Wilton Ribeiro Crispim Neto",
        event:"Encontros Universitarios 2017",
        document:cbsoft,
    },

];

class ArticleList extends Component {

    checkNewSection = () =>{

        let arrayNews = this.loadArticles();
        let content = [];

        for (let i = 0; i<arrayNews.length; i=i+3){
            content.push(
                <div key={i} className="w3-row-padding">
                    {arrayNews[i]}
                    {arrayNews[i+1]}
                    {arrayNews[i+2]}
                </div>
            )
        }

        return content;
    };

    loadArticles = () =>{
      let content = [];
      articles.forEach((item, i) =>{
          content.push(
              <div className="w3-third" style={{marginTop:20}} key={i}>
                  <Card style={styles.card}>
                      <CardContent>
                          <Typography style={styles.event} color="textSecondary">
                              {item.event}
                          </Typography>
                          <Typography style={styles.title} variant="title" component="h4">
                              {item.title}
                          </Typography>
                          <Typography style={styles.pos} color="textSecondary">
                              {item.authors}
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button onClick={() => window.location.href = item.document} style={{ flex: 1 , marginBottom:10}} variant="outlined" color="secondary" size="small">VER MAIS</Button>
                      </CardActions>
                  </Card>
              </div>
          )
      });

      return content;
    };

    render() {
        return (
            <div style={{padding:20}}>
                {this.checkNewSection()}
            </div>
        );
  }
}

export default ArticleList;
