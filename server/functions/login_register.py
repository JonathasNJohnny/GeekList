from schemes.schemes import *

def register(email, password):
    if users.select().where(users.email == email).exists():
        return("error")
    newUser = users.create(username="default", email=email, password=password)
    newUser.save()
    return("success")


def login(email, password):
    if users.select().where(users.email == email).exists() and users.select().where(users.password == password).exists():
        return str(users.get(users.email == email).id)
    else:
        return "error"