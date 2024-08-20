// "https://jsonplaceholder.typicode.com/posts"

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//    return res.json()
// })
// .then((res)=>{
//    console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

const startApp = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.map((item) => {
      console.log(item.title);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
