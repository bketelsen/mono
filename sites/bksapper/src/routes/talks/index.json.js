import { store } from "../../talkstore";

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  var posts = Array.from(store._posts.values());
  const sortedPosts = posts.sort((a,b) => new Date(b.date) - new Date(a.date));
  res.end(JSON.stringify(posts));
}
