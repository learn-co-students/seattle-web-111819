class CreatePokemonsTipes < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons_tipes do |t|
      t.integer :pokemon_id
      t.integer :tipe_id
    end
  end
end
