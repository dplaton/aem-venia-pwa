# AEM Venia PWA app

This is a PWA Studio app renders the marketing content retrieved from AEM. It was created using PWA Studio 9.

For more details about how to configure and customize this app you can also refer to the [PWA Studio](https://pwastudio.io) official documentation

## How to build the app

Prerequisites: Running the app requires [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) (latest versions should work just fine). Building the app requires [yarn](https://yarnpkg.com).

### Step 1: Install dependencies

Install the dependencies using `yarn install`.

### Step 2: Configure the app

The configuration settings are stored in an `.env` file. You can copy / rename the existing `.env.sample` file and configure the Mageno and AEM URLs

### Step 3: Generate an SSL certificate for the app

In the root directory of this project run the following command

```bash
yarn buildpack create-custom-origin packages/venia-concept
```

### Step 4: Run the app

You can run the app using `yarn watch`. This will build the app and start a local server and it will display the local used URL to access the app.
