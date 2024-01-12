import React from 'react'
import './DescripcionEventoDetalles.css';
var content
function DescripcionEventoDetalles({param}) {
    if(param===1){
        content=<p className='DescripcionEventoDetalles'>Este evento es una celebración interactiva de las ciencias, con un enfoque especial en la astronomía y la exploración espacial. Los estudiantes preparan y presentan proyectos individuales o en equipo, que pueden incluir modelos de sistemas solares, cohetes de papel, experimentos relacionados con la física y la química del espacio, y paneles informativos sobre teorías y descubrimientos científicos. Además de las exposiciones de los estudiantes, el evento puede contar con la participación de científicos invitados que realicen charlas y talleres, observaciones astronómicas nocturnas con telescopios, y concursos de conocimientos científicos. El objetivo es fomentar el interés y el conocimiento en las ciencias, proporcionando un espacio para que los estudiantes exploren y compartan sus pasiones por el aprendizaje científico.</p>;
    }
    if(param===2){
        content=<p className='DescripcionEventoDetalles'>Este evento es una vibrante celebración de la diversidad cultural de la comunidad escolar. Los estudiantes y profesores colaboran para crear un ambiente festivo donde cada clase o grupo representa una cultura o país diferente. Esto puede incluir stands decorados con artefactos, comidas típicas, trajes tradicionales, y música característica de cada cultura. Los estudiantes se involucran activamente en la organización y presentación de danzas folclóricas, canciones, y obras de teatro que reflejen la riqueza cultural de la nación que representan. Además, pueden haber actividades como talleres de arte, clases de cocina internacional, y charlas sobre historia y costumbres de diferentes pueblos. El Carnaval de las Culturas es una oportunidad para educar y celebrar la diversidad, promoviendo la inclusión y el respeto mutuo entre los estudiantes.</p>;
    }
    if(param===3){
      content=<p className='DescripcionEventoDetalles'>Este evento es una competencia académica multifacética diseñada para desafiar y estimular la mente de los estudiantes. Se organiza en varias rondas, cada una enfocada en diferentes habilidades intelectuales. Por ejemplo, puede haber un torneo de ajedrez donde los estudiantes pongan a prueba su habilidad estratégica y toma de decisiones, seguido de olimpiadas de matemáticas con problemas complejos para resolver individualmente o en equipo. Además, se pueden incluir concursos de debate, donde los estudiantes argumentan sobre temas actuales o históricos, desarrollando habilidades de retórica y pensamiento crítico. También podría haber una sección de rompecabezas lógicos o acertijos, que promuevan el pensamiento lateral. Este evento no solo celebra el conocimiento y la agudeza mental, sino que también fomenta habilidades como el trabajo en equipo, la comunicación efectiva, y la capacidad de razonar bajo presión.</p>;
    }

    if(param===4){
      content=<p className='DescripcionEventoDetalles'>Estudiantes interesados en ciencia, tecnología, ingeniería y matemáticas (STEM).</p>;
    }
    if(param===5){
        content=<p className='DescripcionEventoDetalles'>Todo el alumnado, fomentando la inclusión y el respeto por diversas culturas.</p>;
    }
    if(param===6){
      content=<p className='DescripcionEventoDetalles'>Estudiantes interesados en mejorar sus habilidades analíticas, de debate y resolución de problemas.</p>;
    }
  return (
    content
  )
}

export {DescripcionEventoDetalles} 