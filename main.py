from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/')
def uplb_sv():
    return render_template('uplb_sv.html')

if __name__ == '__main__':
    app.run(port=8000,
	    host='127.0.0.1',
	    use_reloader=True,
	    debug=True)


