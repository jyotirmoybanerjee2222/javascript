import profilePic from './assets/profile.jpg'
function Card(){
     return(
        <div className ="card" >
               <img className="card-image" src={profilePic} alt="profile Picture"></img>
               <h2 className='card-title'>Jyotirmoy Banerjee</h2>
               <p  claasName="class-text">I am student</p>

        </div>

     );
}
export default Card