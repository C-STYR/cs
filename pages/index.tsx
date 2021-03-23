
import mainImage from '../components/mainImage'
import intro from '../components/intro'
import links from '../components/links'
import { sous, la } from '../components/secret'


export default function Home() {
  return (
    <div style={{marginTop: "50px"}}>
    <div className="itemContainer">
      <div >
        {mainImage}
      </div>
      <div >
        {intro}
      </div>
    </div>
      <div className="linksContainer">
        {links}
      </div>
      <div className="message">
        <div style={{marginTop: "80px"}} className="message">
          {sous}
        </div>
        <div className="message" style={{marginBottom: "60px"}}>
          {la}
        </div>
      </div>
  </div>
  )
}
