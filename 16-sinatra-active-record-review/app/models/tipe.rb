class Tipe <ApplicationRecord
    has_many :pokemons_tipes
    has_many :pokemons, through: :pokemons_tipes
end