import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://ranflix.vercel.app/static/media/Logo.4064dcc1.png" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por Roney "Ranfis" Fernandes durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
