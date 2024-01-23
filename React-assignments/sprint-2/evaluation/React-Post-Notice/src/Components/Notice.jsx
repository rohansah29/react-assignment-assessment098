const Notice = ({message,title,date}) => {

  return (
    <div className="notice-container">
      {/* In below h3 tag, the text content should be title and inside the span tag the text content should be category */}
      <h3 className='notice-title'>{}<span>{title}</span></h3>
       {/* In below p tag, the text content should be message and inside the span tag the text content should be authorname who posted it */}
      <p className='notice-message'><span>- {message}</span></p>
      {/* add date of the post in below p tag */}
      <p className='notice-date'>{date}</p>
    </div>
  )
}

export default Notice;