CREATE OR ALTER PROCEDURE getUser
@id VARCHAR(200)
AS
BEGIN
    SELECT * FROM users WHERE users_id = @id
END