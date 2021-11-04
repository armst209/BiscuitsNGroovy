const ReleaseTracklistPlayer = ({ release, setCurrentMusicIndex }) => {
  return (
    <ul>
      {release.songs.map((element, order) => {
        return (
          <li
            key={`${element.title}-${element.id}`}
            onClick={() => {
              setCurrentMusicIndex(release.songs.indexOf(element));
            }}
          >
            {`${order + 1}. ${element.title}`}
          </li>
        );
      })}
    </ul>
  );
};

export default ReleaseTracklistPlayer;
