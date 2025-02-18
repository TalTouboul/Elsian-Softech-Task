from flask import Flask, request, jsonify
from pymongo import MongoClient
import os

app = Flask(__name__, static_folder="src", static_url_path="/")

# דוגמה לחיבור ל-Mongo
mongo_uri = os.environ.get("MONGO_URI", "mongodb+srv://tal:<tubul1497>@elysian0softech0task.t83qi7t.mongodb.net/")
client = MongoClient(mongo_uri)
db = client["elysian0softech0task"]

@app.route("/", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = db.users.find_one({"email": email})
    if not user or user["password"] != password:
        return jsonify({"message": "Invalid credentials"}), 401

    return jsonify({"message": "Login successful"}), 200

@app.route("/register", methods=["POST"])
def register():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    # ועוד שדות לפי הצורך

    db.users.insert_one({"email": email, "password": password})
    return jsonify({"message": "User created"}), 201

if __name__ == "__main__":
    app.run(port=5000, debug=True)
