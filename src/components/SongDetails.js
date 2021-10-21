import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";

const SongDetails = ({ search, bio, lyric }) => {
  // Mientras estos objetos sean nulos , nos evitamos renderizados innecesarios
  if (!lyric || !bio) return null;

  return (
    <>
      {/* En caso de fallar la peticiones a la API de Lyrics renderiza Message */}
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error:  No existe la canción "<em>${search.song}</em>"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error:  No existe el artista "${search.artist}"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
