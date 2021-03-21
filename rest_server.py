from flask import render_template,Flask, url_for, request, redirect, abort, jsonify,Response
from LinearRegression import findy
import numpy as np
from metrics import metrics
#form import find
import sys
app = Flask(__name__, static_url_path='', static_folder='staticpages')

# Add root route.
@app.route("/")
def home():
    return app.send_static_file('index.html')


# Add uniform route.
@app.route('/api/linear/<name>')
def linear(name):
    # do some trimming. The Javascript return <str> ie <10>.
    # use the fact that the string is a array of chars. 
    # strip the element[0] and element[lenght -1]
    name = name[1:len(name)-1]
    # covert to a integer
    name = int(name)
    print("28",name)
    if name > 25:
        return {"value": findy(25)}
    if name <= 0:
        return {"value": 0}
    else:
        print("name " , type(name))
        return {"value" :findy(name)}


    

if __name__ == "__main__":
    app.run(debug=True)