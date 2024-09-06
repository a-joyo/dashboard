# Getting Started
1. Clone this repo (crypto_tax_software_front_end)
2. Clone the crypto_tax_software_back_end repo in the same parent directory as this repo. For example, the structure can be: /Users/admin/Documents/github/tax-software-repos/crypto_tax_software_front_end and /Users/admin/Documents/github/tax-software-repos/crypto_tax_software_back_end

After cloning, run `npm install`
If you vulnerabilities it is okay to ignore them. However if you have issues with the vulnerabilities that stop you from running, then try to run 
```
$ npm install -g npm-check-updates
$ ncu -u
$ npm install
$ npm audit fix --force
```

## Install AWS Amplify CLI, and setup AWS CLI credentials

** Windows **
This download may be different on mac, but run on windows: `curl -sL https://aws-amplify.github.io/amplify-cli/install-win`
Then run `./install.cmd`
If you get the error **Invoke-WebRequest : A parameter cannot be found that matches parameter name 'sL'.** do: Remove-item alias:curl

** Mac **
Run the command: `curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL`


Now try `amplify help`. If you get the error that `amplify` is not recognized as the name of a cmdlet, ..., or just that the command is not found, then run `npm install -g @aws-amplify/cli`.

If you get the error **cannot be loaded because running scripts is disabled on this system. For more 
information, see about_Execution_Policies** when doing `amplify help`, use `set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

Then add a new path pointing to PATH key for amplify if it still does not work.
More details here: https://docs.amplify.aws/cli/start/install/

Next go to the crypto_tax_software_back_end repo.
Next do `amplify configure`. You will need to create your own user login.
Follow procedure with making a user in **us-west-2**, adding it to the amplify group, create access keys, and input it for your user to be created.

Then do: `npm install aws-amplify` and `npm install @aws-amplify/ui-react`. Though this may come with npm install.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

**Note: You must have ran npm install before running this command**

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
