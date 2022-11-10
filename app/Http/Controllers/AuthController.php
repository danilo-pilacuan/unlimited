<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Direccion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request) {
        //validación de los datos
        $request->validate([
            'nombres' => 'required',
            'apellidos' => 'required',
            'telefono' => 'required',
            'fechaNacimiento' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
            'tipoUsuario' => 'required'
        ]);
        //alta del user
        $user = new User();
        $user->nombres = $request->nombres;
        $user->apellidos = $request->apellidos;
        $user->telefono = $request->telefono;
        $user->fechaNacimiento = $request->fechaNacimiento;
        $user->email = $request->email;
        $user->urlFoto = $request->urlFoto;
        $user->password = Hash::make($request->password);
        $user->tipoUsuario = $request->tipoUsuario;
        $user->save();

        $dir=new Direccion();
        $dir->callePrincipal="";
        $dir->calleSecundaria="";
        $dir->numeroCasa="";
        $dir->telefono="";
        $dir->ciudad="";
        $dir->idUsuario=$user->id;

        $dir->save();

        //respuesta
        /* return response()->json([
            "message" => "Alta exitosa"
        ]); */
        return response($user, Response::HTTP_CREATED);
    }

    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        // return response()->json([
        //     "message" => "testget ok"
        // ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $userWithDir = User::with('Direccion')->get()->find($user->id);
            $token = $user->createToken('token')->plainTextToken;
            $cookie = cookie('user_cookie', $token, 60 * 24);
            return response(["token"=>$token,"user"=>$userWithDir], Response::HTTP_OK)->withoutCookie($cookie);
        } else {
            return response(["message"=> "Credenciales inválidas"],Response::HTTP_UNAUTHORIZED);
        }
    }

    public function userProfile(Request $request) {
        return response()->json([
            "message" => "userProfile OK",
            "userData" => auth()->user()
        ], Response::HTTP_OK);
    }

    public function logout() {
        $cookie = Cookie::forget('user_cookie');
        return response(["message"=>"Cierre de sesión OK"], Response::HTTP_OK)->withCookie($cookie);
    }

    public function allUsers() {
       $users = User::all();
       return response()->json([
        "users" => $users
       ]);
    }

    public function testGet(Request $request)
    {
        return response()->json([
            "message" => "testget ok"
        ]);
    }
    public function testPost(Request $request)
    {
        return response()->json([
            "message" => "testPost ok"
        ]);
    }
}
