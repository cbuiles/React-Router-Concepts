import { useHistory } from "react-router";

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  // console.log(el);

  let { bio, search } = el;
  let avatar = bio.artists[0].strArtistThumb;
  let avatarStyles = {
    width: "auto",
    height: "40px",
  };

  let history = useHistory();

  return (
    <tr>
      <td>
        <img src={avatar} alt={search.artist} style={avatarStyles} />
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={() => history.push(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
