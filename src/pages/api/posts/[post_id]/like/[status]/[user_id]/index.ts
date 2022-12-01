import { NextApiRequest, NextApiResponse } from "next";
import { getFirestore, doc, setDoc } from "firebase/firestore/lite";
import app from "src/lib/firebase";

/**
 * Sets like and dislike value of the post
 *
 *
 * @param {post_id} number Post ID
 * @param {status} boolean Status of liked or not
 * @param {user_id} number User ID
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { post_id, status, user_id } = req.query;

    const db = getFirestore(app);
    const like = status === "true";

    const postRef = doc(db, `posts/${post_id}`);
    await setDoc(postRef, { liked: like }, { merge: true });

    res.status(200).json({ page: "like", user_id, post_id, like });
  } else {
    res.status(404).json({ error: "Not found" });
  }
}
