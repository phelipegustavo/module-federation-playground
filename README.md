## Module Federation Playground

### REMOTE
This app exposes an `<AppButton />` component through `/assets/remoteEntry.js` file

Build and start preview server
```
yarn build && yarn preview
```

### HOST
This app consumes `<AppButton />` from remote in `views/HomeView.vue`

Start dev server
```
yarn dev
```
