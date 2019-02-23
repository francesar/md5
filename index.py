import os

from flask import Flask, render_template
import googlemaps
import requests

app = Flask(__name__)

item_id = "20160707_195147_1057916_RapidEye-1"
item_type = "REOrthoTile"
asset_type = "visual"

PL_API_KEY = "3bb840c665cb4593819faf26d1bf1867"
MAPS_API_KEY = "AIzaSyCuLTaDBwU1nzA8ntjfYV0Lo03TGQBU07k"

session = requests.Session()
session.auth = (PL_API_KEY, '')

gmap_client = googlemaps.Client(MAPS_API_KEY)
print(gmap_client.geocode('Columbia University'))


item = \
  session.get(
    ("https://api.planet.com/data/v1/item-types/" +
    "{}/items/{}/assets/").format(item_type, item_id))

# extract the activation url from the item for the desired asset
item_activation_url = item.json()[asset_type]["_links"]["activate"]

# request activation
response = session.post(item_activation_url)

print(response.status_code)

@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)