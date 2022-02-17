# MOVIES BROWSER

![Screen](readmeImages/readmeImage.jpg)

## NAVIGATION
- [demo](#demo-link)
- [preview](#page-preview)
- [movies browser](#search-movies-add-people)
- [switching themes](#switch-themes)
- [dynamic changing size of images](#size-of-images)
- [technologies](#technologies-and-concepts)
- [authors](#authors-names)
- [react documentation](#react-documentation)

  <a name="demo-link">

 # DEMO

[demo](https://wojciechbylica.github.io/movies-browser/ "Movies Browser")

  </a>


 <a name= "page-preview">

  ## PREVIEW ##

  ![Preview](readmeImages/moviesBrowserPreview.gif)

 </a>

<a name="search-movies-add-people">

## MOVIES BROWSER

In Movies Browser you can search for popular movies and popular people. The app returns interesting informations about films, actors and crew.

Movies:
- title
- poster
- release_date
- description
- genres
- rating
- number of votes,

People:
- name
- foto
- date of birth
- place of birth
- biography
- movie cast
- movie crew

</a>


 <a name= "switch-themes">

  ## SWITCHING THEMES

  Movies Browser can be displayed in light and dark mode. You can switch modes by clicking dedicated button. The App is choosing default mode by checking the time:

  ```sh
export const getInitialDarkTheme = () => {
    const date = new Date();
    const hour = date.getHours();

    return (
        (hour < 6 || hour > 19) ? true : false
    );
};
```

  ![Preview](readmeImages/themesPreview.gif)

</a>

<a name= "size-of-images">

  ## DYNAMIC CHANGING SIZE OF IMAGES

  Movies Browser checks the size of the screen and renders proper size of posters and photos

  ```sh
export const useGetScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const getScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", getScreenWidth);

        return () => window.removeEventListener("resize", getScreenWidth);
    }, [screenWidth]);

    return screenWidth;
};
```
```sh
if (screenWidth > 1280) size = configuration.images.backdrop_sizes[3];
```

<a name="technologies-and-concepts">

## TECHNOLOGIES AND CONCEPTS USED IN MOVIES BROWSER

- react
- redux
- saga
- styled components
- axios
- media queries
- css
- html
- trello
- figma
- team work

 </a>

 <a name="authors-names"></a>

  ## AUTHORS ##

* **Wojciech Bylica**,
* **Karol Cieśluk**,
* **Patrycja Leśniak**.




---

<a name="react-documentation">

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
</a>
