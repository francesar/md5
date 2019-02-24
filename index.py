import os
import uuid

from flask import Flask, jsonify, render_template, request, send_file
import requests

app = Flask(__name__)

RADIO = "radio"
SOUND = "sound"

class Werm():
    def __init__(self, id):
        self.id = id

    def to_dict(self):
        return {'id': self.id}


@app.route("/")
def index():
    werms = [
        Werm(id=1),
        Werm(id=2),
        Werm(id=3),
        Werm(id=4),
        Werm(id=5),
        Werm(id=6),
        Werm(id=7)
    ]
    return render_template("index.html", werms=werms, id=1)


@app.route("/move")
def move():
    if not request.json():
        return jsonify(err="can only send json")

    json = request.json()
    x = json["x"]
    y = json["y"]

    x = x + 1 if x < 1000 else 0
    y = y + 1 if y < 1000 else 0

    return jsonify(x=x, y=y)


@app.route("/werms")
def werms():
    werms = [
        Werm(id=1),
        Werm(id=2),
        Werm(id=3),
        Werm(id=4),
        Werm(id=5),
        Werm(id=6),
        Werm(id=7)
    ]
    return jsonify(werms=[werm.to_dict() for werm in werms])


@app.route("/<typ>")
def get_png(typ):
    # retrieve image from file system
    path = None
    if typ == RADIO:
        print(RADIO)
    elif typ == SOUND:
        print(SOUND)

    # send_file(path, mimetype="image/png")
    return typ


if __name__ == "__main__":
    app.run(debug=True)
