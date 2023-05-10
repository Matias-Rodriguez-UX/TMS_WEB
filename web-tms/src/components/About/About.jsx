import React from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader/SectionHeader";

const About = () => {
  return (
    <section className="about-section">
      <SectionHeader title="Nosotros" />
      <p>
        Somos un equipo de ingenieros altamente capacitados y especializados en
        el desarrollo y ejecución de proyectos de energía. Nos enorgullece
        ofrecer un servicio integral de asistencia técnica en todas las
        disciplinas del proyecto, desde la concepción y análisis del negocio,
        hasta el soporte en las actividades de construcción y operación.
      </p>
      <br />
      <p>
        Nos comprometemos a brindar soluciones innovadoras y eficientes que
        cumplan con las necesidades específicas de cada proyecto y aseguren su
        éxito a largo plazo. Con nuestro profesionalismo y experiencia, puede
        confiar en que su proyecto estará en buenas manos.
      </p>
    </section>
  );
};

export default About;
