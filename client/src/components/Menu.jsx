import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
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
  return (
    <div className='menu'>
      <h2>Other posts you may like</h2>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <Link to={`/post/${post.id}`}>
            <img src={post.image} alt="" />
            <h3>{post.title}</h3>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Menu;
