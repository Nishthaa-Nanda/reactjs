
function Video({verified,channel,title,views,time}){
   return(
      <>
      <div>Video</div>
      <img src="logo192.png" alt="logo" />
       <div>{channel}{verified && '✅'}</div>
      <div>{title}</div>
      <div>{views}</div>
      <div>{time}</div>
      </>
   );
}
export default Video ;   