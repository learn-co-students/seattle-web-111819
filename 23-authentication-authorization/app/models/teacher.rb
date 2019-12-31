class Teacher < ApplicationRecord
    has_secure_password
    # def password=(password)
    #     @password = Digest::SHA256.digest(password)
    #     # @password = password
    # end

    # Bcrypt ecryption method
    # BCrypt::Password.create("banana")
end
