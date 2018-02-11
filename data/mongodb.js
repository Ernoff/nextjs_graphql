const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = mongoose.createConnection("mongodb://user:user@ds231568.mlab.com:31568/gqlnext");

const AuthorSchema = mongoose.Schema({
  id: { type: Number, index: true },
  firstName: String,
  lastName: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
});

const PostSchema = mongoose.Schema({
  id: { type: Number, index: true },
  title: String,
  text: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" }
});

const Author = db.model("Author", AuthorSchema);
const Post = db.model("Post", PostSchema);

exports.Author = Author;
exports.Post = Post;
