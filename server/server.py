from flask import Flask, jsonify, request
from functions import login_register
app = Flask(__name__)

@app.route('/api/register', methods=['POST'])
def register_route():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    result = login_register.register(email, password)
    return result

@app.route('/api/login', methods=['POST'])
def login_route():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    result = login_register.login(email, password)
    return result

if __name__ == "__main__":
    app.run(debug=True)