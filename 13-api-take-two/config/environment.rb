require 'bundler'
Bundler.require

require_relative '../models/pokemon'

ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'pokemon.db'
)