# Discussion
1. What do mean when we say http is stateless.
  - doesn't really remember anything
  - no info is stored either in front end or backend
  - between each request.
  - 'tis more of a vessel that carries to an from
2. What are the 3 hash-like structures that Rails provides us.
  - params -> Rack and Sinatra
  - session -> Rails
  - errors-hash -> used in Sinatra -> Form-tag (Active Record Validations)
  - cookies -> Rails
  - signature TBD
  - flash -> Rails

### ADD CSS LECTURE :D

# Rails Quest
We have a pre-built trivia app which presents the user with questions in succession, and allows them to answer.
We can check in our controller whether the user answered correctly or not, but how can we get the server to 'remember' how many questions a user has answered  correctly for as long as they are on the site?

## Deliverables
* Add a feature which displays the number of questions a user has answered correctly
* Add a message which tells the user whether or not they got the last answer correct

## External Resources:
- [Rails Docs on Sessions](https://guides.rubyonrails.org/security.html#sessions)
- [Wiki Page on HTTP Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [Edit my Cookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en)