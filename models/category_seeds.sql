USE expense_db;

INSERT INTO categories(name, createdAt, updatedAt)
VALUES('Rent/Mortgage', CURRENT_TIME(), CURRENT_TIME()),
('Utilities', CURRENT_TIME(), CURRENT_TIME()),
('Entertainment', CURRENT_TIME(), CURRENT_TIME()),
('Misc. Food', CURRENT_TIME(), CURRENT_TIME()),
('Groceries', CURRENT_TIME(), CURRENT_TIME()),
('Gas', CURRENT_TIME(), CURRENT_TIME()),
('Mobile', CURRENT_TIME(), CURRENT_TIME()),
('Subscriptions', CURRENT_TIME(), CURRENT_TIME()),
('Clothing', CURRENT_TIME(), CURRENT_TIME()),
('Charity', CURRENT_TIME(), CURRENT_TIME()),
('Leisure', CURRENT_TIME(), CURRENT_TIME()),
('Health', CURRENT_TIME(), CURRENT_TIME()),
('Credit card/Loans', CURRENT_TIME(), CURRENT_TIME()),
('Deposit', CURRENT_TIME(), CURRENT_TIME()),
('Withdrawal', CURRENT_TIME(), CURRENT_TIME());

SELECT * FROM categories;