import { Button } from '@material-ui/core';
const Index = () => (
  <>
    <div className='hero'>
      <h1 className='title'>weSocial</h1>
    </div>

    <Button variant='contained' color='primary'>
      YER Hi Kai! Dashboard will be here upon login
    </Button>

    <Button variant='contained' color='secondary'>
      Check out these dope ass underscore buttons doe
    </Button>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
        text-align: center;
      }
    `}</style>
  </>
);

export default Index;
