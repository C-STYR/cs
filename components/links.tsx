import Image from 'next/image'

const links: JSX.Element = 
    <div className="linksContainer">
      <div className="imgLink">
        <a href="https://github.com/C-STYR">
          <Image
          src="/github.png"
          height={40}
          width={40}
          alt="the github icon"
          />
        </a>
      </div>
      <div className="imgLink">
        <a href="mailto:colestyron@gmail.com">
          <Image        
          className="imgLink"
          src="/email.png"
          height={40}
          width={40}
          alt="an email icon"
          />
        </a>
      </div>
      <div className="imgLink">
        <a href="https://www.linkedin.com/in/cole-styron/">
          <Image
          className="imgLink"
          src="/linkedin.png"
          height={40}
          width={40}
          alt="the linked in icon"
          />
        </a>
      </div>
     
    </div>

export default links;