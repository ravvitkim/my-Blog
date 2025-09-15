import { useState } from 'react';
import './App.css'
import Modal from './Modal';
import Title from './Title';
import Blog from './Blog';


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

  const [details, setDetails] = useState([
    '심플한 디자인의 코트로 가을에 잘 어울림',
    '강남 우동의 찐 맛집! 먹어보진않았음',
    '자바 스터디는 말 만하고 못함'
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

  //직전 선택한 인덱스를 저장할 스테이트
  const [currentIndex, setCurrentIndex] =useState(null);

  // 제목 클릭시 모달 보이기
  function handleTitle(index){
    // 조건 : 같은 제목을 클릭하면 나타나고 사라짐
    // 다른 제목을 클릭하면 그냥 보여야 하고.. 
    if(! modal){
      //1. 현재 모달이 닫혀있으면 연다.
      setModal(true);
      setCurrentIndex(index);
    } else if(currentIndex == index){
      //2.같은 타이틀이 선택된 경우
      setModal(false);
    }else{
      setCurrentIndex(index);
    }
  }
  return (
    <div className='App'>
      <Title />
      {/* 타이틀 정렬하기 */}
      <Blog
      title={title} date={date} details={details} like={like} currentIndex={currentIndex} handleTitle={handleTitle}
      setTitle={setTitle} setLike={setLike}
      />

      {/* 상세페이지 나타날 곳 */}
      {modal ? <Modal color="lightblue" 
        title={title} date={date} details={details}
        currentIndex={currentIndex}/>: null }

    </div>
  )
}


export default App
