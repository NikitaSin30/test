import React from "react"
import Post from "../widjets/Post"
import { getData } from "../shared/api/getPosts"


function PostsPage () {
    const [posts,setPosts] = React.useState([])
    const quantityShowPosts = 20;
    const animate = 'animate';
    let [end, setEnd] = React.useState(quantityShowPosts);


     React.useEffect(() => {
        document.addEventListener('scroll', scrolPage);
        return () => {
           document.removeEventListener('scroll', scrolPage);
        };
     });

    React.useEffect(() => {
     setModifinedPosts();
    },[])

   async function setModifinedPosts() {
      try {
         const result = await getData();
         setPosts(result);
      } catch (error) {
        return new Error(error)
      }
   }

     function scrolPage(e) {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
           addPostOnPage()
        }
     }
       function addPostOnPage() {
          setEnd(prev=>prev+=1);
       }

    return (
       <>
          <div className='container'>
             <div className='posts'>
                {posts.slice(0, 20).map((post, index) => {
                   return <Post key={index} title={post.title} body={post.body} />;
                })}
                {posts.slice(21, end).map((post, index) => {
                   return <Post animate={animate} key={index} title={post.title} body={post.body} />;
                })}
             </div>
          </div>
       </>
    );
}


export default PostsPage
