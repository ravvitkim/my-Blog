import { useState } from 'react';
import './App.css'
import Modal from './Modal';

function App() {

  // 데이터 바인딩
  let post = '강남제육맛집';

  const [title, setTitle] = useState([
    '남자코트추천',
    '강남우동맛집',
    '자바스터디'
  ]);


  const [date, setDate] = useState([
    '2025-05-01',
    '2025-06-01',
    '2025-07-01'
  ])

  // 좋아요 누름 숫자를 보관할 스테이트
  const [like, setLike] = useState([0,0,0]);

  // 좋아요 처리 함수
  // function addLikes(){
  //   setLike(like + 1)
  // }


  function changeTitle(){
    const newTitle = [...title] 
    newTitle[0] = '여자코트추천'
    setTitle(newTitle);
  }

  // 모달 페이지가 보이게/안보이게 작업하기위한 스테이트
  const [modal, setModal] = useState(false);


  return (
    <div className='App'>
      <div className='black-bg'>
        React + Vite로 만드는 블로그
      </div>
      {/* <h4 style={{color: 'red', fontSize: '20px'}}>{post}</h4> */}

      {/* 타이틀 정렬하기 */}
      <button onClick={()=>{
        const sortedTitle = [...title].sort()
        setTitle(sortedTitle);
      }}>글 정렬하기</button>


      <div className='list'>
        <div>
        <h4>{title[0]}<span onClick={()=>{
          const newLikes = [...like]
          newLikes[0]++
          setLike(newLikes)
        }}>👍</span>{like[0]}
        {/* 변경단추클릭하면 여자코트추천을 변경 */}
        <button onClick={changeTitle}>변경</button>
        </h4>
        <p>작성일 : {date[0]}</p>
        </div>
        <div>
        <h4>{title[1]}<span onClick={()=>{
          const newLikes = [...like]
          newLikes[1]++
          setLike(newLikes)
        }}>👍</span>{like[1]}</h4>
        <p>작성일 : {date[1]}</p>
        </div>
        <div>
        <h4>{title[2]}<span onClick={()=>{
          const newLikes = [...like]
          newLikes[2]++
          setLike(newLikes)
        }}>👍</span>{like[2]}</h4>
        <p>작성일 : {date[2]}</p>
        </div>
      </div>
      
      {/* 상세페이지 나타날 곳 */}
      {modal ? <Modal />: null }
    </div>
  )
}


export default App
