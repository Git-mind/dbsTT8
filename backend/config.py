import os
SECRET_KEY = os.urandom(32)
JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')
# Grabs the folder where the script runs.
basedir = os.path.abspath(os.path.dirname(__file__))
# Enable debug mode.
DEBUG = True
# Connect to the database
SQLALCHEMY_DATABASE_URI = os.environ.get('DB_URL')
# Turn off the Flask-SQLAlchemy event system and warning
SQLALCHEMY_TRACK_MODIFICATIONS = False
# see sql statement for each request in the terminal
# SQLALCHEMY_ECHO = True