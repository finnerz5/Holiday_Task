from bcrypt import checkpw, gensalt, hashpw
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

logins = {}

@app.route("/Login", methods=["POST"])
def Login():
    username = request.json["Username"]
    GivenPassword = request.json["Password"].encode("utf-8")

    if username in Logins:
        savedPassword = Logins[username]
        if checkpw(GivenPassword, savedPassword):
            return "Login Valid.", 200
        else:
            return "Login Invalid.", 200
    else:
        salt = gensalt()
        hashedPassword = hashpw(GivenPassword, salt)
        Logins[username] = hashedPassword
        print(f"Logins: {Logins}")
        return "Login created.", 200

if __name__ == "__main__":
    app.run(ssl_context='adhoc')