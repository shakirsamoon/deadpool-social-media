import { NextApiRequest, NextApiResponse } from "next";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import app from "src/lib/firebase";

/**
 * Retrieves every posts posted
 *
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = getFirestore(app);
  const postsCollection = collection(db, "posts");
  const postSnapshot = await getDocs(postsCollection);
  const postList = postSnapshot.docs.map((doc) => {
    let data = doc.data();
    data["id"] = doc.id;
    return data;
  });

  res.status(200).json({
    page: "posts",
    data: postList,
  });
}
