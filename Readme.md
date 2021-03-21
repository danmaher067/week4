This repositority contains the final project for Machine Learning and Statstics module. This project was completed by Donal Maher G00387395. 
# Running this rest_server
## Windows
set FLASK_APP=rest_server.py<br>
python -m flask run<br>
docker build  -t rest_server-app .<br>
docker run -d -p 5000:5000 rest_server-app<br>
## Linux 
export FLASK_APP=rest_server.py<br>
python3 -m flask run<br>


## This repositority has the project completed under: <br>
  1. Machine-Learning-and-Statistics-Project-2020.ipynb<br> 
     This contains analysis of Linear Regression:<br>
      a. Simple Linear Regression<br>
      b. Polynominal Linear Regression <br>
      c. Multipule Linear Regression<br>
      And some comparsions between Linear Regression and Logistic Regression<br>
 2. python rest server , this is called rest_server.py <br> 
 3. Dockerfile. 
