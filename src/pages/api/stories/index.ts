import { NextApiRequest, NextApiResponse } from "next";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import app from "src/lib/firebase";

/**
 * Retrieves every stories posted
 *
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = getFirestore(app);
  const storiesCollection = collection(db, "stories");
  const storySnapshot = await getDocs(storiesCollection);
  const storyList = storySnapshot.docs.map((doc) => {
    let data = doc.data();
    data["id"] = doc.id;
    return data;
  });

  res.status(200).json({
    page: "stories",
    data: storyList,
  });
}
