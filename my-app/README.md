  Currently, this application stores the blog post articles within the 
file system of the application, and they are retrieved using node js file system
methods from .lib/post.tsx.

  In order to make this a full stack application with data base queries I want to move
the stored blog posts to a remote db and implement the api requests instread of the file
system methods that are currently employed.