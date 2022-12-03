from sqlalchemy import create_engine
user = "admin"
password = "password"
host = "database-1.cxepdeco3gac.ap-southeast-1.rds.amazonaws.com"
port = 3306
from sqlalchemy import create_engine
engine = create_engine( f'mysql+pymysql://{user}:{password}@{host}:{port}/Bank',
    connect_args={"ssl": {"ssl_ca": "DigiCertGlobalRootCA.crt.pem"}})
with engine.connect() as con:
    res = con.execute('SHOW TABLES')
    print(res.fetchall())
    res = con.execute('SELECT * FROM ScheduledTransactions')
    print(res.fetchall())