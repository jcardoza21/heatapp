from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, url_for, jsonify
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import *

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
    return render_template("index.html")


@app.route("/conduction", methods=["GET", "POST"])
@login_required
def conduction():
    """Calculos de Conduccion"""
    if request.method == "POST":

        q = 0

        if not request.form.get("T1") or not request.form.get("T2") or not request.form.get("material") or not request.form.get("Area") or not request.form.get("deltax"):
            flash("Completar los campos")
            return redirect("/conduction")

        T1 = float(request.form.get("T1"))
        T2 = float(request.form.get("T2"))
        m = request.form.get("material")

        deltax = float(request.form.get("deltax"))
        A = float(request.form.get("Area"))
        q = q + round(fourier(m,A, T1, T2, deltax), 3)

        return jsonify({"q":q})
        #return render_template("conduction.html", q= str(q)+ ' W')

    return render_template("conduction.html")


@app.route("/convection", methods=["GET", "POST"])
@login_required
def convection():
    """Calculos de Conveccion"""
    if request.method == "POST":

        q = 0

        if not request.form.get("T") or not request.form.get("Ts") or not request.form.get("A") or not request.form.get("h"):
            flash("Completar los campos")
            return redirect("/convection")

        T = float(request.form.get("T"))
        Ts = float(request.form.get("Ts"))
        h = float(request.form.get("h"))
        A = float(request.form.get("A"))
        q = q + round(newton(h, A, T, Ts), 3)

        return jsonify({"q":q})
        #return render_template("convection.html", q= str(q)+ ' W/m^2')
    return render_template("convection.html")


@app.route("/radiation", methods=["GET", "POST"])
@login_required
def radiation():
    """Calculos de Radiacion"""
    if request.method == "POST":

        q = 0

        if not request.form.get("T") or not request.form.get("T_2") or not request.form.get("emissivity"):
            flash("Completar los campos")
            return redirect("/radiation")

        T = float(request.form.get("T"))
        T_2 = float(request.form.get("T_2"))
        e = float(request.form.get("emissivity"))
        q = q + round(boltzmann(e, T, T_2), 3)

        return jsonify({"q":q})
        #return render_template("radiation.html", q= str(q)+ ' W/m^2')

    return render_template("radiation.html")


@app.route("/examples", methods=["GET", "POST"])
@login_required
def examples():
    """Ejemplos de Transferencia de Calor"""
    return render_template("examples.html")

@app.route("/dimensionless", methods=["GET", "POST"])
@login_required
def dimensionless():
    """Numeros adimensionales en Transferencia de Calor"""

    if request.method == "POST":

        h = float(request.form.get("h"))
        l = float(request.form.get("l"))
        k = float(request.form.get("k"))
        Bi = 0 + round(calculate_biot(h,l,k), 3)

        if h and l and k and Bi:
            return jsonify({"Bi":Bi})

        # alpha = float(request.form.get("alpha"))
        # t = float(request.form.get("t"))
        # l = float(request.form.get("l"))
        # Fo = 0 + round(calculate_fourier(alpha,t,l), 3)

        # if alpha and t and l and Fo:
        #     return jsonify({"Fo":Fo})

        # ro = float(request.form.get("ro"))
        # u = float(request.form.get("u"))
        # l = float(request.form.get("l"))
        # mi = float(request.form.get("mi"))
        # Re = 0 + round(calculate_reynolds(ro,u,l,mi), 3)

        # if ro and u and l and mi and Re:
        #     return jsonify({"Re":Re})

    return render_template("dimensionless.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    """Registrar al usuario"""

    # Metodo POST
    if request.method == "POST":

        # Validar nombre de usario
        if not request.form.get("username"):
            flash("Debe introducir un nombre de usuario :s")
            return redirect(url_for("register"))

        # Validar contraseña
        elif not request.form.get("password"):
            flash("Debe introducir una contraseña :s")
            return redirect(url_for("register"))

        # Validar que contraseña y confirmacion coincidan
        elif not request.form.get("password") == request.form.get("confirmation"):
            flash("Contraseñas no coinciden :c")
            return redirect(url_for("register"))

        # Generar hash para la contraseña
        hash = generate_password_hash(request.form.get("password"))

        # Verificar usuario repetido
        u=db.execute("SELECT * FROM users WHERE username =:username", username=request.form.get("username"))

        if not u:
           # Almacenar usuario en la DB
           new_user_id = db.execute("INSERT INTO users (username, hash) VALUES (:username, :hash)",username = request.form.get("username"), hash=hash)

        else:
           flash("Usuario no disponible :/")
           return redirect(url_for("register"))


        session["user_id"] = new_user_id
        flash("Ya te has registrado!! :D")

        return redirect(url_for("login"))
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
            flash("Debe introducir un nombre de usuario :s")
            return redirect(url_for("login"))

        # Asegurar que la contraseña haya sido enviada
        elif not request.form.get("password"):
            flash("Debe introducir una contraseña :s")
            return redirect(url_for("login"))

        # Consultar en DB el usuario
        rows = db.execute("SELECT * FROM users WHERE username = :username", username=request.form.get("username"))

        # Asegurarse que el usuario existe y la contraseña es correcta
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            flash("Usuario y/o contraseña invalida :x")
            return redirect(url_for("login"))

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
    flash("Sesion cerrada :D")

    # Redireccionar al login
    return redirect("/")

@app.route("/about")
def about():
    """Acerca de"""
    return render_template("about.html")


