require 'pry'
require 'sqlite3'

require_relative '../models/user'
require_relative '../models/like'
require_relative '../models/tweet'

DB = {
    conn: SQLite3::Database.new("tweeter.db")
}

# DB[:conn].results_as_hash = true