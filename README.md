# Natours

## Deployed Version

Live demo 👉 : [click here](https://free-waddle.onrender.com)

## How To Use

1. Book a tour
2. Login to the site
3. Search for tours that you want to book
4. Proceed to the payment checkout page
5. Enter the card details (Test Mode):
   - Card No. : 4242 4242 4242 4242
   - Expiry date: 02 / 25
   - CVV: 222
6. Finished!
7. You can update your own username, profile photo, email, and password.

### API Usage

Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add:

- `{{URL}}` with your hostname as the value (Eg. <http://127.0.0.1:3000> or <http://www.example.com>)
- `{{password}}` with your user password as the value.
  Check Natours API Documentation for more info:

### Testing in local machine

In case you wish to modify or test the project:

1. Download the [.zip] file and extract it. [download link](https://github.com/Frosty-204/free-waddle/releases/tag/build)
2. Open the extracted file using a code editor or CLI.
3. On the terminal screen type `npm install`, this should install the required dependencies for the project to run.
4. If any error occurs check if you have both [npm/nodejs] installed on your machine.
5. After `npm install` finishes, type `npm run start:prod` into the termial.
6. The production server should start in the URL [http://127.0.0.1:3000/].
