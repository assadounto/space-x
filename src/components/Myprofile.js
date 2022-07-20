import { useSelector } from "react-redux/es/exports";

const Myprofile = () => {
  const user = useSelector((state) => state.rockets);
  const myprofile=user.items.filter((item)=>item.reserved===true);
  return (
    <div className="myprofile">
        <h2>My Rockets</h2>
    { myprofile.map(({
        rocket_name, id
      }) => (
        <div className="myprofile-cont" key={id}>
    
          <div className='profile-name'>{rocket_name}</div>
        </div>  
      ))}
       </div>
  );
   
}

export default Myprofile;