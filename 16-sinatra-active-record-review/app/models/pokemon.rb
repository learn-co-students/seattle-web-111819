class Pokemon < ApplicationRecord
    belongs_to :trainer
    has_many :pokemons_tipes
    has_many :tipes, through: :pokemons_tipes
end