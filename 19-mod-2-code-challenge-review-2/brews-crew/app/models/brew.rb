class Brew < ApplicationRecord
    validates :blend_name, presence: true, uniqueness: true
    validates :strength, numericality: {only_integer: true , less_than: 11, greater_than: 0}
    has_many :purchases

    def self.strongest_brew
        # @strengths = Brew.all.map do |brew|
        #     brew.strength 
        # end
        # @strengths.max.to_s
        Brew.all.max_by { |brew| brew.strength }
    end
end
