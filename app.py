from flask import Flask, request, jsonify
from pymongo import MongoClient
import os

app = Flask(__name__)


@app.route("/", methods=["POST"])
def home():
    return "Hello, Azure!"
# def login():
#     data = request.json
#     email = data.get("email")
#     password = data.get("password")
#
#     user = db.users.find_one({"email": email})
#     if not user or user["password"] != password:
#         return jsonify({"message": "Invalid credentials"}), 401
#
#     return jsonify({"message": "Login successful"}), 200



if __name__ == '__main__':
   app.run()
