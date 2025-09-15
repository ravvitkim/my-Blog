//하나의 컴포넌트(조각)
function Modal({color, title, date, details, currentIndex}){
  return(
      <div className='modal' style={{backgroundColor:color}}>
        <h4>{title[currentIndex]}</h4>
        <p>{date[currentIndex]}</p>
        <p>{details[currentIndex]}</p>
      </div>
  )
}

export default Modal;