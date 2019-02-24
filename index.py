import os
import uuid

from flask import Flask, render_template, send_file
import requests

app = Flask(__name__)

RADIO = "radio"
SOUND = "sound"

class Werm():
    def __init__(self, id):
        self.id = id

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
    return render_template("index.html", werms=werms)


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
