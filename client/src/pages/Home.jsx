import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;
  // console.log(cat);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  /*
  // dummy posts
  const posts = [
    {
      id: 1,
      title: "Duis bibendum.",
      desc: "In est risus, auctor sed, tristique in, tempus sit amet, sem. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
      image: "https://picsum.photos/id/32/200/300"
    },
    {
      id: 2,
      title: "Vivamus tortor. Duis mattis egestas metus.",
      desc: "Integer ac neque. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
      image: "https://picsum.photos/id/42/200/300"
    },
    {
      id: 3,
      title: "In blandit ultrices enim.",
      desc: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
      image: "https://picsum.photos/id/48/200/300"
    }
  ]
  */
  
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  }

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <Link to={`/post/${post.id}`}>
                <img src={post.image} alt="" />
              </Link>
            </div>
            <div className='content'>
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{ getText(post.description) }</p>
              <Link to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
