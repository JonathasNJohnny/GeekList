from peewee import *

db = PostgresqlDatabase('GeekList', user='postgres', password='12345678', host='localhost')

class users(Model):
    id = AutoField()
    username = CharField(max_length=200)
    password = CharField(max_length=200)
    email = CharField(max_length=100)
    useradm = BooleanField(default=False)

    class Meta:
        database = db

db.connect()
#if users.table_exists():
#    db.drop_tables(users)
db.create_tables([users])
