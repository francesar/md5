import os

from flask import Flask, render_template, send_file
import requests

app = Flask(__name__)

RADIO = "radio"
SOUND = "sound"

@app.route("/")
def index():
    return render_template("index.html")


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
