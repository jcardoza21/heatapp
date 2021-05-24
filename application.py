from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, url_for
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required

# Inicializar aplicacion
app = Flask(__name__)

# No-cache
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response
    
# Configurar sesion para utilizar el sistema de archivos en vez de cookies
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"

Session(app)

# Configurar la base de datos SQL con la libreria CS50
db= SQL("sqlite:///heatapp.db")

@app.route("/")
@login_required
def index():
    """Pagina de Inicio"""
    #TODO
    return render_template("index.html")


@app.route("/conduction", methods=["GET", "POST"])
@login_required
def conduction():
    """Calculos de Conduccion"""
    #TODO
    return render_template("conduction.html")


@app.route("/convection", methods=["GET", "POST"])
@login_required
def convection():
    """Calculos de Conveccion"""
    #TODO
    return render_template("convection.html")


@app.route("/radiation", methods=["GET", "POST"])
@login_required
def radiation():
    """Calculos de Radiacion"""
    #TODO
    return render_template("radiation.html")


@app.route("/examples", methods=["GET", "POST"])
@login_required
def examples():
    """Ejemplos de Transferencia de Calor"""
    #TODO
    return render_template("examples.html")
    
@app.route("/register", methods=["GET", "POST"])
def register():
    """Registrar al usuario"""
    
    # Metodo POST
    if request.method == "POST":
        
        # Validar nombre de usario
        if not request.form.get("username"):
            return apology("Debe introducir un nombre de usuario :s", 400)
        
        # Validar contraseña 
        elif not request.form.get("password"):
            return apology("Debe introducir una contraseña :s", 400)
        
        # Validar que contraseña y confirmacion coincidan
        elif not request.form.get("password") == request.form.get("confirmation"):
            return apology("Contraseñas no coinciden :c", 400)
        
        # Generar hash para la contraseña
        hash = generate_password_hash(request.form.get("password"))
        
        # Almacenar usuario en la DB
        new_user_id = db.execute("INSERT INTO users (username, hash) VALUES (:username, :hash)",username = request.form.get("username"), hash=hash)
        
        # Si ya existe el usuario:
        if not new_user_id:
            return apology("Usuario ya registrado :x", 400)
        
        session["user_id"] = new_user_id
        flash("Ya te has registrado!! :D")
        
        return redirect(url_for("index"))
    else:
        return render_template("register.html")
    

@app.route("/login", methods=["GET", "POST"])
def login():
    """Iniciar sesion"""
    
    # Limpiar sesiones anteriores
    #session.clear()
    
    # Metodo POST
    if request.method == "POST":
        
        # Asegurar que el usuario haya sido enviado
        if not request.form.get("username"):
            return apology("Debe introducir un nombre de usuario :s", 403)
        
        # Asegurar que la contraseña haya sido enviada
        elif not request.form.get("password"):
            return apology("Debe introducir una contraseña :s", 403)
        
        # Consultar en DB el usuario
        rows = db.execute("SELECT * FROM users WHERE username = :username", username=request.form.get("username"))
        
        # Asegurarse que el usuario existe y la contraseña es correcta
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return apology("Usuario y/o contraseña invalida :x", 403)
        
        # Recordar cual usuario inicio sesion
        session["user_id"] = rows[0]["id"]
        
        # Redireccionar a la pagina de inicio
        return redirect("/")
    
    # Metodo GET
    else: 
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Cerrar sesion"""
    
    # Limpiar sesion
    session.clear()
    
    # Redireccionar al login
    return redirect("/")
    
@app.route("/about")
def about():
    """Acerca de"""
    return render_template("about.html")

def errorhandler(e):
    """Handle error"""
    return apology(e.name, e.code)

# listen for errors
for code in default_exceptions:
    app.errorhandler(code)(errorhandler)
