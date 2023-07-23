from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS


app = Flask(__name__)
CORS(app) 

@app.route("/api/recomendaciones", methods=['POST', 'GET'])
def obtener_recomendaciones():
     
    titulo = request.args.get("titulo")
   
    ruta_archivo_json = 'http://127.0.0.1:8000/api/etiquetasCursos'
    datos = pd.read_json(ruta_archivo_json, orient='records')
    datos = datos.drop(["id","5"], axis=1)
    datos['tiporecurso'] = datos['tiporecurso'].replace({1: 'Gamificación educativa', 2: 'Enseñanza', 3: 'Comunidades de aprendizaje', 4: 'Plataformas educativas', 5: 'Información', 6: 'Juegos didácticos', 7: 'Consejos'})

    tfidf = TfidfVectorizer()
    matriz_tfidf = tfidf.fit_transform(datos['tiporecurso'] + ' ' + datos['0'] + ' ' + datos['1']+ ' ' + datos['2']+ ' ' + datos['3']+ ' ' + datos['4'])
    similarity_matrix = cosine_similarity(matriz_tfidf, matriz_tfidf)

    def obtener_recomendaciones(titulo, similarity_matrix, datos, top_n=8):    
        indice = datos[datos['nombreCurso'] == titulo].index[0]
        scores = list(enumerate(similarity_matrix[indice]))
        scores = sorted(scores, key=lambda x: x[1], reverse=True)
        indices_cursos_similares = [i[0] for i in scores[1:top_n+1]]
        return datos['nombreCurso'].iloc[indices_cursos_similares]

    recomendaciones = obtener_recomendaciones(titulo, similarity_matrix, datos)
    df = pd.DataFrame({'nombre': recomendaciones})
    df
    return df.to_json(orient='records')

if __name__ == "__main__":
    app.run(debug=True)