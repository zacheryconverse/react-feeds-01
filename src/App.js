// import React, { useEffect } from "react";
import {
  StreamApp,
  NotificationDropdown,
  FlatFeed,
  Activity,
  LikeButton,
} from "react-activity-feed";
// import axios from "axios";
import "./App.css";
import "react-activity-feed/dist/index.css";
// import stream from "getstream";
// const stream = require("getstream");
// const secret = process.env["REACT_APP_SECRET"];
const apiKey = process.env["REACT_APP_KEY"];
// const token = process.env["REACT_APP_TOKEN"];
// const userID = "Zachery";
const appId = "1120907";
// let client;
// console.log("STREAM", stream);

function App() {
  // let token;

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:8181/token", { userID })
  //     // .then((res) => setToken(res.data))
  //     // .then(() => (client = stream.connect(apiKey, token, appId)))
  //     .catch((err) => console.error("ERROR", err));
  // }, []);

  // // console.log(token, "TOKEN");
  // const client = stream.connect(apiKey, token, appId);

  return (
    <StreamApp
      apiKey={apiKey}
      appId={appId}
      // token={token}
      // apiKey="xt28jymjb9y7"
      // appId="1120907"

    >
      <NotificationDropdown notify />
      <FlatFeed
        notify
        Activity={(props) => (
          <Activity
            {...props}
            Footer={() => (
              <div style={{ padding: "8px 16px" }}>
                <LikeButton {...props} />
              </div>
            )}
          />
        )}
      />
    </StreamApp>
  );
}

export default App;

// const createFeed = async () => {

// const chris = client.feed('user', 'chris');
// await chris.addActivity({
//   actor: 'chris',
//   verb: 'add',
//   object: 'picture:10',
//   foreign_id: 'prictur:10',
//   message: 'Beautiful bird!'
// });
// const jack = client.feed('timeline', 'jack');
// await jack.follow('user', 'chris');
// const results = await jack.get({ limit: 10 });
// // await chr
// }
// createFeed();
