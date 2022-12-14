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

    def json(self):
        return {"AccountID": self.AccountID, "UserID": self.UserID, "AccountType": self.AccountType, "AccountBalance": self.AccountBalance}

class ScheduledTransaction(db.Model):
    __tablename__ = 'ScheduledTransactions'

    TransactionID = Column(Integer, primary_key=True, nullable=False)
    AccountID = Column(Integer, primary_key=True, nullable=False)
    ReceivingAccountID = Column(Integer)
    Date = Column(String(255))
    TransactionAmount = Column(Numeric(10, 2))
    Comment = Column(String(255))
    Transacted = Column(String(12))

    def json(self):
        return {"TransactionID": self.TransactionID, "AccountID": self.AccountID, "ReceivingAccountID": self.ReceivingAccountID, "Date": self.Date, "TransactionAmount": self.TransactionAmount, "Comment": self.Comment, "Transaction": self.Transacted}

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

    def json(self):
        return {"UserID": self.UserID, "Username": self.Username, "Password": self.Password, "Firstname": self.Firstname, "Lastname": self.Lastname, "Email": self.Email, "Address": self.Address, "OptIntoPhyStatements": self.OptIntoPhyStatements, }

    def jsonWithoutCredentials(self):
        return {
            "Firstname": self.Firstname, "Lastname": self.Lastname, "Email": self.Email, "Address": self.Address, "OptIntoPhyStatements": self.OptIntoPhyStatements
        }