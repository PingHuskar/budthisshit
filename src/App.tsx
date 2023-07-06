import './App.css'
import Data from './Data'
import onab from '../public/onab.png'

interface VID {
  vid: string,
  title: string,
  rules: string[],
}
function App() {

  return (
    <>
    
      {Data && Data.map((V: VID,index: number) => {
        if (!V.vid) return
        return <div key={index}>
          <h2>{V.title}</h2>
          <div className="img" style={{display: `flex`}}>
            <img src={`https://img.youtube.com/vi/${V.vid}/maxresdefault.jpg`} alt="" />
            <div className="shields" style={{display: `flex`,flexFlow: `column`}}>
              <img src={`https://img.shields.io/youtube/views/${V.vid}?style=for-the-badge&logo=youtube&label=VIEWS`} />
              <img src={`https://img.shields.io/youtube/comments/${V.vid}?style=for-the-badge&logo=youtube&label=COMMENTS`} />
              <img src={`https://img.shields.io/youtube/likes/${V.vid}?style=for-the-badge&logo=youtube&label=LIKES`} />
            </div>
          </div>
          <ol>
            {V.rules.map((rule: string, id: number) => {
              return <li key={id}>{rule}</li>
            })}
          </ol>
        </div>
      })}
      <hr />
      <h2>เว็บนี้ไม่น่าจะถูกใจของ</h2>
      <a href={`https://www.onab.go.th/th/page/item/index/id/1`} target="_blank" rel="noopener noreferrer">
        <img src={onab} alt="สำนักpuss" height={`69xxx`} />
      </a>
    </>
  )
}

export default App
