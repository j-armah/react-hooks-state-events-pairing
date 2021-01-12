import video from "../data/video.js";
import Details from './Details'
import Comments from './Comments'

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <Details details={ video }/>
      <Comments comments={ video.comments }/>
    </div>
  );
}

export default App;
