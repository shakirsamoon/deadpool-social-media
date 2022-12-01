import { NextApiRequest, NextApiResponse } from "next";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import app from "src/lib/firebase";

/**
 * Retrieves user liked posts
 *
 *
 * @param {user_id} number User ID
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user_id } = req.query;

  const db = getFirestore(app);
  const postsCollection = query(
    collection(db, "posts"),
    where("liked", "==", true)
  );
  const postSnapshot = await getDocs(postsCollection);
  const postList = postSnapshot.docs.map((doc) => {
    let data = doc.data();
    data["id"] = doc.id;
    return data;
  });

  res.status(200).json({
    page: "liked posts",
    user_id,
    data: postList,
  });
}
