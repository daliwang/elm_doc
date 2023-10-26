import json
from flask import Flask, request, jsonify
"""
app = Flask(__name__)

@app.route('/find_edges', methods=['GET','POST'])
def find_edges():
    #source = request.args.get('source')
    source = request.get_json()
    source = "elm_drv"
    with open('uelm_ref.json') as f:
        data = json.load(f)
    edges = [edge for edge in data['links'] if edge['source'] == source]
    return json.dumps(edges)

"""
"""
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/double_string', methods=['POST'])
def double_string():
    data = request.get_json()
    string = data['string']
    result = string * 2
    return jsonify({'result': result})
"""

def find_edges(source):
    with open('uelm_ref.json') as f:
        data = json.load(f)
    edges = [edge for edge in data['links'] if edge['source'] == source]
    return json.dumps(edges)

if __name__ == '__main__':
    app.run(debug=True)