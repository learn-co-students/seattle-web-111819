class Trainer < ApplicationRecord
    belongs_to :team
    has_many :pokemons
end