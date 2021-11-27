from flask import Flask
from flask.templating import render_template

app = Flask(__name__)
app.debug = True

@app.route("/")
def main():
    return "Main Page"

@app.route("/main")
def main_test():
    return render_template('main.html')