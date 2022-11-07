import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);

  li{
    background-color:var(--backgroundColor);
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  span{
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: #333
  }
  .pending {
    background: #fcefc7;
    color: #e9b949;
    width: 100px;
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
    width: 100px;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
    width: 100px;
  }
  .company{
    color: gray;
    display: inline;
    font-style: normal;
  }
  .postedBy{
    font-size:18px;
    font-weight: bold;
  }
  .box {

    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
`

export default Wrapper