// Implement OAuth Routes: Add the GitHub OAuth routes from Lesson 4 to your user routes file. 
// GET /api/users/auth/github: This route will kick off the OAuth flow by redirecting the user to GitHub. []
// GET /api/users/auth/github/callback: This is your callback URL. It should use passport.authenticate, 
// and upon successful authentication, it should sign a JWT for the user and return it to the 
// client (e.g., via a redirect with a query parameter). []