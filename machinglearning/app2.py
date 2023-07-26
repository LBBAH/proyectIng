from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route("/apiv2/recomendaciones", methods=['POST', 'GET'])
def obtener_recomendaciones():
     
    titulo = request.args.get("titulo")
   
    ruta_archivo_json = 'http://127.0.0.1:8000/api/obtenerDatosML'
    datos = pd.read_json(ruta_archivo_json, orient='records')
    datos = datos.drop(["id","10","11","12","13","14","15","16","17","18","19"], axis=1)
    datos['8'] = datos['8'].fillna(datos['8'].mode()[0] )
    datos['9'] = datos['9'].fillna(datos['9'].mode()[0] )

    tfidf = TfidfVectorizer()
    matriz_tfidf = tfidf.fit_transform(datos['tiporecurso'] + ' ' + datos['0'] + ' ' + datos['1']+ ' ' + datos['2']+ ' ' + datos['3']+ ' ' + datos['4']+ ' ' + datos['5']+ ' ' + datos['6']+ ' ' + datos['7']+ ' ' + datos['8']+ ' ' + datos['9'])    
    similarity_matrix = cosine_similarity(matriz_tfidf, matriz_tfidf)

    def obtener_recomendaciones(titulo, similarity_matrix, datos, top_n=8):    
        indice = datos[datos['nombre_curso'] == titulo].index[0]
        scores = list(enumerate(similarity_matrix[indice]))
        scores = sorted(scores, key=lambda x: x[1], reverse=True)
        indices_cursos_similares = [i[0] for i in scores[1:top_n+1]]
        return datos['nombre_curso'].iloc[indices_cursos_similares]

    recomendaciones = obtener_recomendaciones(titulo, similarity_matrix, datos)
    df = pd.DataFrame({'nombre': recomendaciones})
    df
    return df.to_json(orient='records')

if __name__ == "__main__":
    app.run(debug=True)