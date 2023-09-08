/** @jsx h */
import { h } from "preact";
import { toCss } from "to-css";
import { HeadTag } from "../components/HeadTag.tsx";

export default function Home() {

  const styles = {
    tag: {
      backgroundColor: '#D4C5A8',
      fontSize: '14px',
      display: 'inline-block',
      padding: '5px 8px',
      background: 'linear-gradient(90deg,#d49065,#fec99b)',
      color: '#101010',
      borderRadius: '1px',
    },
    header: {
      marginTop: '100px',
      fontSize: '32px',
      padding: '20px 0',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      alignItems: 'center'
    },
    whoami: {
      fontWeight: 'bold',
      backgroundImage: 'linear-gradient(45deg, #ebedba, #e5ad73)',
      backgroundSize: '100%',
      backgroundRepeat: 'repeat',
      backgroundClip: 'text',
      textFillColor: 'transparent',
    },
    desc: {
      padding: '25px 0',
      color: '#95999c',
      paddingTop: '0',
    },
    work: {
      padding: '25px 0',
      textAlign: 'center',
    },
    githubChart: {
      width: '100%',
      opacity: '.6',
    },
    promoHeader: {
      color: '#95999c',
      fontSize: '14px',
      marginBottom: '10px'
    }
  };

  return (
    <div>
      <HeadTag></HeadTag>

      <div className={'menu'}>
        <div className='container'>
          <img src='brandon-logo.svg' />
          <div><a href="mailto:brandoncapecci@gmail.com">Contact</a></div>
        </div>
      </div>

      <header style={styles.header}>
        <div className='container'>
          <p style={toCss(styles.whoami)}>I&apos;m Brandon &mdash; an interdisciplinary designer &amp; developer. I help enterprises act more like startups and grow startups into enterprises.</p>
        </div>
      </header>

      <div style={toCss(styles.desc)}>
        <div className='container'>
          <p className='mt-0 mb-2'>I work directly with founders and product leadership teams to build greenfield software or redesign existing products.</p>
          <p className='mb-2'>I play a unique combination of project manager, designer, and engineer to translate ideas into a polished deliverable.</p>
          <p>A typical engagement is 6 months. From Figma design systems to React components, your systems will be architectually sound to scale after the engagement ends.</p>
        </div>
      </div>

      <div className='container'>
        <div className='promo-info'>
          <div>
            <div style={styles.promoHeader}>Clients Raised</div>
            <h2 className='totalRaised'>$150mm+</h2>
            <p>since 2020</p>
          </div>
          <div>
            <div style={styles.promoHeader}>Github Contributions</div>
            <img style={styles.githubChart} src="https://ghchart.rshah.org/e5ad73/brandoncapecci" alt="Name Your Github chart"/>
          </div>
        </div>
      </div>

      <div style={toCss(styles.work)}>
        <div className='container'>
          <h2>Vizit</h2>
          <h4>Using Award-winning AI to Win the Race for Consumer Attention</h4>
          <div className='imgGrid'>
            <div><img src='work/vizit1.png'></img></div>
            <div><img src='work/vizit2.png'></img></div>
          </div>
        </div>
      </div>

      <div style={toCss(styles.work)}>
        <div className='container'>
          <h2>Rabbithole</h2>
          <h4>Growing On-Chain Protocols by Rewarding Network Participation</h4>
          <div className='imgGrid'>
            <div><img src='work/rabbithole1.png'></img></div>
            <div><img src='work/rabbithole2.png'></img></div>
          </div>
        </div>
      </div>

      <div className={toCss(styles.work)}>
        <div className='container'>
          <h2>Stavvy</h2>
          <h4>Bringing Real Estate and Consumer Lending into the 21st Century</h4>
          <div className='imgGridTwo'>
            <div><img src='work/stavvy1.png'></img></div>
            <div><img src='work/stavvy2.png'></img></div>
            <div><img src='work/stavvy3.png'></img></div>
            <div><img src='work/stavvy4.png'></img></div>
          </div>
        </div>
      </div>

      <div style={toCss(styles.work)}>
        <div className='container'>
          <h2>Eastern Bank</h2>
          <h4>Transforming the Digital Banking Experience for a 200 Year Old Bank</h4>
          <div className='imgGrid'>
            <div><img src='work/eastern1.png'></img></div>
            <div><img src='work/eastern2.png'></img></div>
          </div>
        </div>
      </div>

      <div className='mb-1' style={toCss(styles.work)}>
        <div className='container'>
          <h2>Acquisitions</h2>
          <h4 className='mb-1'>Linus <span>acquired by Celsius Network</span></h4>
          <h4 className='mb-1'>Matter <span>acquired by Junction3D</span></h4>
          <h4 className='mb-1'>Qcentive <span>acquired by Apervita</span></h4>
        </div>
      </div>     
    </div>
  );
}
