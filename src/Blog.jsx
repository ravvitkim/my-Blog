function Blog({title,date, like,handleTitle,setLike,setTitle}){
  return(
    <>
    
    <button onClick={()=>{
        const sortedTitle = [...title].sort()
        setTitle(sortedTitle);
      }}>글 정렬하기</button>

      <div className='list'>
        {title.map((item, index)=>{
          return(
            <div key={index}>
              <h4 onClick={()=> handleTitle(index)}>
                {title[index]}
                
                <span onClick={(e) => {
                  {/* 이벤트 버블링 전이 막기 */}
                  e.stopPropagation
                  const newLikes = [...like]
                  newLikes[index]++
                  setLike(newLikes)
                }}>👍</span>{like[index]}

              </h4>
              <p>작성일 : {date[index]}</p>
            </div>
          )
        })}
      </div>
      </>
  );
}
export default Blog;