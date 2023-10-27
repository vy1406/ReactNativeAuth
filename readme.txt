go to firebase, create project. 
create authentication with email.

go here
https://firebase.google.com/docs/reference/rest/auth#section-create-email-password

get this:
https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

your apiKey willbe in project -> settings -> apikey.
replace and good to go


once reaching welcome page, u can set rules to ur specific db.
like so:
{
  "rules": {
    ".read": "auth.uid != null",  // 2023-11-26
    ".write": "auth.uid != null",  // 2023-11-26
  }
}

also send the token with url.