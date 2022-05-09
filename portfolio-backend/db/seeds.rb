# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

Padawan = Struct.new(:first_name, :last_name, :email)

padawans = [
  Padawan.new("Luke", "Skywalker", "skywalker@jedi.org"),
  Padawan.new("Ezra", "Bridger", "bridger@jedi.org"),
  Padawan.new("Cal", "Kestis", "kestis@jedi.org"),
  Padawan.new("Kanan", "Jarrus", "jarrus@jedi.org"),
  Padawan.new("Leia", "Organa", "organa@jedi.org"),
  Padawan.new("Obi-Wan", "Kenobi", "kenobi@jedi.org"),
  Padawan.new("Qui-Gon", "Jinn", "jinn@jedi.org"),
]

padawans.each do |padawan|
  User.create!(
    first_name: padawan.first_name,
    last_name: padawan.last_name,
    email: padawan.email,
  )
end
