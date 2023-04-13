import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://picsum.photos/id/48/200/300' alt="" />
        <div className='user'>
          <img src='https://picsum.photos/id/48/200/300' alt="" />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Test Title For First Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis porta vestibulum. Sed pellentesque metus massa, non cursus sapien aliquam quis. Sed id nunc nisl. Vivamus non nisi vel orci malesuada auctor. Nulla posuere vulputate posuere. Nullam rutrum bibendum turpis sit amet dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vitae sapien pulvinar, varius neque id, volutpat ante. Curabitur eleifend erat eu neque maximus, non varius tellus pellentesque. Phasellus eu diam tempus arcu malesuada ornare vitae at mi. Vivamus ornare nibh velit. In justo mi, interdum ac ullamcorper quis, commodo eget nisi. Phasellus imperdiet neque non faucibus tempor. Etiam cursus tellus nec sem sodales, ut feugiat massa aliquet. Duis vel elit metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        </p>
        <p>
          Fusce fermentum lorem nec varius condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ut porttitor lectus, id sollicitudin tortor. Aliquam metus nibh, mattis suscipit dui et, tempor interdum turpis. Nulla mattis tincidunt sapien. Morbi maximus pharetra gravida. Pellentesque ac tortor nec nisi congue facilisis sed eu nisl. Etiam non eros porttitor, tincidunt tortor vel, pulvinar orci. Maecenas vitae mauris lobortis, faucibus purus commodo, hendrerit nunc. Vestibulum efficitur iaculis enim, vel ornare magna tempor id. Quisque euismod, libero sit amet vestibulum venenatis, felis purus varius eros, a sollicitudin metus massa nec mi. Morbi ac libero eget dui dapibus tincidunt sed a arcu. Morbi et rutrum turpis, id scelerisque libero. 
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single;
