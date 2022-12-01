# Deadpool Social Media
---
*NOTE: This is an example project developed by [@shakirsamoon](https://github.com/shakirsamoon). Feel free to explore, clone or fork the repo as per your liking. In exchange, I would like a star for the repository. Thank you in Advance.*

> Developed on: Sept 18, 2021

> Updated on: Dec 01, 2022

> Technologies used:
> - [Next.js](https://nextjs.org/)
> - Firestore DB ([Firebase](https://firebase.google.com/))


<br/>


## Getting Started
---

### 1) Setup Firebase.

* Make a Firebase account and create a Firestore database.
* Create two collections. `posts` and `stories`.
* Add documents to the collections as per below skeleton.

```
/// `posts` format
{
  content: string;
  image_url: string;
  liked: boolean;
  added_by: string;
  profile_image_url: string;
}

/// `stories` format
{
  username: string;
  profile_image_url: string;
  story_url: string;
}
```



### 2. Add `.env` values.

* Make a duplicate of `.env.example`. Rename it to `.env.local`.
* Fill up the properties as per its names.
* Make sure to make the `hosted` property value to `false`.


### 3. Start the project.

* Run below commands to start.
```
yarn install

yarn dev
```

### 4. Open the app.

* Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
