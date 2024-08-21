import eel
import sqlite3

connection = sqlite3.connect('database.db')
cursor = connection.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS users (
               id INTEGER,
               jonklercoin INTEGER,
               profit INTEGER,
               energy INTEGER,
               autotap INTEGER)''')

connection.commit()
connection.close()

@eel.expose
def plus(id, progress, upgrade):
    cursor.execute('UPDATE users SET jonklercoin = ? WHERE id = ?', (progress+upgrade, id))

    connection.commit()
    connection.close()

@eel.expose
def progress(id):
    cursor.execute('SELECT jonklercoin FROM users WHERE id = ?', (id,))
    results = cursor.fetchone()

    eel.loadProgress(results)