import styled from "styled-components";

const FooterContainer = styled.div`
  height: 4rem;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #666;
  font-size: 12px;
  opacity: .7;
  @media (max-width: 992px) {
    position: relative
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <span>
                Made with <i style={{ color: 'red' }}>♥</i> by <a href="https://github.com/dunkman32/students" target="_blank" rel="noreferrer">
                    noZZa, primulax &#38; lasha
                </a>
            </span>
        </FooterContainer>
    )
}


export default Footer
