from flask import Flask, send_from_directory
app = Flask(__name__)


if __name__ == '__main__':
    app.run(debug=True)