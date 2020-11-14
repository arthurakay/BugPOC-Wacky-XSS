## XSS Challenge

https://wacky.buggywebsite.com/

## Solution

https://mr-goron.medium.com/bugpoc-wacky-xss-challenge-solution-7997e6e84f76

## Video Walkthrough

https://www.youtube.com/watch?v=8RcyOlJOsYA

---

# Local Setup

Install dependencies

    npm i

Start the local server

    npm run start

This will host [a webpage on http://localhost:3001](http://localhost:3001) for us to bypass the first part of the challenge (escaping `iframe` validation).

See the inline JavaScript comments in this file to help you along the way!

## SRI: Sub-resource integrity

As you make changes to `public/files/analytics/js/frame-analytics.js` you'll need to keep updating the SHA-256 SRI hash for our payload.

Run `npm run sri` in your terminal to get the updated hash, and replace it in your payload as needed.