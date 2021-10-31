import { useParams } from "react-router";
import SongDetails from "../components/SongDetails";

const SongPage = ({ mySongs }) => {
  let { id } = useParams();

  console.log(mySongs);

  let currenSong = mySongs[id];

  let { search, lyric, bio } = currenSong;

  return <SongDetails search={search} lyric={lyric} bio={bio} />;
  // return <h2>Paginas d</h2>;
};

export default SongPage;
