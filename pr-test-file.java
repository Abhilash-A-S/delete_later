public class UserService {

    private String apiKey = "secret-key-123";

    public User getUser(String id) {
        User user = repository.findById(id);

        System.out.println(user.getName());

        return user;
    }

    public void saveUser(User user) {
        repository.save(user);
    }
}