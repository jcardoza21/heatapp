import urllib.request

from ht import *
from flask import redirect, render_template, request, session
from functools import wraps


def login_required(f):
    """
    Decorate routes to require login.

    http://flask.pocoo.org/docs/0.12/patterns/viewdecorators/
    """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("user_id") is None:
            return redirect("/login")
        return f(*args, **kwargs)
    return decorated_function


# Del modulo de diseño en ingenieria quimica: https://github.com/CalebBell/ht
def fourier(material, A, T_1, T_2, deltax):
    """Ecuacion de Fourier para la TdeQ por conduccion a traves de una placa plana"""
    k = k_material('material')      # Conductividad del material [W/mK]
    deltaT = T_1-T_2                # Gradiente impulsor de TdQ [K]
    Q_conduccion = k*A*(deltaT/deltax)    # Tasa de TdQ [W]
    return Q_conduccion

def newton(h, A, T, T_s):
    """Ecuacion de enfriamento de Newton para TdQ por conveccion entre un solido y un fluido"""
    deltaT = T-T_s                  # Gradiente impulsor de TdQ [K]
    Q_conveccion = h*A*deltaT             # Tasa de TdQ [W]
    return Q_conveccion
    
def boltzmann(emissivity, T, T_2):
    """Ecuacion de Stefan Boltzmann para el intercambio de calor por radiacion entre dos superficies"""
    Q_radiacion = q_rad(emissivity, T, T_2) # Tasa de TdQ por unidad de Area [W/m2]
    return Q_radiacion 


# Del repo de calculo de numeros adimensionales: https://github.com/sebpaj/Dimensionless_numbers_calculator
def calculate_reynolds(ro,u,l,mi):

    return ro*u*l/mi

def calculate_prandtl(ni,alpha):

    return ni/alpha

def calculate_nusselt(h,l,k):

    return h*l/k

def calculate_rayleigh(g,b,T1,T2,x,ni,alpha):

    return g*b*(T1-T2)*pow(x,3)/(ni*alpha)

def calculate_peclet(l,u,alpha):

    return l*u/alpha

def calculate_grashof(g,beta,Ts,Tinf,l,ni):

    return g*beta*(Ts-Tinf)*pow(l,3)/(pow(ni,2))

def calculate_fourier(alpha,t,l):

    return alpha*t/(pow(l,2))

def calculate_biot(h,l,k):

    return h*l/k

def calculate_stokes(t,u,l):

    return t*u/l









