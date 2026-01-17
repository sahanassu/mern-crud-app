clone:
git clone https://github.com/sahanassu/mern-crud-app.git
cd mern-crud-app
code .
cd backend
npm install
cd ../frontend
npm install


You can copy this all-in-one command set:

D:
cd path\to\your\folder
git clone https://github.com/sahanassu/mern-crud-app.git
cd mern-crud-app
code .


Then separately run npm install in backend and frontend folders.






PS D:\mern-crud-app> cd backend   
PS D:\mern-crud-app\backend> npm init -y
PS D:\mern-crud-app\backend> npm install express mongoose cors bcryptjs
npm install express mongoose bcryptjs jsonwebtoken cors
PS D:\mern-crud-app\backend> cd ..


PS D:\mern-crud-app> node -v
v20.14.0
PS D:\mern-crud-app> npm -v
10.8.1
PS D:\mern-crud-app> npm create vite@latest frontend
PS D:\mern-crud-app> cd frontend
PS D:\mern-crud-app\frontend> npm install
PS D:\mern-crud-app\frontend> npm run dev
PS D:\mern-crud-app\frontend> npm install axios


PS D:\mern-crud-app> cd backend
PS D:\mern-crud-app\backend> node server.js
Server running on port 5000
MongoDB connected
