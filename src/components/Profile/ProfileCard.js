
import React from 'react';
import { Link } from 'react-router-dom';
// * STYLED COMPONENT IMPORT
import styled from 'styled-components';
// * APP COMPONENT IMPORT
import IssuesCard from '../Issues/IssuesCard.js';
import comake from '../images/comake.png';
import style from './StyledComponents';
import Street from '../images/Street.jpeg';



const ProfileCard = (props) => {
console.log(props);
    return (

        <div>  
          <style.Row>
          <img src={`${ props.profile.imageurl }`} alt={`${props.profile.description}`}/>
              <style.Column>
              <h1>Co-Maker: </h1> 
              <h1>{props.profile.username}</h1>
              </style.Column>
                
                {/* <p>{props.profile.imageurl} </p>  */}
                
                  <style.Column>
              <h2> {props.profile.location} </h2>
              <h4>My Upvotes</h4>
              <h5>{props.profile.reputation}</h5>
              <h4> Quote Me: </h4>
                <p>{props.profile.description} </p> 
              <Link to='/ProfileForm'>Edit Profile </Link>
              </style.Column>
          </style.Row>
          
            <div>
              {props.profile.userposts.map(item => {
                return(
                  <>
                  
                <style.IssueCard> 
                  <style.CardLogo src= {comake}></style.CardLogo>
                  <h2>My Posts</h2> 
                  <IssuesCard key={item.userpostid} issue={item}  />
                </style.IssueCard>
                </>
                )
                })}
            </div>
        </div>
    )
}

export default ProfileCard