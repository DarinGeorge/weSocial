import { Button } from '@material-ui/core';
const Index = () => (
  <>
    <div className='hero'>
      <h1 className='title'>weSocial</h1>
    </div>

    <Button color='secondary'>YER</Button>

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
