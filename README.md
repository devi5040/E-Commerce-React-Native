# E-Commerce-React-Native

# npx create-expo-app <app_name>

### If git push not working ------->   git push --set-upstream origin <branch-name>

##Custom fonts not loaded for version > 0.60

1. Create a file named react-native.config.js in the root folder of your project.
2. add this in that file
   module.exports = {
   project: {
   ios: {},
   android: {},
   },
   assets: ['./assets/fonts']
   };
3. npx react-native-asset
4. run the app
