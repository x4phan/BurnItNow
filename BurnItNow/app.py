from flask import Flask, render_template, request, jsonify
from sklearn.preprocessing import OneHotEncoder
import joblib
import os
import numpy as np

# Initialize Flask application
app = Flask(__name__,static_url_path='/static')

# Load the pre-trained model
model_path = os.path.join(os.path.dirname(__file__), 'predictor.pkl')
model = joblib.load(model_path)

# Define route for home page
@app.route('/index')
def index():
    return render_template('index.html')
# Define route for the home page
@app.route('/')
def home():
    return render_template('home.html')

# Define route for the about page
@app.route('/about')
def about():
    return render_template('about.html')

# Define route for the contact page
@app.route('/contact')
def contact():
    return render_template('contact.html')
# Define route for the settings page
@app.route('/nutrition')
def nutrition():
    return render_template('nutrition.html')
# Define route for nutrition page
@app.route('/faq')
def faq():
    return render_template('faq.html')
# Define route for FAQ page
@app.route('/tos')
def tos():
    return render_template('tos.html')
# Define route for TOS page
@app.route('/privacypolicy')
def privacypolicy():
    return render_template('privacypolicy.html')
# Define route for Privacy Policy page


@app.route('/predict', methods=['POST'])
def predict():
    # Extract input data from the request form
    gender = request.form['gender']
    age = float(request.form['age'])
    height = float(request.form['height'])
    weight = float(request.form['weight'])
    duration = float(request.form['duration'])
    heart_rate = float(request.form['heart_rate'])
    body_temp = float(request.form['body_temp'])
    
    # Perform one-hot encoding for gender
    encoder = OneHotEncoder()
    gender_encoded = encoder.fit_transform([[gender]]).toarray()
    
    # Concatenate encoded gender with other numerical features
    input_features = np.hstack((gender_encoded, [[age, height, weight, duration, heart_rate, body_temp]]))

    # Make prediction using the loaded model
    prediction = model.predict(input_features)[0]
    
    # Convert prediction to a native Python data type
    prediction = float(prediction)

    # Return prediction as JSON response
    return jsonify({'calories_burnt': prediction})

# Main code to run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
