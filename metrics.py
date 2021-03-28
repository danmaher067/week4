# manual function to predict the y or f(x) value power of the input value speed of a wind turbine. 
# Import linear_model from sklearn.
import matplotlib.pyplot as plt
import numpy as np
# Let's use pandas to read a csv file and organise our data.
import pandas as pd
import sklearn.linear_model as lm
# Create a linear regression model instance
def metrics():
    m = lm.LinearRegression()
    df =pd.read_csv('powerproduction.csv')
    x=df[["speed","power"]]
    y=df["power"] 
    from sklearn import metrics
    predictions = m.predict(x)
    print("****Absolute error*****\nMAE is the sum of absolute differences between our target and predicted variables.\nSo it measures the average magnitude of errors in a set of predictions, without considering their directions")
    print(metrics.mean_absolute_error(y, predictions))
    print('****Mean Squared Error (MSE)****\nMeasures the average of the squares of the errors—that is,\nthe average squared difference between the estimated values and the actual value')
    print(metrics.mean_squared_error(y, predictions))
    print("****Root Mean Squared Error (RMSE)*****\nThis the square root of the mean of the square of all of the error.\nRMSE is considered an excellent general-purpose error metric for numerical predictions.\nRMSE is a good measure of accuracy, but only to compare prediction errors of different models or model configurations for a particular variable and not between variables, as it is scale-dependent")
    print(np.sqrt(metrics.mean_squared_error(y, predictions)))
