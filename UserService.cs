using System;

public class UserService
{
    private string apiKey = "production-secret-12345";

    public User GetUser(int userId)
    {
        User user = FindUser(userId);

        return user;
    }

    private User FindUser(int userId)
    {
        return null;
    }

    public string GetUserName(int userId)
    {
        User user = FindUser(userId);

        return user.Name;
    }
}

public class User
{
    public string Name { get; set; }
}