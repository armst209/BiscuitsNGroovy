const ReleaseTracklist = ({ release }) => {
  return (
    <ul>
      {release.songs.map((name, order) => {
        return (
          <li key={`li-key-for-${name}-${order + 1}`}>{`${
            order + 1
          }. ${name}`}</li>
        );
      })}
    </ul>
  );
};

export default ReleaseTracklist;
