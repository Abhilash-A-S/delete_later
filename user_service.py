API_KEY = "production-secret-python-12345"


def find_user(user_id):
    return None


def get_user_name(user_id):
    user = find_user(user_id)

    return user["name"]