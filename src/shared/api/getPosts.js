import { API_POSTS } from "./constans";
export async function getData() {
   try {
      const response = await fetch(API_POSTS);
      const data = await response.json();
      const result = onModifyPost(data);
      return result;
   } catch (error) {
      throw new Error(error);
   }
}

function onModifyPost(data) {
  const posts = data.map((post) => {
    return {
        title: post.title,
        body: post.body
    }
  })
  return posts
}
