import "./UserProfileCard.css";
import "bootstrap/dist/css/bootstrap.css";

function UserProfileCard(props) {
  const update = () => {
    alert("you are now following Rebecca ");
  };
  return (
    <div class="card card_profile ">
      <img src="/profile.jpg" alt="profile-picture" className="card-img-top" />
      <div class="card-body">
        <h2>Name: {props.name}</h2>
        <h4>Age: {props.age}</h4>
        <h4>Location: {props.location}</h4>
        <a href="#" class="btn btn-primary" onClick={update}>
          Follow
        </a>
      </div>
    </div>
  );
}

export default UserProfileCard;
