import React, { Component } from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../theme/styleConstants.js'

const FooterDiv = styled.div`
  padding 3rem;
  background-color: ${ColorScheme.mainLight};
`;

const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8% 0% 0% 7%;
  @media (max-width: 600px) {
    margin: 0%;
  }
`;

const SocialIcon = styled.li`
  display: inline;
  color: red;
`;

const FAIcon = styled.i`
  &:hover {
    color: ${ColorScheme.third}
    transition: all .3s ease;
    transform: scale(1.1) translateY(-5px);
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterDiv>

        <div className="col-sm-12 col-md-5 col-lg-4 linkList" style={{ textAlign: 'left' }} >
          <ul>
            <a>Name: Arnaud Tiam</a><br />
            <a href="mailto:arnaudtiam50@gmail.com" target="_blank">Email: arnaudtiam50@gmail.com</a><br />
            <a>Phone: +1 (320) 224-3053</a><br />
            <a href="https://github.com/Atiam" target="_blank">https://github.com/Atiam</a><br />
            <a href="https://www.linkedin.com/in/arnaud-duclaire-tiam-t-b1abbbb6/" target="_blank">https://www.linkedin.com/in/arnaud-duclaire-tiam</a><br />
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 linkIcon" style={{ textAlign: 'left' }} >
          <SocialIconList>
            <SocialIcon><a href="arnaudtiam50@gmail.com" target="_blank"><FAIcon className="fa fa-envelope fa-fw fa-2x aaz1" /></a></SocialIcon>
            <SocialIcon><a href="https://www.linkedin.com/in/arnaud-duclaire-tiam-t-b1abbbb6/" target="_blank"><FAIcon className="fa fa-linkedin fa-fw fa-2x aaz1" /></a></SocialIcon>
            <SocialIcon><a href="https://github.com/Atiam" target="_blank"><FAIcon className="fa fa-github fa-fw fa-2x aaz1" /></a></SocialIcon>
             <br />
            <p className="copyRight">© 2024 Arnaud Tiam</p>
          </SocialIconList>
        </div>

      </FooterDiv>
    );
  }
}

export default Footer;