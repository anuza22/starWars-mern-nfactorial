

```markdown
# Star Wars Information Hub

This project is a Star Wars-themed web application that allows users to search for planets and characters from the Star Wars universe. It was created using React, and data is fetched from the SWAPI (Star Wars API). The backend was attempted using Node.js and Express.js, with MongoDB Atlas as the database, but there were issues with data persistence.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

## Project Structure

### Frontend

#### `components/`

- **Header:** The header component displaying the title of the application.
- **Home:** The main landing page with information fetched from SWAPI.
- **Planets:** Displays a list of planets fetched from SWAPI.
- **PlanetCard:** Shows detailed information about a specific planet.
- **SearchPage:** Allows users to search for planets and characters.
- **SearchResultCard:** Displays individual search results.

#### `App.jsx`

The main app component where routing is set up.

### Backend

An attempt was made to implement a backend using Node.js and Express.js with MongoDB Atlas as the database. However, there were issues connecting and saving data to the MongoDB Atlas database, and as a result, the backend is not fully functional.

## Issues and Limitations

- **Backend:** The backend with Node.js and Express.js faced issues with MongoDB Atlas. Data was not being saved to the database correctly.
- **Functionality:** Certain functionalities such as data persistence and advanced search features are not working due to the backend issues.

## Future Improvements

- **Backend Fixes:** Resolve the issues with MongoDB Atlas to ensure data can be saved and retrieved correctly.
- **Additional Features:** Implement more detailed search functionalities, user authentication, and the ability to save favorite planets or characters.

## How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/star-wars-info.git
```

2. Navigate to the project directory:

```bash
cd star-wars-info
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Acknowledgements

- This project uses data from the [Star Wars API (SWAPI)](https://swapi.dev/).
- The design and styling are inspired by the Star Wars universe.

---

Happy coding! May the Force be with you.
```

This `README.md` includes comprehensive information on how to set up and run the project, details about its structure, the issues faced with the backend, and the functionalities that are not currently working. It also outlines potential future improvements to guide further development.