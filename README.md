# Todo

This is the ToDo App frontend from Robert Isaac's article:

* [Host a NestJS App on Firebase Functions: The Complete Guide](https://robert-isaac.medium.com/nestjs-with-firebase-the-complete-guide-aa0ade41cdef#44ca)

It has been updated to [Angular v18](https://v18.angular.dev/). The backend is a
NestJS app that is hosted on Firebase Functions which I have also
updated [here](https://github.com/danielzen/NestJS-Firebase-ToDo).

Note: I just updated to the most recent version of Angular and Firebase. I did
not change the code or the article in any other way, but hopefully this is
helpful to someone.

## Setup

You need to make sure the `src/environments/environment.ts` file has the correct
values for your Firebase project (and `src/environments/environment.prod.ts`
if you deploy). You can get these values from the Firebase Console. The `apiUrl`
should be the URL of your Firebase Functions app.

## Firebase Hosting

To host this with Firebase Hosting, you need to have the Firebase CLI
installed, `firebase login`, and run the following commands:

```
firebase init
```

* Select `Hosting: Configure files for Firebase Hosting`
* Create or select an existing Firebase Project
* Your public directory is `dist/todo/browser`
* Configure as a single-page app: `Yes`
* Set up automatic builds and deploys with GitHub? `No`
* If file /dist/todo/browser/index.html already exists. Overwrite? `No`

You can then

```
pnpm run build
firebase deploy
```

PS: This is not necessary to test your backend, it should work
from `http://localhost:4200` as well by running `pnpm start` or `ng serve`.
