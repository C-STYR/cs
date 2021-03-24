import Head from 'next/head'

const intro: JSX.Element = 
  <div className="intro">
    <h1 style={{fontSize: "28px"}}>Hi there.</h1>
    <p>
      I'm <span style={{color: "#F6E183"}}>Cole</span>. I write code, 
      mainly <span style={{color: "#D18DF0"}}>JavaScript </span> 
      and <span style={{color: "#BDE666"}}>Python</span>, for web applications.
    </p>
    <p>
      I work at <a href="https://reactime.io/" style={{color: "#FF555D"}}>Reactime.io</a>. 
      You can see samples of code I've written <a href="https://github.com/open-source-labs/reactime/blob/master/src/app/components/ComponentMap.tsx" 
      target="_blank" rel="noopener noreferrer">here</a>,   
      <a href="https://github.com/open-source-labs/reactime/blob/master/src/app/components/WebMetrics.tsx" 
      target="_blank" rel="noopener noreferrer"> here </a>
      and <a href="https://github.com/Quiz-Whiz/Quiz-Whiz-App/blob/main/server/game.js" 
      target="_blank" rel="noopener noreferrer">here</a> and tests I've written <a 
      href="https://github.com/HelpDesk-Technologies/HelpDesk-Pro/blob/main/__tests__/supertest.js" 
      target="_blank" rel="noopener noreferrer">here</a>.
    </p>
    <p>
      Before becoming a software engineer, I worked as 
      a <span style={{color: "#F6E183"}}>product manager</span> and
       as a subsurface wellbore analyst in the Arctic. 
    </p>
    <p>
      In my spare time, I build <a 
        href="https://www.flickr.com/photos/colestyron/albums/72157718666104172"
        target="_blank" rel="noopener noreferrer"
        style={{color: "#77A7FF"}}>wooden boats</a> and <a 
        href="https://www.flickr.com/photos/colestyron/albums/72157718672994412"
        style={{color: "#D18DF0"}}
        target="_blank" rel="noopener noreferrer"
        >other things</a>. 
        I like long distance running 
      and <a href="https://www.flickr.com/photos/colestyron/albums/72157718663723918" 
      target="_blank" rel="noopener noreferrer"
      >skiing </a>depending on the season. 
    </p>
  </div>

export default intro;