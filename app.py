from flask import Flask, render_template, redirect, url_for, g, jsonify, request
from datetime import timedelta, datetime

app = Flask(__name__)
app.config['etime'] = datetime.now() + timedelta(minutes=10)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/timer', methods=['POST'])
def timer():
  app.config['etime'] = datetime.now() + timedelta(minutes=request.args['num'])
  return redirect(url_for('index'))

@app.route('/target', methods=['POST'])
def settarget():
  data['etime'] = app.config['etime']
  return jsonify(data)
