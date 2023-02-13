

function Post ({index,title,body,...props}) {
   const animate = props.animate
    return (
        <>
          <div key={index} className={`post ${animate ? animate : ''}`} >
               <h3>{title}</h3>
               <p>{body}</p>
          </div>
        </>
    )
}

export default Post
