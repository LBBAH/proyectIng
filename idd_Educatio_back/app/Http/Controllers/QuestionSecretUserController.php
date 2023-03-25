<?php

namespace App\Http\Controllers;

use App\Models\QuestionSecretUser;
use Illuminate\Http\Request;
use App\Models\QuestonSecret;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class QuestionSecretUserController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\QuestionSecretUser  $questionSecretUser
     * @return \Illuminate\Http\Response
     */
    public function show(QuestionSecretUser $questionSecretUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\QuestionSecretUser  $questionSecretUser
     * @return \Illuminate\Http\Response
     */
    public function edit(QuestionSecretUser $questionSecretUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\QuestionSecretUser  $questionSecretUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, QuestionSecretUser $questionSecretUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\QuestionSecretUser  $questionSecretUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(QuestionSecretUser $questionSecretUser)
    {
        //
    }


    public function recuperarPregunta(Request $request){
        $question = QuestionSecretUser :: select('question_secret_users.id','users.email','question_secret_users.id_user','queston_secrets.questionsSecret','question_secret_users.id_questionSecret','question_secret_users.answer')->
        join('users','users.id','=','question_secret_users.id_user')->
        join('queston_secrets','queston_secrets.id','=','question_secret_users.id_questionSecret')->
        where('users.email',$request->email)->get();
        
        if(count($question) == 1){
            return \response()->json($question);
        }

        return response()->json(['error'=>'No se encontro usuario o no tiene pregunta secreta'],200);
    }

    public function respuesta(Request $request){
        $question = QuestionSecretUser :: where('id_user',$request->id_user)->where('answer',$request->answer)->get();
        
        if(count($question) == 1){
            $user = User::findOrFail($request->id_user);            
            $password=Str::random(8);
            $p=Hash::make($password);
            $user->update(['password'=>$p]);
            return \response()->json($password);
        }

        return response()->json(['error'=>'Error en tu respuesta intenta de nuevo'],200);
    }

    public function addQuestionUser(Request $request ,$id){        
        QuestionSecretUser::updateOrCreate(
            ['id_user' => $id],
            ['id_questionSecret' => $request->id_questionSecret, 'answer' => $request->answer]
        );

        return response()->json(['success'=>'Pregunta secreta actualizada con exito'],200);
    }
    
}
