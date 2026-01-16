import axios from 'axios';
async function getEdgePosts(){
  try {
    const response = await
axios.get('https://jsonplaceholder.typicode.com/posts');
    const users = response.data;
    
  }
}
export function getEdgePosts() {}
