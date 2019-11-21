#pulling in resource (rubygems.org), and uses in our program
require 'pry'

bank_accounts = [{"owner_name": "soundarya", "balance": 100, due_date: "12/25/2019"},
                {owner_name: "Chris", balance: 1000, due_date: "12/25/2019"},
                {owner_name: "Natali", balance: 3000, due_date: "12/25/2019"},
                {owner_name: "Jacob", balance: 500, due_date: "12/25/2019"},
                {owner_name: "Amy", balance: 2000, due_date: "12/25/2019"}
            ]



# Question asked: what languages should I learn after school.

# another sample class
# class House
#     def initialize()
#         @kitchen
#         @color
#         @stories
#         total_length = stories * 5.6
#         @room_number
#     end
# end

class BankAccount
    attr_reader(:owner_name, :due_date) #(41-52)
    attr_accessor(:balance) #(55-57)

    @@bank_accounts = [ ]
    #instance method
    def initialize(owner_name, balance, due_date)
        @owner_name = owner_name
        @balance = balance
        @due_date = due_date
        @@bank_accounts << self
        # binding.pry
    end

    ## CLASS METHOD -> with the self keyword
    def self.bank_accounts
        # binding.pry
        @@bank_accounts
    end

    def self.whale
        # largets balance -> object which is account BankAccount
        # how can I get access to balance
        @@bank_accounts.max_by { |bank_account| bank_account.balance }
    end

end

bank_accounts.each do |bank_account| 
    # binding.pry
    BankAccount.new(bank_account.values[0],bank_account.values[1], bank_account.values[2] )
end

soundarya = BankAccount.new("Soundatya", 1000, "11/11/11" )

binding.pry