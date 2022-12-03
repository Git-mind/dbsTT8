from sqlalchemy import Column, Integer, MetaData, Numeric, String
from sqlalchemy.dialects.mysql.types import BIT
# from sqlalchemy.ext.declarative import declarative_base

from utils.dbConfig import db



class BankAccount(db.Model):
    __tablename__ = 'BankAccount'

    AccountID = Column(Integer, primary_key=True, nullable=False)
    UserID = Column(Integer, primary_key=True, nullable=False)
    AccountType = Column(String(255))
    AccountBalance = Column(Numeric(10, 2))

    def jsonBankAccounts(self):
        return {
            "AccountID": self.AccountID,
            "AccountType": self.AccountType,
            "AccountBalance": self.AccountBalance
        }

        

class ScheduledTransaction(db.Model):
    __tablename__ = 'ScheduledTransactions'

    TransactionID = Column(Integer, primary_key=True, nullable=False)
    AccountID = Column(Integer, primary_key=True, nullable=False)
    ReceivingAccountID = Column(Integer)
    Date = Column(String(255))
    TransactionAmount = Column(Numeric(10, 2))
    Comment = Column(String(255))



class User(db.Model):
    __tablename__ = 'User'

    UserID = Column(Integer, primary_key=True)
    Username = Column(String(20))
    Password = Column(String(20))
    Firstname = Column(String(255))
    Lastname = Column(String(255))
    Email = Column(String(255))
    Address = Column(String(255))
    OptIntoPhyStatements = Column(BIT(1))